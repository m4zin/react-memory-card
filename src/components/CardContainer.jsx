import { useState } from 'react'
import '../styles/CardContainer.css'

export default function CardContainer() {
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    return (
        <>
            <h3 className='heading'>Memory cards - Don't click on the same card twice!</h3>
            <div className='score'>
                <p>Current score: {score} | Best score: {bestScore}</p>
            </div>
            <main>

            </main>
        </>
    )
}