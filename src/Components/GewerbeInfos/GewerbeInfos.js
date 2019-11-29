import React from 'react';
import './gewerbe.css'
const Gewerbe = () => {
    return (
        <article className='gewerbe'>
            <section className='gewerbeSection'>
                <h2>Bitte schreiben sie in kurzen Sätzen</h2>
                <form className='gewerbeForm' action="#">
                    <p>Wobei handelt es sich, bei Ihrem neuen Projekt?</p>
                    <textarea rows="4" size='50' cols="50" name="comment" form="usrform" placeholder='z.B Neuentwicklung, Überarbeitung?' />
                    <p>Wenn sie erlauben, welches Ziel steuert Ihr neues Projekt an?</p>
                    <textarea rows="4" size='50' cols="50" name="comment" form="usrform" placeholder='z.B Informieren, Verkaufen, Kundengewinnung ...?' />
                    <p>Welche erwartung haben Ihre Kunden an Ihr Projekt?</p>
                    <textarea rows="4" size='50' cols="50" name="comment" form="usrform" placeholder='z.B Verbesserung der UX und UI' /> <br />
                    <input className='gewerbeSubmit' type="submit" value='Weiter'/>
                </form>

            </section>
        </article>
    );
}

export default Gewerbe;