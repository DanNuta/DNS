import React, { Component } from 'react';
import shop from "../../Pages/icon/buy.svg";
import wishList from "../../Pages/icon/heart_icon.svg";
import "./ProductsItem.scss";
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useHistory  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {ImagesCalitateSVGHeart, ImagesCalitateSVGHeartHover, ImagesCalitateSVGShop, ImagesCalitateSVGShopHover} from "./IconsSvg";


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

        let wishList = this.props.elementAded.map(el => el.id);
        let shopList = this.props.dataShop.map(el => el.id);




        return ( 
            
               <div className="products">


                  <NavLink to={`/produse/${this.props.element.id}`}>



                        <div className="img_description">
                               <div className="img">
                                 <img className="instrument" src={this.props.element.img} alt="" />
                               </div>
                                <h3 className='description_products'>
                                    <p>{this.props.element.title}</p>
                                </h3>
                        </div>

                </NavLink>




                    <div className="element_bottom_prodicts">



                            <div className="price">
                                    <h2>{this.props.element.curentPrice} lei</h2>
                            </div>

                            

                           
                            <div  className="buy_wishList">
                               <ul className='buy_wishList_ul'>
                                <li onClick={this.productsFromShoping}>{shopList.includes(this.props.element.id) ? <ImagesCalitateSVGShopHover/> : <ImagesCalitateSVGShop/>}</li>
                                <li onClick={this.wishListItem}>{wishList.includes(this.props.element.id) ? <ImagesCalitateSVGHeartHover/> : <ImagesCalitateSVGHeart/>}</li>
                               </ul>

                            </div>


                           
                            
                    </div>

                    <Outlet/>

               </div>
                

            
         );
    }
}
 
export default ProductsItem;