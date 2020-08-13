import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = "ba05983fc14c84973475d253d82bc3452e956eca572e1d8b807a3e2338fdd0dc/stage"

const App = () => {

    useEffect(() => {
        //This generates AI communication buttons below the window
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if (command === "newHeadlines"){
                    console.log(articles)
                }
            }
        })
    }, [])

    return (
        <div>
            <h1>Alan AI News Application</h1>
        </div>
    )
}

export default App;