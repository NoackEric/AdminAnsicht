import React from 'react';
import './vorgaben.css'

const Vorgaben = () => {
    return (
        <section className='VorgabenSection'>
            <h2>Ihre Must Have</h2>
            <form className='VorgabenSectionForm' action="">
                <p>Was sind Ihre Ideen für das Projekt?</p>
                <input className='mustHave' type="text" placeholder='Farben, Logos, ...?' size='50' />
                <p>Oder habt Ihr sogar ein Mock up?</p>
                <input type="file" enctype="multipart/form-data" />
                <p>Was ist ein Must have auf Ihrer Seite?</p>
                <input className='mustHave' type="text" placeholder='Farben, Logos, ...?' size='50' /> <br />
                <input className='VorgabenSectionSubmit' type="submit" value="Zur vorletzten Seite"/>
            </form>
        </section>
    );
}

export default Vorgaben;
