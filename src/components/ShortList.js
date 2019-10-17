import React from 'react'

export default ({data, favorites}) => {

    const namesList = favorites.map(id => {
        const {name, sex} = data[id]
        console.log(name)
        return (
            <li key={id} className={sex}>{name}</li>
        )
    })

    return (
        <div className="favorites">
            <h4>Click on a name to shortlist it...</h4>
            <ul>
                {namesList}
            </ul>
        </div>
    );
}