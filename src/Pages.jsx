import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useParams, useHistory  } from 'react-router-dom';
import start from "../src/Components/Pages/icon/star1.svg";
import buy from "../src/Components/Pages/icon/buy.svg";
import startNeselected from "../src/Components/Pages/icon/starNone.svg";
import verify from "../src/Components/Pages/icon/verify.svg";
import heartBlack from "../src/Components/Pages/icon/heartBlack.svg";
import { useState } from "react";
import { send } from 'emailjs-com';



const Pages = (props) => {

    const { slug } = useParams();
    let products = props.element;
    let curentItem = products.find(item => item.id === slug);

    const [nume, setNume] = useState("");
    const [email, setEmail] = useState("");
    const [telefon, setTelefon] = useState("");
    const [valueElement, setValueElement] = useState("");
    const [achitaOnline, setAchitaOnline] = useState(false);


     const changeNume = (e) => {
        setNume(e.target.value)
     }
      


     const changeEmail = (e) => {
        setEmail(e.target.value)
     }

     const changeTelefon = (e) => {
        setTelefon(e.target.value)
     }





    const adaugaInCos = () => {
           props.onCos(curentItem)
     }



     const adaugaLaFavorite = () => {
           props.onShop(curentItem)

           
     }


     const inputNumber = (e) => {
        setValueElement(e.target.value)

  }



  const achitaOnlineForm = () => {
    setAchitaOnline(true)
}






 






  



    






    





    



   
    

  
    return (

        <div className='center'>
                


        <div className="item">

            
                <div className='card_items'>
                <div className="left_images">
                    <img className='img_products' src={curentItem.img} alt="" />
                </div>

                <div className="right_text">
                    <h1>{curentItem.title}</h1>

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
                            <p>Cod: <span> {curentItem.id}</span></p>
                        </div>


                        <div className="price">
                            <span><h1 className='price_id'>{curentItem.price} lei</h1> <sup>{curentItem.price} lei</sup></span>
                        </div>

                    </div>


                    <div className="description">
                        <hr />
                        <h2>Description:</h2>
                        <p>{curentItem.description}</p>
                    </div>


                    <div className="counter_price">
                        <hr />
                          <h2>Cantitate:</h2>
                            
                            <div className="input_contacteaza">
                                        <input onChange={inputNumber} min={1} type="number" />
                                        <button onClick={achitaOnlineForm}>Achita online</button>
                                    </div>
                                
                            

                        
                    </div>


                    <div className="add_to_cart">

                       
                            <li onClick={adaugaLaFavorite}><img src={buy} alt="" /> Adauga in cos</li>
                            <li onClick={adaugaInCos}><img src={heartBlack} alt=""  />Adauga la favorite</li>
                       

                    </div>
                </div>
            </div>

                
            

        </div>





        

        


       
    </div>
        
        
    )

}
 
export default Pages;