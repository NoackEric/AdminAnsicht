import React from 'react';
import './sonstiges.css'
const Sonstiges = () => {
    return (
        <article className='Sonstiges'>
            <section className='SonstigesSection'>
                <h2>Fast geschafft!</h2>
                <p>Auch wir können diese Frage nicht verhindern, welches Budget habt ihr?</p>
                <form action="">
                    <input type="number" placeholder='Betrag in Euro' size='60' />€
                    <br />
                    <p>Und sofern geplant, würden wir gerne ein Fertigstellungstermin wissen</p>
                    <br />
                    <input type="Date"  size='60' />
                    <br />
                    <input className='SonstigesInfo' type="submit" value="Weiter" />
                </form>
            </section>
        </article>
    );
}

export default Sonstiges;