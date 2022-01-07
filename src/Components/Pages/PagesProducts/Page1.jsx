import React, { Component } from 'react';
import start from "../../Pages/icon/star1.svg";
import startNeselected from "../../Pages/icon/starNone.svg";
import verify from "../../Pages/icon/verify.svg";
import buy from "../../Pages/icon/buy.svg";
import heartBlack from "../../Pages/icon/heartBlack.svg";
import "./Pages1.scss";
import { send } from 'emailjs-com';



class Pages1 extends Component {

    
    

    state = {
        nume: "",
        email: "",
        telefon: "",
        valueElement: "",
        achitaOnline: false
        
    }

    nume = (e) =>{
        let value = e.target.value;
        this.setState({nume: value})
    }

    email = (e) =>{
        let value = e.target.value;
        this.setState({email: value})
    }

    telefon = (e) =>{
        let value = e.target.value;
        this.setState({telefon: value})
    }

    inputNumber = (e) =>{
        let value = e.target.value;

        this.setState({valueElement: value})

    }



    
    sendEmail = (e) =>{

        e.preventDefault();

        if(this.state.nume.length === 0){
            alert("Introdu un nume")
            return
        }


        if (!this.state.email){
            alert("Introdu o adresa de mail corecta")
            return
        }
    
        if(isNaN(this.state.telefon) || this.state.telefon.length < 9 || this.state.telefon.length >= 10 ){
            alert("Introdu un un nr de telefon valid")
            return
        }


        send(
            'service_v186ofd',
            'template_m0n6104',
            this.state,
            'user_HhwPsdYuSdseFT3DDVWkC'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
    
          e.target.reset();
          
          this.setState({nume: "", email: "", telefon: ""})
    
       }




    achitaOnline = () =>{
        this.setState({achitaOnline: !this.state.achitaOnline})
    }


    adaugaInCos = () =>{
        
        this.props.onCos(this.props.el)
    }


    adaugaLaFavorite  =() =>{
        this.props.onShop(this.props.el)
    }



   
   

    render() { 
        return ( 
            <div className='center'>
                


                <div className="item">

                    
                        <div className='card_items'>
                        <div className="left_images">
                            <img className='img_products' src={this.props.el.img} alt="" />
                        </div>

                        <div className="right_text">
                            <h1>{this.props.el.title}</h1>

                            <div className="element_about_products">

                                <div className="adauga_recenzie">
                                    <div className="recenzii">
                                        <span><img src={start} alt="" /></span>
                                        <span><img src={start} alt="" /></span>
                                        <span><img src={start} alt="" /></span>
                                        <span><img src={start} alt="" /></span>
                                        <span><img src={startNeselected} alt="" /></span>
                                    </div>

                                    <div className="nr_of_recenzie">
                                        <p>(6) Recenzii</p>
                                    </div>

                                    <div className="space">
                                        <p>|</p>
                                    </div>

                                    <div className="adauga_o_recenzie">
                                        <p>Adauga o recenzie</p>
                                    </div>
                                </div>


                                <div className="verify_element_stock">
                                    <span><img src={verify} alt="" /> In stoc</span>
                                    <p>Cod: <span> {this.props.el.id}</span></p>
                                </div>


                                <div className="price">
                                    <span><h1 className='price_id'>{this.props.el.price} lei</h1> <sup>{this.props.el.price} lei</sup></span>
                                </div>

                            </div>


                            <div className="description">
                                <hr />
                                <h2>Description:</h2>
                                <p>{this.props.el.description}</p>
                            </div>


                            <div className="counter_price">
                                <hr />
                                  <h2>Cantitate:</h2>
                                    <div className="input_contacteaza">
                                        <input onChange={this.inputNumber} min={1} type="number" />
                                        <button onClick={this.achitaOnline}>Achita online</button>
                                    </div>

                                
                            </div>


                            <div className="add_to_cart">

                               
                                    <li onClick={this.adaugaLaFavorite}><img src={buy} alt="" /> Adauga in cos</li>
                                    <li onClick={this.adaugaInCos}><img src={heartBlack} alt=""  />Adauga la favorite</li>
                               

                            </div>
                        </div>
                    </div>

                        
                    

                </div>


                {this.state.achitaOnline === true &&
                    <div className="form">
                        <form onSubmit={this.sendEmail} className=' form_item' action="">

                    <h2>COMPLETEAZA  DATELE PENTRU A FI CONTACTAT</h2>

                    <div className="form_element">
                        <div className="nume div">
                            <label htmlFor="nume">Nume</label>
                            <input onChange={this.nume} type="text" name='nume' id='nume' placeholder='Ignatiuc Anastasia' />
                        </div>

                        <div className="email div">
                            <label htmlFor="email">Email</label>
                            <input onChange={this.email} type="email" name="email" id='email' placeholder='ignatiucanastasia@gmail.com' />
                        </div>

                        <div className="tel div">
                            <label htmlFor="tel">Telefon</label>
                            <input onChange={this.telefon} type="tel" name="valueElement"  id='tel' placeholder='+37369640087' />
                        </div>
                    </div>    

                       <div className="button">
                            <input  className='input_btn' type="submit" value="Achita online" />
                            <button onClick={this.achitaOnline}>Cancel</button>
                        </div>

                    
                       </form>
                    </div>
                  }
            </div>
         );
    }
}
 
export default Pages1;