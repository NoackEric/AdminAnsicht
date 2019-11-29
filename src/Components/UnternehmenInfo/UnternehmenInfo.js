import React from 'react';
import './unternehmen.css'
const Unternehmen = () => {
    return (
        <article className='unternehmen'>
            <section className='unternehmenSection'>
                <h2>Hallo Herr XYZ</h2>
                <p>Bitte nennen Sie uns den Namen Ihres Unternehmens <br />
                    oder für dass sie Arbeiten.
                </p>
                <form action="">
                    <input type="text" placeholder='Mustermann Firma' size='60' />
                    <br />
                    <label className='uLable'>Um welche Art eines Unternehmens handelt es sich dabei?</label>
                    <br />
                    <input type="text" placeholder='Verein , Gemeinützige Gemeinschaft ... ' size='60' />
                    <br />
                    <input className='unternehmenInfo' type="submit" value="Weiter" />
                </form>
            </section>
        </article>
    );
}

export default Unternehmen;