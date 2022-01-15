import React, { Component } from 'react';
import ProductsItem from './ProdusctItem';
import "./Products.scss";
import descriereProdus from "../../Pages/instalarea/despre_produse.png"
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useParams } from 'react-router-dom';

class Products extends Component {


    


    state = {
        produse: this.props.products,
        filterData: this.props.products,
        dataItems: [],
        radioBtnCheck: ""
    }







    elementFromItems = (dataItem) =>{
        this.props.onelementFromProducts(dataItem)

    }





   

    filterProducts = (elFilter) =>{
        let pda = this.state.produse.filter(el => el.filter === elFilter);
        this.setState({filterData: pda})
        this.setState({radioBtnCheck: elFilter})
        console.log(elFilter)

    }




    elementShop = (data) =>{
        this.props.onProductShop(data)

    }



   
    render() {

        let newArray = [];

        {this.state.produse.filter(el => {
            if(newArray.includes(el.filter)){
                return
            }else{
                newArray.push(el.filter)
            }

            console.log(this.state.radioBtnCheck === el.filter)
        })}

       
        
        
        



        return ( 

           



            <div className="produse  center">

                


                <div className="text_top">
                    <p>servici | produse si accesorii</p>
                    <h1>PRODUSE SI ACCESORII</h1>
                </div>


               

                    <div className="filter">
                        <h2>Categorie</h2>

                        <div className="products_element">
                            <h3>Paratrasnet PDA</h3>
                            <div className="radion_btn">
                               
                               <ul>

                                   {newArray.map(el =>(
                                       <li onClick={() =>this.filterProducts(el)}>
                                           <div className='border_li'>
                                               <div className={this.state.radioBtnCheck === el ? "check_inside_li" : ""}></div>

                                           </div>
                                           <p className='paragraph'>{el}</p>
                                     
                                       </li>
                                   ))}


                                   
                                   
                                    

 


                                    
                               </ul>
                               


                            </div>
                            
                        </div>
                        
                    </div>




                    <div className="products_filters">

                        {this.state.filterData.map(el => (

                          

                                <ProductsItem 
                                    element={el}
                                    onDataItems={this.elementFromItems}
                                    onElementShop={this.elementShop} 
                                />

                           
                                
                               
                            
                        ))}
                    </div>



                    



                    
            </div>
         );
    }
}
 
export default Products;