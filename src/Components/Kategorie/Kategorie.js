import React from 'react';
import './kategorie.css';


const Kategorie = () => {
    return (
        <aside className='asideKategorie'>
            <section>
                <div className='kategories'><p>Kontaktdaten</p></div>
                <div className='kategories'><p>Generelle Infos</p></div>
                <div className='kategories'>Struktur/ Inhalt</div>
                <div className='kategories'>Vorgaben/ Bedingungen</div>
                <div className='kategories'>Sonstiges</div>
            </section>
        </aside>
    );
}

export default Kategorie;