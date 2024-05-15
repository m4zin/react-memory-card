import { useEffect, useState } from 'react'

interface CardsProps {
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setBestScore: React.Dispatch<React.SetStateAction<number>>;
    bestScore: number;
}

const cardData = [];

export default function Cards({ setScore, setBestScore, bestScore }: CardsProps) {
    const [uniqueClicks, setUniqueClicks] = useState<number[]>([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        (async function () {
            try {
                // id 0 does not exist, hence starting with 1.
                for (let i = 1; i <= 12; i++) {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    const data = await response.json()
                    cardData.push({ id: i, imgUrl: data.sprites.front_default })
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoaded(true)
            }
        })()

        // Empty dependency array since,
        // we only want this effect to work on component mount only.
    }, [])

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        const pokemon = parseInt((e.target as HTMLButtonElement).closest('button').value);

        if (!(uniqueClicks.includes(pokemon))) {
            setUniqueClicks(prevUniqueClicks => [...prevUniqueClicks, pokemon])
            setScore(prevScore => prevScore + 1)
        } else {
            setScore(0)
            setUniqueClicks([])
            // If previous best score is less than current score, 
            // then make current score best score.
            if (bestScore < uniqueClicks.length) {
                setBestScore(uniqueClicks.length)
            }
        }

        // Shuffles the cards on each click
        cardData.sort(() => Math.random() - 0.5);
    }

    return (
        <>
            {loaded ? (
                cardData.map(card =>
                    <button key={card.id} value={card.id} onClick={handleClick}>
                        <img src={card.imgUrl} alt="pokemon" />
                    </button>
                )
            ) : (
                <div>Loading...</div> // Render a loading indicator while fetching data
            )}
        </>
    )
}