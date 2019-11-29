import React from 'react';
import './inhalt.css'
const Inhalt = () => {
    return (
        <article className='Inhalt'>
            <section className='InhaltSection'>
                <h2>Noch einige Fragen zum Inhalt</h2>
                <form className='InhaltForm' action="#">
                    <p>Können Sie uns eine grobe Inhaltsstruktur vorgeben?</p> 
                    <textarea rows="4" size='50' cols="50" name="comment" form="usrform" placeholder='z.B Impressum, Kontakt, ...?' />
                    <p>Soll es bestimmte Inhalte geben?</p>
                    <input type="file" enctype="multipart/form-data" /> <br /> <br />
                    <textarea rows="2" size='50' cols="50" name="comment" form="usrform" placeholder='z.B Bilder, Slider, GoogleMap ...?' />
                    <p>Wie sieht es da mit Ihrer Socialmedia verbindung aus?</p>
                    <button><i className="socialIcon fab fa-twitter-square"></i></button>
                    <button><i className="socialIcon fab fa-pinterest-square"></i></button>
                    <button><i className="socialIcon fab fa-facebook-square"></i></button>
                    <button><i className="socialIcon fab fa-instagram"></i></button>
                    <p>Wollen sie auch andere Sprachen haben?</p>
                    <input type='text' size='50' placeholder='z.B EN, FR, TU ...?' /> <br />
                    <input className='InhaltSubmit' type="submit" value='Weiter' />
                </form>

            </section>
        </article>
    );
}

export default Inhalt;