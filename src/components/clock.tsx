import React, { useState, useEffect } from 'react'

function Clock() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentTime = new Date()
        const hours = currentTime.getHours();

        if (hours < 12) {
            setGreeting(`Good Morning! Search weather in your location...`)
        } else if (hours < 18 ) {
            setGreeting(`Good Afternoon! Search weather in your location...`)
        } else {
            setGreeting(`Good Evening! Search weather in your location...`)
        }
    }, []);

    return (
        <h1 className='text-6xl'>{greeting}</h1>
        
    )
}

export default Clock;