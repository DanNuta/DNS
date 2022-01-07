import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Switch, Routes, Route, NavLink } from 'react-router-dom';
import "./App.scss";
import Home from './Components/Pages/Home/home';
import Footer from './Components/Footer';
import coockie from "../src/Components/Pages/icon/cookies.svg";
import Products from './Components/Pages/Products/Products';
import product1 from "../src/Components/Pages/produse/img1.png";
import product2 from "../src/Components/Pages/produse/img2.png";
import product3 from "../src/Components/Pages/produse/img3.png";
import Shop from './Components/Pages/Shop/Shop';
import Contacte from './Components/Pages/Home/Contacte';
import Pages1 from './Components/Pages/PagesProducts/Page1';
import NewProducts from './NewProducts';







class App extends Component {


    static defaultProps = {

        produse: [
            { 
              id: "SLC 01",
              title: "Contor de lovituri mecanic SCHWÆRTZ SLC 01",
              counter: 1,
              img: product1,
              price: 892,
              description: "Paratrasnet PDA Schwaertz Compact S ΔT=25 µs raza Rp 42-65m",
              filter: "pda_sensor",
              curentPrice: 892,
              link: "products1"
            },

            {
                id: "SLC 02",
                title: "Contor de lovituri mecanic SCHWÆRTZ SLC 01",
                counter: 1,
                img: product2,
                price: 892,
                description: "Paratrasnet PDA Schwaertz Compact S ΔT=25 µs raza Rp 42-65m",
                filter: "pda",
                curentPrice: 892,
                link: "products1"
            },

            {
                id: "SLC 03",
                title: "Contor de lovituri mecanic SCHWÆRTZ SLC 01",
                counter: 1,
                img: product3,
                price: 892,
                description: "Paratrasnet PDA Schwaertz Compact S ΔT=25 µs raza Rp 42-65m",
                filter: "pda",
                curentPrice: 892,
                link: "products1"
            },

            {
                id: "SLC 04",
                title: "Contor de lovituri mecanic SCHWÆRTZ SLC 01",
                counter: 1,
                img: product1,
                price: 892,
                description: "Paratrasnet PDA Schwaertz Compact S ΔT=25 µs raza Rp 42-65m",
                filter: "pda",
                curentPrice: 892,
                link: "products1"
            },

            {
                id: "SLC 05",
                title: "Contor de lovituri mecanic SCHWÆRTZ SLC 01",
                counter: 1,
                img: product1, 
                price: 892, 
                description: "Paratrasnet PDA Schwaertz Compact S ΔT=25 µs raza Rp 42-65m", 
                filter: "pda",
                curentPrice: 892,
                link: "products1"
            },
        ],



       

       

       
    }

    state = {
        coockie: false,
        elementAded: [], 
        dataShop: [],
        dataItem: "",
        elementWishListShop: [],
        firstPages: [],
        localStorageElement: []

    }


    coockies = () => {
        this.setState({coockie: false})
    }




    exportDataFromHome = (dataHome) =>{

        this.setState({elementAded:   [...this.state.elementAded, dataHome]})
  
    }




    elementFromProducts = (dataItem) =>{

        this.setState({elementAded: [...this.state.elementAded, dataItem]})
        
    }


    delete = (deleteItem) =>{

       
    }


   


    deleteItemFromShop = (data) =>{
        let idShop = data.id;
        let newArray = this.state.dataShop.filter(el => el.id !== idShop);
        
        this.setState({dataShop: newArray})

    }


    deleteElementFromWishList = (data) =>{
        let idElement = data.id;
        let newArray = this.state.elementAded.filter(el => el.id !== idElement)

        this.setState({elementAded: newArray})

    }



    addNewPrice = (data, idShop) =>{

        this.setState({dataShop: this.state.dataShop.map(el => (el.id === idShop) ? {...el, price: el.curentPrice * data, counter: el.counter+1} : el)})

        

    }


    solicitaApel = (data) =>{
        this.setState({dataShop:  data})   
    }


    searchItem = (data) =>{
       console.log(data)

       this.setState({firstPages: [...this.state.firstPages, data]})
    }



    cos = (data) =>{
        this.setState({elementAded: [...this.state.elementAded, data]})
    }


    shop = (data) =>{

        this.setState({dataShop: [...this.state.dataShop, data]})

    }



    deleteAllWishList = () =>{
        this.setState({elementAded: []})
    }



    newProducts = (data) =>{
        this.props.produse.push(data)

        console.log(this.props.produse)
        
        
    }


    


    


   
    



    render() { 

        console.log(this.props.produse[0])

        return ( 
            <div className={this.state.coockie ? "react_project" : ""}>
                <Router>


                    <NavBar dataItem={this.state.dataItem}
                            wishList={this.state.elementAded}  
                            onDelete={this.delete}
                            onShoping={this.state.dataShop}
                            selectElementFromWishList={this.solicitaApel}
                            onDeleteElementFromWishList={this.deleteElementFromWishList}
                            onDeleteAllArray={this.deleteAllWishList}/>
                            
                    <Routes>

                        <Route exact path='/' element={<Home 
                               onExportData={this.exportDataFromHome}
                               onSearchItem={this.searchItem}
                              />}>

                        </Route>


                        <Route exact path="/products" element={<Products
                               onelementFromProducts={this.elementFromProducts} 
                               products={this.props.produse}
                               onProductShop={this.shop}
                               
                               />}>    
                        </Route>



                        <Route exact path="/shop"
                            element={<Shop 
                                shop={this.state.dataShop}
                                deleteItemFromShop={this.deleteItemFromShop}
                                expenseElement={this.addNewPrice}
                                onElementWislist={this.state.elementWishListShop}/>
                                }>

                        </Route>


                        <Route exact path="/contact" element={<Contacte/>}>

                        </Route>



                        


                        <Route exact path="/service/pr1" element={<Pages1 el={this.state.localStorageElement}
                                                                         onCos={this.cos}
                                                                         onShop={this.shop}/>
                                                                         }>

                        </Route>


                        <Route path="/d" element={<NewProducts
                                                   onAddNewProducts={this.newProducts}/>}>

                        </Route>



                        


                        



                        </Routes>


                    

                    {
                        this.state.coockie && 
                        <div className="cookie">
                            <div className="inside">
                                <img src={coockie}></img>
                                <h1>Noi utilizam cookies</h1>
                                <p>Utilizand acest site sunteti de acord cu folosirea cookie-urilor. <span><NavLink className="confidentialitate" to="/confidentialitate"> Conusltati politica noastra privind modulele cookie si privacy policy.</NavLink></span></p>
                                <button onClick={this.coockies}>Accepta</button>
                            </div>
                        </div>
                    }



                    <Footer/>
                    
                </Router>


            </div>
         );
    }
}
 
export default App;