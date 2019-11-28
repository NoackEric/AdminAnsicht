import React from 'react';


const MainAdmin = (props) => {
    console.log(props)
    return ( 
        <article className={props.classNameDefault}>
                <div className='pointContainer'>
                    <div className='pointContainer2'>
                        <div style={redPoint}></div>
                        <p className='status'>New</p>
                    </div>
                    <p>{new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}</p>
                </div>
                <h2>{props.data.unternehmen}</h2>
                <p className='discription'>{props.data.verwendung}</p>
                <div className='btn'>
                    <button onClick={()=>props.showPopup(props.data.id)}>Erfahre mehr</button>
                    <i id='icon' onClick={() => props.deleteAdmin(props.data.id)} className="fas fa-dumpster-fire"></i>
                </div>
                
            </article>
     );
}
 
const redPoint = {
    height: '20px',
    width: '20px',
    background: 'red',
    borderRadius: '90%'
}
export default MainAdmin;