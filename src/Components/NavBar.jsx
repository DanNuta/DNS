import React, { Component } from 'react';
import "./NavBar.scss";
import {  NavLink } from "react-router-dom";
import logo from "../../src/images/Logo/logo.svg";
import shop from "../../src/Components/Pages/icon/header_icon/shop.svg";
import heart from "../../src/Components/Pages/icon/header_icon/heart.svg";
import facebook from "../../src/Components/Pages/icon/header_icon/facebook.svg";
import youtube from "../../src/Components/Pages/icon/header_icon/youtube.svg";
import Home from './Pages/Home/home';
import ElementWishList from './ElementWishList';
import menu from "../../src/Components/Pages/icon/menu.svg";
import cancel from "../../src/Components/Pages/icon/cancel.svg";


class NavBar extends Component {

    state = {
        wishListHeader: false,
        shopItems: false,
        item: [],
        shop: [],
        burgerMenu: false,
        screen: window.innerWidth
       
    }


    

    wishList = () =>{
        this.setState({wishListHeader: !this.state.wishListHeader})
        
    }

   

    deleteItem = (idElemet) =>{
        
        this.props.onDeleteElementFromWishList(idElemet)
    }


    solicitaOferta = () =>{
        this.props.selectElementFromWishList(this.props.wishList)
    }



    deleteAllItems = () =>{
        this.props.onDeleteAllArray([])
    }

    


    returnElementsWishList = () =>{

        return (

            this.state.wishListHeader && 
                <div className={this.props.wishList.length === 0 ? "btn" : "wishListCards"} >
                            <div className="elementWishList">
                                    <h3>Preferinte</h3>
                                    <button onClick={this.deleteAllItems}>Sterge</button>
                            </div>


                                {this.props.wishList.map(el =>(
                                                
                                    <ElementWishList delete={this.deleteItem} item={el}/>

                                ))}

                                            
                       <button onClick={this.solicitaOferta} className="btn_bottom">Solicită oferta!</button>
                </div>
            
        )

    }



    bars = () =>{
        this.setState({burgerMenu: !this.state.burgerMenu})

        console.log("hello")
    }


 
    render() { 

        return ( 


            <header className="header">



                      {this.returnElementsWishList()}


                      {
                          this.state.wishListHeader && 
                          <div className={this.props.wishList.length === 0 ? "btn" : "wishListCards"} >
                                      <div className="elementWishList">
                                              <h3>Preferinte</h3>
                                              <button onClick={this.deleteAllItems}>Sterge</button>
                                      </div>
          
          
                                          {this.props.wishList.map(el =>(
                                                          
                                              <ElementWishList delete={this.deleteItem} item={el}/>
          
                                          ))}

                            <button onClick={this.solicitaOferta} className="btn_bottom">Solicită oferta!</button>
          
                                                      
                                                      
          
                          </div>
                      }




                           <div className="mobile_elements">

                                <ul className="mobile_logo">
                                        <li><NavLink to="/"><img src={logo} alt="Logo"/></NavLink></li>
                                 </ul>

                                  <ul className='bars_shop'>
                                        <li className='li'><img onClick={this.bars} src={menu} alt="" /></li>
                                        <li>9:00 AM - 19:00 PM</li>
                                        <li><NavLink to="/shop"><img src={shop} alt="shop" /></NavLink></li>
                                  </ul>
                            </div>

                           



                        <nav  className={this.state.burgerMenu ? "active_mobile nav_bar" : "nav_bar"}>

                            

                            <ul className="logo">
                                <li><NavLink to="/"><img src={logo} alt="Logo"/></NavLink></li>
                                <li>9:00-19:00</li>
                            </ul>

                            <div onClick={this.bars} className="cancel">
                                <img src={cancel} alt="" />
                            </div>

                            <ul onClick={this.bars} className="nav_bar_links">
                                <li><NavLink activeClassName="active" className="links-a" to="/">Despre</NavLink></li>
                                <li><NavLink activeClassName="active" className="links-a" to="/products">Produse</NavLink></li>
                                <li> <a className="links-a" href="/#ce_oferim">Servicii</a></li>
                                <li><NavLink activeClassName="active" className="links-a" to="/contact">Contacte</NavLink></li>
                            </ul>

                            <ul onClick={this.bars} className="nav_bar_icons">
                                <li>0767216161</li>
                                <li><NavLink to="/shop"><img src={shop} alt="shop" /></NavLink></li>
                                <li className="wishList" onClick={this.wishList}><img src={heart} alt="wishList" /></li>
                                <li><a href="https://www.facebook.com/" target="_blank" ><img src={facebook}  alt="facebook" /></a></li>
                                <li><a href="https://www.youtube.com/" target="_blank" ><img src={youtube} alt="facebook"/></a></li>

                           
                                
                            </ul>

                            <ul className='program'>
                                <li>Program: 9:00 AM - 19:00 PM</li>
                                <li>0767216161</li>
                            </ul>

                            
                       
                        </nav>


                        
                
            </header>
         );
    }
}
 
export default NavBar;