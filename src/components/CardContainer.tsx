import { useState } from 'react'
import Cards from './Cards'
import '../styles/CardContainer.css'

export default function CardContainer() {
    const [score, setScore] = useState<number>(0)
    const [bestScore, setBestScore] = useState<number>(0)

    function resetGame() {
        window.location.reload()
    }

    return (
        <>
            <h3 className='heading'>Memory cards - Don't click on the same card twice!</h3>
            <div className='score'>
                <p>Current score: {score} | Best score: {bestScore}</p>
            </div>
            <main>
                <Cards setScore={setScore} setBestScore={setBestScore} bestScore={bestScore}></Cards>
            </main>
            <button className='reset-btn' onClick={resetGame}>Reset!</button>
        </>
    )
}