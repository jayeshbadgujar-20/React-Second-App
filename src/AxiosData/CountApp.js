import React, { useState, useEffect } from 'react'

function CountApp() {
    const [count, setCount] = useState(0)

    const useDocumentTitle =title=>{

   

    useEffect  (() => {
        document.title = title
    }, [title])
}
useDocumentTitle(`user clicked  ${count} Times`)
    return (
        <>
            <div> CountApp </div>
            <h4>User Clicked on Button for {count} times</h4>
            <button onClick={() => setCount(count + 1)}>click {count}</button>
        </>
    )
}

export default CountApp
