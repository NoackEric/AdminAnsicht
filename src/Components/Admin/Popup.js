import React from 'react';
import './style.css';

const Popup = (props) => {

    return (
        
        <article className={props.popUp}>
            <div className='pointContainer'>
                <div className='pointContainer2'>
                    <div style={redPoint}></div>
                    <p className='status'>New</p>
                </div>
                <p>{new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}</p>
            </div>
            {/* Moch Up img faken / einfach ein img mit in  Components packen */}
            <h2>{props.unternehmen}</h2>
            <p>Name des/der Antragstellers/ rin :{props.gender} {props.name}</p>
            <p>Name des Unternehmens: {props.unternehmen}</p>
            <p>Art des Unternehmens: {props.unternehmensArt}</p>
            <p className='discription'>Der Verwendungszewck der Seite: {props.verwendung}</p>
            <p>Budget: {props.budget} €</p>
            <p> Zum: {props.deadLine}</p>
            <div className='btn'>
                <button onClick={props.btnHandler}>Zeige weniger</button>
            </div>
        </article>
    );
}

export default Popup;
const redPoint = {
    height: '20px',
    width: '20px',
    background: 'red',
    borderRadius: '90%'
}

