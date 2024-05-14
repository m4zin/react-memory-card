import { useState } from 'react'
import '../styles/CardContainer.css'

function Cards() {
    return (
        <>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
            <button type='button'>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full//151.png" alt="pokemon" />
            </button>
        </>
    )
}

export default function CardContainer() {
    const [score, setScore] = useState<number>(0)
    const [bestScore, setBestScore] = useState<number>(0)

    return (
        <>
            <h3 className='heading'>Memory cards - Don't click on the same card twice!</h3>
            <div className='score'>
                <p>Current score: {score} | Best score: {bestScore}</p>
            </div>
            <main>
                <Cards></Cards>
            </main>
        </>
    )
}