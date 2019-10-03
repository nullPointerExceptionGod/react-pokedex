import React from 'react'
import './styles/detaileview.css'

const DetailView = ({pokemon}) => {

    const {id, name, sprite, type} = pokemon;
    return (
        <section className="detail-view">
            {
                sprite !== undefined
                &&
                <img src={sprite}
                    alt="Pokemon Sprite" 
                    className='sprite-image'/>
            }

            <div className="data-wrapper">
                <h2 className="data-name">ID: {id} {name}</h2>
                <h2 className="data-char">Type: {type}</h2>
            </div>
        </section>
    )
}

export default DetailView;