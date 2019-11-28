import React, { Component } from 'react';
import './style.css'
import Datas from './Data'
import Popup from './Popup';
import MainAdmin from './MainAdmin';



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'popUp hidden',
            classNameDefault: 'normal',
            Datas: Datas,
            
        }
    }
   
    showPopup = (id)=>{
        console.log(id)
        let delElement;
        delElement =this.state.Datas.filter((el)=> {
            return el.id === id
        })

         this.setState({ classNameDefault: 'normal hide',className: 'popUp show' });
    }
    showHidden =()=>{
        console.log('works')
        this.setState({ classNameDefault: 'normal', className: 'hidden' });
    }
    deleteAdmin=(id)=>{
        console.log(id)
        const filtredData = this.state.Datas.filter(data => {
            return data.id !== id
          })
          this.setState({ Datas: filtredData })
    }
    render() {
        let newArr =[];
        newArr= this.state.Datas.map((el)=> { 
          return  <Popup popUp=
          {this.state.className} 
          Keys={el.id}
          btnHandler={this.showHidden} 
          datas={this.state.Datas}
          gender={el.gender}
          name={el.name}
          unternehmen={el.unternehmen}
          unternehmensArt={el.unternehmensArt}
          verwendung={el.verwendung}
          technologie={el.technologie}
          budget={el.budget}
          deadLine={el.deadLine}
          />
        })

        const Datas=this.state.Datas.map((data,index)=><MainAdmin  data={data} key={data.id} classNameDefault={this.state.classNameDefault} deleteAdmin={this.deleteAdmin} showPopup={()=>this.showPopup(data.id)}/> )

        return (
            <section>
              {Datas}
              {newArr}
            </section>
            
        );
    }
}

export default Admin;

