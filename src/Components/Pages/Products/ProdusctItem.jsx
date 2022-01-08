import React, { Component } from 'react';
import shop from "../../Pages/icon/buy.svg";
import wishList from "../../Pages/icon/heart_icon.svg";
import "./ProductsItem.scss";
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useHistory  } from 'react-router-dom';


class ProductsItem extends Component {



    /* wishList props*/

    wishListItem = () =>{
          this.props.onDataItems(this.props.element)
    }

    /* end wishList props*/




    /* shoping props */

    productsFromShoping = () =>{
          this.props.onElementShop(this.props.element)
    }
    /* end shoping props */
    

    render() { 
        return ( 
            
               <div className="products">
                        <div className="img_description">
                               <div className="img">
                                 <img className="instrument" src={this.props.element.img} alt="" />
                               </div>
                                <p>{this.props.element.description}</p>
                        </div>

                    <div className="element_bottom_prodicts">
                            <div className="price">
                                    <h2>{this.props.element.curentPrice} lei</h2>
                            </div>

                            <div className="buy_wishList">
                                <img src={shop} onClick={this.productsFromShoping} alt="" />
                                <img src={wishList} onClick={this.wishListItem} alt="" />

                            </div>
                    </div>

                    <Outlet/>

               </div>
                

            
         );
    }
}
 
export default ProductsItem;