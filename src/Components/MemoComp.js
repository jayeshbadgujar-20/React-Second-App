import React from 'react'

function MemoComp({name}) {
    console.log("Memo comp is working");
    return (
        <>
            <div>
                {name}
            </div>
        </>
    )
}

export default React.memo(MemoComp)
