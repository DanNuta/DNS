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


class NavBar extends Component {

    state = {
        wishListHeader: false,
        shopItems: false,
        item: [],
        shop: []
       
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



                        <nav>

                            <ul className="logo">
                                <li><NavLink to="/"><img src={logo} alt="Logo"/></NavLink></li>
                                <li>9:00-19:00</li>
                            </ul>


                            <ul className="nav_bar_links">
                                <li><NavLink activeClassName="active" className="links-a" to="/">Despre</NavLink></li>
                                <li><NavLink activeClassName="active" className="links-a" to="/products">Produse</NavLink></li>
                                <li><NavLink activeClassName="active" className="links-a" to="/">Servicii</NavLink></li>
                                <li><NavLink activeClassName="active" className="links-a" to="/contact">Contacte</NavLink></li>
                            </ul>

                            <ul className="nav_bar_icons">
                                <li>0767216161</li>
                                <li><NavLink to="/shop"><img src={shop} alt="shop" /></NavLink></li>
                                <li className="wishList" onClick={this.wishList}><img src={heart} alt="wishList" /></li>




                                <li><a href="https://www.facebook.com/" target="_blank" ><img src={facebook}  alt="facebook" /></a></li>
                                <li><a href="https://www.youtube.com/" target="_blank" ><img src={youtube} alt="facebook"/></a></li>
                                
                            </ul>
                        </nav>


                        
                
            </header>
         );
    }
}
 
export default NavBar;