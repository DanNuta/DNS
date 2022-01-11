import React, { Component } from 'react';
import "./ElementWishList.scss";
import close from "../../src/Components/Pages/icon/close.svg";

class ElementWishList extends Component {



    elementDelete = () =>{
        this.props.delete(this.props.item)

    }

    

    
    
    render() { 
        return ( 
            <React.Fragment>
                
                    <div className= "elementWish">
                        <div className="img">
                           <img src={this.props.item.img} alt="" srcset="" />
                        </div>

                        <div className="description">
                            <p>{this.props.item.title }</p>
                            <h2>{this.props.item.price} lei</h2>
                        </div>

                        <img onClick={this.elementDelete} className="close" src={close} alt="" srcset="" />
                        
                    </div>
               
            </React.Fragment>
         );
    }
}
 
export default ElementWishList;