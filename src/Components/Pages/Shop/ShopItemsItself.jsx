import React, { Component } from 'react';
import close from "../../Pages/icon/close.svg";
import "./ShopItemsItself.scss";

class ItemShopItself extends Component {


    close = () =>{
        this.props.deleteItem(this.props.element)
    }



    changeCantity = (e) =>{

        let value = e.target.value
        this.props.changeEl(value, this.props.element.id)

       

        


    }




    render() { 

        
        return ( 
            <div className="elementAded">

                <hr/>

                <div className="element_itself">

                    <div className="element_products">
                        <div className="img_left">
                            <img src={this.props.element.img} alt="" />
                        </div>
                        <div className="text_right">
                            <h2>{this.props.element.title}</h2>
                            <p>Cod: <span>{this.props.element.id}</span></p>
                            <p><h3>Descriere:</h3>Contorul de trăsnet SLC-01 este conceput pentru detectarea și numărarea trăsnetelor captate de instalatiile paratrasnet. Este montat în general pe un conductor de coborâre</p>
                        </div>
                    </div>


                    <div className="price_total_counter">

                        <div className="price">
                            
                            <p>{this.props.element.curentPrice}lei</p>
                        </div>
                        <div className="counter">
                            <h3>Cantitate:</h3>
                            <input min="1"
                                   type="number" placeholder='1'
                                   
                                   onChange={this.changeCantity}
                                   />
                        </div>

                        <div className="price_total">
                            <h3>Pret:</h3>
                            <p>{this.props.element.price} lei</p>
                        </div>

                        <div className="cancel_products">
                            <img onClick={this.close} src={close} alt="" />
                        </div>


                    </div>

                </div>
            </div>
         );
    }
}
 
export default ItemShopItself;