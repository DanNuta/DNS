import React, { Component } from 'react';
import ProductsItem from './ProdusctItem';
import "./Products.scss";
import descriereProdus from "../../Pages/instalarea/despre_produse.png"

class Products extends Component {


    


    state = {
        produse: this.props.products,
        filterData: this.props.products,
        dataItems: []
    }







    elementFromItems = (dataItem) =>{

        this.props.onelementFromProducts(dataItem)


        

    }





    filterPda = () =>{
        let pdaSensor = this.state.produse.filter(el => el.filter === "pda");

        this.setState({filterData: pdaSensor})
        
    }

    filterPdaSensor = () =>{

        
        let pda = this.state.produse.filter(el => el.filter === "pda_sensor");

        this.setState({filterData: pda})
    }


    elementShop = (data) =>{

        this.props.onProductShop(data)
  
    }



   
    render() { 

        let filterElement = new Set();
        

        



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
                                   
                                    {this.state.produse.map((el) => {

                                            filterElement.add(el.filter)


                                            for(let item of filterElement){
                                                

                                                return <li>{item}</li>
                                            }

                                            


                                     

                                        
                                       


                                    })}
                               </ul>


                            </div>
                        </div>
                    </div>




                    <div className="products_filters">

                        {(this.props.products).map(el => (
                                
                                <ProductsItem 
                                    element={el}
                                    onDataItems={this.elementFromItems}
                                    onElementShop={this.elementShop}
                                    
                                />
                            
                        ))}
                    </div>



                    <div className="description centru">
                        <h1>DESCRIERE</h1>

                        <div className="img_text">
                            <div className="img">
                                <img src={descriereProdus} alt="" />
                            </div>

                            <div className="text">

                                
                            </div>
                        </div>



                    </div>



                    
                        
                    
                

                
               
            </div>
         );
    }
}
 
export default Products;