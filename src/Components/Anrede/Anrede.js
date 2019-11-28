import React from 'react';
import './anrede.css'
const Anrede = () => {
    return ( 
        <article className='anrede'>
            <section>
                <h2>Wie sollen Wir dich ansprechen?</h2>
                <button>Frau</button>
                <button>Divers</button>
                <button>Herr</button>
            </section>
            <section>
                <h2>Bitte gib uns, hier deinen Namen </h2>
                <form action="">
                    <input type="text" placeholder='Max Mustermann' size='60'/>
                </form>
                <button>Weiter</button>
            </section>
        </article>
     );
}
 
export default Anrede;