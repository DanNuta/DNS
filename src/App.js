import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import "./App.scss";
import Home from './Components/Pages/Home/home';
import Footer from './Components/Footer';
import coockie from "../src/Components/Pages/icon/cookies.svg";
import Products from './Components/Pages/Products/Products';

import product1 from "../src/Components/Pages/produse/img1.png";
import product2 from "../src/Components/Pages/produse/img2.png";
import product3 from "../src/Components/Pages/produse/img3.png";
import product4 from "../src/Components/Pages/produse/img4.png";
import product5 from "../src/Components/Pages/produse/img5.png";
import product6 from "../src/Components/Pages/produse/img6.png";
import product7 from "../src/Components/Pages/produse/img7.png";
import product8 from "../src/Components/Pages/produse/img8.png";
import product9 from "../src/Components/Pages/produse/img9.png";
import product10 from "../src/Components/Pages/produse/img10.png";
import product11 from "../src/Components/Pages/produse/img11.jpg";
import product12 from "../src/Components/Pages/produse/img12.jpg";
import product13 from "../src/Components/Pages/produse/img13.png";
import product14 from "../src/Components/Pages/produse/img14.jpg";
import product15 from "../src/Components/Pages/produse/img15.jpg";
import product16 from "../src/Components/Pages/produse/img16.jpg";
import product17 from "../src/Components/Pages/produse/img17.jpg";
import product18 from "../src/Components/Pages/produse/img18.jpg";
import product19 from "../src/Components/Pages/produse/img19.jpg";
import product20 from "../src/Components/Pages/produse/img20.jpg";
import product21 from "../src/Components/Pages/produse/img21.jpg";
import product22 from "../src/Components/Pages/produse/img22.png";
import product23 from "../src/Components/Pages/produse/img23.jpg";



import Shop from './Components/Pages/Shop/Shop';
import Contacte from './Components/Pages/Home/Contacte';
import NewProducts from './NewProducts';
import ProductsItem from './Components/Pages/Products/ProdusctItem';
import Pages from './Pages';
import Politica from './PoliticaDeConfidentialitate';







class App extends Component {


    static defaultProps = {

        produse: [
            { 
              id: "Tester_paratrasnet_PDA",
              title: "Tester paratrasnet PDA",
              counter: 1,
              img: product23,
              price: 892,
              description: "Tester paratrasnet PDA cu microprocesor pentru testarea paratrasnetelor PDA Schwaertz",
              filter: "Tester paratrasnet PDA",
              curentPrice: 892,

              dateTehnice:{
                  dateTehniceDesc: "Tester paratrasnet PDA cu microprocesor",
                  dataTehniceBotom: "Tester paratrasnet PDA cu microprocesor pentru testarea paratrasnetelor PDA Schwaertz",
                  titleDateTehnice: [
                      {desk1: "Afisaj",
                       desk2: "Afisaj  cu display digital",
                       
                    },

                    {
                        desk1: "Tensiune",
                        desk2: "5000 Volti",
                        
                    },
                    {
                        desk1: "Test 1",
                        desk2: "Test de continuitate circuit transformator",
                        
                    },
                     {
                        desk1: "Test 2",
                        desk2: "Test functionarea incarcare si descarcare paratrasnet PDA",
                        
                    },

                    {
                        desk1: "Indice de protectie carcasa",
                        desk2: "IP40",
                        
                    },
                    {
                        desk1: "Greutate",
                        desk2: "400 g",
                        
                    }
                     
                  ]
              }
            },


            {
                id: "Paratrasnet_PDA_SENSOR_S4_ΔT=60_µs_raza_Rp_79-107m",
                title: "Paratrasnet PDA SENSOR S4 ΔT=60 µs raza Rp 79-107m",
                counter: 1,
                img: product22,
                price: 892,
                description: "Paratrasnet PDA activ ΔT=60 µs. Construit din otel inox AISI 316, rezistent la medii acide corozive. Transformator intern de inalta tensiune stabilizat prin doua sisteme spark gap. Fara transformator intern sau sursa de alimentare. Dublu dispozitiv de amorsare. Eficienta descarcarii 100%",
                filter: "Paratrasnet PDA SENSOR",
                curentPrice: 1000,

                dateTehnice:{
                    dateTehniceDesc: "Paratrasnetul cu amorsare de tip PDA  Schwærtz Core poate proteja constuctii mari, dispune de un timp de amorsare ΔT=45 µs si o raza de protectie de la 63 la 89 metri. Poate fi testat cu Testerul dedicat",
                    dataTehniceBotom: "Paratrasnetul Aubach S1 ΔT=22 µs raza Rp 40-62m  este un paratrasnet PDA cu o stabilitate peste medie, dispozitiv de protectie dublu. Garantie 10 ani, poate lucra in  conditii dificile, atmosfera sulfuroasa sau in conditii de salinitate. Compatibil cu toata gama de accesorii pentru paratrasnete PDA  Sensor Aubach",
                    titleDateTehnice: [
                        {desk1: "H(m)",
                         desk2: "Nivel 1(D=20) Eficienta 98%",
                         desk3: "Nivel 2(D=30) Eficienta 95%",
                         desk4: "Nivel 1(D=45) Eficienta 90%",
                         desk5: "Nivel 4(D=60) Eficienta 80%"
                      },
  
                      {
                          desk1: 1,
                          desk2: 1,
                          desk3: 1,
                          desk4: 1,
                          desk5: 1,
                      },
                      {
                          desk1: 2,
                          desk2: 2,
                          desk3: 2,
                          desk4: 2,
                          desk5: 2,
                      },
                       {
                          desk1: 3,
                          desk2: 3,
                          desk3: 3,
                          desk4: 3,
                          desk5: 3,
                      },
  
                      {
                          desk1: 1,
                          desk2: 1,
                          desk3: 1,
                          desk4: 1,
                          desk5: 1,
                      },
                      {
                          desk1: 2,
                          desk2: 2,
                          desk3: 2,
                          desk4: 2,
                          desk5: 2,
                      },
                       {
                          desk1: 3,
                          desk2: 3,
                          desk3: 3,
                          desk4: 3,
                          desk5: 3,
                      },
                      {
                          desk1: 2,
                          desk2: 2,
                          desk3: 2,
                          desk4: 2,
                          desk5: 2,
                      },
                       {
                          desk1: 3,
                          desk2: 3,
                          desk3: 3,
                          desk4: 3,
                          desk5: 3,
                      },
  
                      {
                          desk1: 1,
                          desk2: 1,
                          desk3: 1,
                          desk4: 1,
                          desk5: 1,
                      },
                     
  
  
  
                    ]
                }
            },

            {
                id: "SLC_03",
                title: "Contor de lovituri mecanic SCHWÆRTZ SLC 03",
                counter: 1,
                img: product3,
                price: 892,
                description: "Paratrasnet PDA Schwaertz Compact S ΔT=25 µs raza Rp 42-65m",
                filter: "pda",
                curentPrice: 398,
                link: "products1"
            },

            {
                id: "SLC_04",
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
                id: "SLC_05",
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

        localStorage.setItem("cokie", JSON.stringify(false))

        let cockie = localStorage.getItem("cokie")
        cockie = JSON.parse(cockie)
        this.setState({coockie: cockie})
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


    desactiveCoockie = () =>{
        this.setState({coockie: false})
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
                               products={this.props.produse}
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
                                onElementWislist={this.state.elementWishListShop}
                                products={this.props.produse}
                                onCos={this.cos}
                                onShop={this.shop}/>
                                }>

                        </Route>


                        <Route exact path="/contact" element={<Contacte/>}>

                        </Route>



                        


                        

                        


                        <Route path="/d" element={<NewProducts
                                                   onAddNewProducts={this.newProducts}/>}>

                        </Route>




                            
                            <Route   path="/produse/:slug" element={<Pages element={this.props.produse}
                                                                          onCos={this.cos}
                                                                          onShop={this.shop}/>}>

                            </Route>

                            <Route path="Privacy" element={<Politica/>}></Route>
                        



                        


                        



                        </Routes>


                    

                    {
                        this.state.coockie && 
                        <div className="cookie">
                            <div className="inside">
                                <img src={coockie}></img>
                                <h1>Noi utilizam cookies</h1>
                                <p>Utilizand acest site sunteti de acord cu folosirea cookie-urilor. <span onClick={this.desactiveCoockie}><NavLink className="confidentialitate" to="/Privacy"> Conusltati politica noastra privind modulele cookie si privacy policy.</NavLink></span></p>
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