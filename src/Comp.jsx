import React from 'react'

function Comp() {

    const handleClicked = async () => {
        const res = await basicInfo.ping();
        console.log(res);
    };

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleClicked}>log</button>
            <p>{basicInfo.name}</p>
            <p>{basicInfo.version}</p>
            <p>{basicInfo.author}</p>
            <p>{basicInfo.date}</p>
        </div>
    )
}

export default Comp