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
                    dateTehniceDesc: "Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie reduse cu 40%. Garantie 10 ani.  Testat la un curent de 200kA (10 / 350μs).",
                    dataTehniceBotom: "∆T - valoarea timpului de avans (determinată pe baza eficienței paratrăsnetului teste efectuate într-un laborator de înaltă tensiune) H - elevația (catragul) paratrăsnetului peste elementele protejate (necesar H ≥2m) R - raza zonei protejate",
                    titleDateTehnice: [
                        {desk1: "H(m)",
                         desk2: "Nivel 1(D=20) Eficienta 98%",
                         desk3: "Nivel 2(D=30) Eficienta 95%",
                         desk4: "Nivel 1(D=45) Eficienta 90%",
                         desk5: "Nivel 4(D=60) Eficienta 80%"
                      },
  
                      {
                          desk1: 2,
                          desk2: 32,
                          desk3: 34,
                          desk4: 39,
                          desk5: 43,
                      },
                      {
                          desk1: 3,
                          desk2: 47,
                          desk3: 52,
                          desk4: 58,
                          desk5: 64,
                      },
                       {
                          desk1: 4,
                          desk2: 63,
                          desk3: 69,
                          desk4: 78,
                          desk5: 86,
                      },
  
                      {
                          desk1: 5,
                          desk2: 79,
                          desk3: 87,
                          desk4: 97,
                          desk5: 107,
                      },
                      {
                          desk1: 6,
                          desk2: 79,
                          desk3: 87,
                          desk4: 97,
                          desk5: 107,
                      },
                       {
                          desk1: 10,
                          desk2: 79,
                          desk3: 88,
                          desk4: 99,
                          desk5: 109,
                      },
                      {
                          desk1: 15,
                          desk2: 80,
                          desk3: 89,
                          desk4: 101,
                          desk5: 111,
                      },
                       {
                          desk1: 20,
                          desk2: 80,
                          desk3: 89,
                          desk4: 102,
                          desk5: 113,
                      },
  
                      {
                          desk1: 30,
                          desk2: "",
                          desk3: 90,
                          desk4: 104,
                          desk5: 116,
                      },
                      ,
  
                      {
                          desk1: 45,
                          desk2: "",
                          desk3: "",
                          desk4: 105,
                          desk5: 119,
                      },
                      ,
  
                      {
                          desk1: 60,
                          desk2: "",
                          desk3: "",
                          desk4: "",
                          desk5: 120,
                      },
                     
  
  
  
                    ]
                }
            },

            {
                id: "Paratrasnet_PDA_SENSOR_S3_ΔT=47_µs_raza_Rp_65-92m",
                title: "Paratrasnet PDA SENSOR S3 ΔT=47 µs raza Rp 65-92m",
                counter: 1,
                img: product22,
                price: 892,
                description: "De ce paratrasnetul PDA este o necesitate De ce am nevoie de el? Un fulger este un fenomen rar, dar periculos. Ajungand la 100 de milioane de volți de energie electrică, aceasta este o forță naturală distructivă asupra căreia avem relativ puțin control. Deoarece clădirile noastre dețin acum mai multe bunuri importante, este extrem de important să ne asigurăm că suntem protejați împotriva trăsnetelor. În zilele noastre, protecția împotriva trăsnetului este indinspensabila pentru orice siste",
                filter: "Paratrasnet PDA SENSOR",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie reduse cu 40%. Garantie 10 ani.  Testat la un curent de 200kA (10 / 350μs).",
                    dataTehniceBotom: "∆T - valoarea timpului de avans (determinată pe baza eficienței paratrăsnetului teste efectuate într-un laborator de înaltă tensiune) H - elevația (catragul) paratrăsnetului peste elementele protejate (necesar H ≥2m) R - raza zonei protejate",
                    titleDateTehnice: [
                        {desk1: "H(m)",
                         desk2: "Nivel 1(D=20) Eficienta 98%",
                         desk3: "Nivel 2(D=30) Eficienta 95%",
                         desk4: "Nivel 1(D=45) Eficienta 90%",
                         desk5: "Nivel 4(D=60) Eficienta 80%"
                      },
  
                      {
                          desk1: 2,
                          desk2: 26,
                          desk3: 29,
                          desk4: 33,
                          desk5: 37,
                      },
                      {
                          desk1: 3,
                          desk2: 39,
                          desk3: 44,
                          desk4: 50,
                          desk5: 55,
                      },
                       {
                          desk1: 4,
                          desk2: 52,
                          desk3: 58,
                          desk4: 66,
                          desk5: 74,
                      },
  
                      {
                          desk1: 5,
                          desk2: 65,
                          desk3: 73,
                          desk4: 83,
                          desk5: 92,
                      },
                      {
                          desk1: 6,
                          desk2: 66,
                          desk3: 73,
                          desk4: 83,
                          desk5: 92,
                      },
                       {
                          desk1: 10,
                          desk2: 66,
                          desk3: 74,
                          desk4: 85,
                          desk5: 95,
                      },
                      {
                          desk1: 15,
                          desk2: 67,
                          desk3: 76,
                          desk4: 87,
                          desk5: 97,
                      },
                       {
                          desk1: 20,
                          desk2: 67,
                          desk3: 76,
                          desk4: 89,
                          desk5: 99,
                      },
  
                      {
                          desk1: 30,
                          desk2: "",
                          desk3: 77,
                          desk4: 91,
                          desk5: 103,
                      },
                      ,
  
                      {
                          desk1: 45,
                          desk2: "",
                          desk3: "",
                          desk4: 92,
                          desk5: 106,
                      },
                      ,
  
                      {
                          desk1: 60,
                          desk2: "",
                          desk3: "",
                          desk4: "",
                          desk5: 107,
                      },
                     
  
  
  
                    ]
                }
            },








            {
                id: "Paratrasnet_PDA_SENSOR_S2_ΔT=32_µs_raza_Rp_50-74m",
                title: "Paratrasnet PDA SENSOR S2 ΔT=32 µs raza Rp 50-74m",
                counter: 1,
                img: product22,
                price: 892,
                description: "Cum funcționează paratrasnetul PDA SENSOR? Este un paratrăsnet de ultima generație certificat ca paratrasnet PDA pentru un curent suportat de impact 200kA (10 / 350μs). Terminalele paratrasnet PDA Senzor conțin un generator de impulsuri care emite impulsuri electrice la intervale foarte mici de timp.",
                filter: "Paratrasnet PDA SENSOR",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie reduse cu 40%. Garantie 10 ani.  Testat la un curent de 200kA (10 / 350μs).",
                    dataTehniceBotom: "∆T - valoarea timpului de avans (determinată pe baza eficienței paratrăsnetului teste efectuate într-un laborator de înaltă tensiune) H - elevația (catragul) paratrăsnetului peste elementele protejate (necesar H ≥2m) R - raza zonei protejate",
                    titleDateTehnice: [
                        {desk1: "H(m)",
                         desk2: "Nivel 1(D=20) Eficienta 98%",
                         desk3: "Nivel 2(D=30) Eficienta 95%",
                         desk4: "Nivel 1(D=45) Eficienta 90%",
                         desk5: "Nivel 4(D=60) Eficienta 80%"
                      },
  
                      {
                          desk1: 2,
                          desk2: 20,
                          desk3: 23,
                          desk4: 26,
                          desk5: 30,
                      },
                      {
                          desk1: 3,
                          desk2: 30,
                          desk3: 34,
                          desk4: 40,
                          desk5: 44,
                      },
                       {
                          desk1: 4,
                          desk2: 40,
                          desk3: 46,
                          desk4: 53,
                          desk5: 59,
                      },
  
                      {
                          desk1: 5,
                          desk2: 50,
                          desk3: 57,
                          desk4: 66,
                          desk5: 74,
                      },
                      {
                          desk1: 6,
                          desk2: 50,
                          desk3: 57,
                          desk4: 66,
                          desk5: 74,
                      },
                       {
                          desk1: 10,
                          desk2: 51,
                          desk3: 59,
                          desk4: 69,
                          desk5: 77,
                      },
                      {
                          desk1: 15,
                          desk2: 52,
                          desk3: 60,
                          desk4: 71,
                          desk5: 80,
                      },
                       {
                          desk1: 20,
                          desk2: 52,
                          desk3: 61,
                          desk4: 73,
                          desk5: 83,
                      },
  
                      {
                          desk1: 20,
                          desk2: 52,
                          desk3: 61,
                          desk4: 73,
                          desk5: 83,
                      },
                      ,
  
                      {
                          desk1: 30,
                          desk2: "",
                          desk3: 62,
                          desk4: 76,
                          desk5: 87,
                      },
                      

                      {
                          desk1: 45,
                          desk2: "",
                          desk3: "",
                          desk4: 77,
                          desk5: 91,
                      },

                      {
                          desk1: 60,
                          desk2: "",
                          desk3: "",
                          desk4: "",
                          desk5: 92,
                      },
                     
  
  
  
                    ]
                }
            },

            {
                id: "Paratrasnet_PDA_SENSOR_S1_ΔT=22_µs_raza_Rp_40-62m",
                title: "Paratrasnet PDA SENSOR S1 ΔT=22 µs raza Rp 40-62m",
                counter: 1,
                img: product22,
                price: 892,
                description: "Paratrasnetul Aubach este un paratrasnet extrem de eficient din gama premium. Testat la un curent de 200 kA la 10/350 us, construit cu doua circuite de amorsare dintre care unul redutant. Prezinta o efcienta a descarcarii de 100%. Testat la institutul ITE, acreditat ENAC, factor de protectie triplu.",
                filter: "Paratrasnet PDA SENSOR",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Paratrasnetul Aubach S1 ΔT=22 µs raza Rp 40-62m  este un paratrasnet PDA cu o stabilitate peste medie, dispozitiv de protectie dublu. Garantie 10 ani, poate lucra in  conditii dificile, atmosfera sulfuroasa sau in conditii de salinitate. Compatibil cu toata gama de accesorii pentru paratrasnete PDA  Sensor Aubach",
                    dataTehniceBotom: "∆T - valoarea timpului de avans (determinată pe baza eficienței paratrăsnetului teste efectuate într-un laborator de înaltă tensiune) H - elevația (catragul) paratrăsnetului peste elementele protejate (necesar H ≥2m) R - raza zonei protejate",
                    titleDateTehnice: [
                        {desk1: "H(m)",
                         desk2: "Nivel 1(D=20) Eficienta 98%",
                         desk3: "Nivel 2(D=30) Eficienta 95%",
                         desk4: "Nivel 1(D=45) Eficienta 90%",
                         desk5: "Nivel 4(D=60) Eficienta 80%"
                      },
  
                      {
                          desk1: 2,
                          desk2: 16,
                          desk3: 18,
                          desk4: 22,
                          desk5: 24,
                      },
                      {
                          desk1: 3,
                          desk2: 23,
                          desk3: 28,
                          desk4: 32,
                          desk5: 37,
                      },
                       {
                          desk1: 4,
                          desk2: 31,
                          desk3: 37,
                          desk4: 43,
                          desk5: 49,
                      },
  
                      {
                          desk1: 5,
                          desk2: 39,
                          desk3: 46,
                          desk4: 54,
                          desk5: 61,
                      },
                      {
                          desk1: 6,
                          desk2: 40,
                          desk3: 46,
                          desk4: 54,
                          desk5: 62,
                      },
                       {
                          desk1: 10,
                          desk2: 41,
                          desk3: 48,
                          desk4: 57,
                          desk5: 65,
                      },
                      {
                          desk1: 15,
                          desk2: 42,
                          desk3: 50,
                          desk4: 60,
                          desk5: 69,
                      },
                       {
                          desk1: 20,
                          desk2: 42,
                          desk3: 51,
                          desk4: 62,
                          desk5: 72,
                      },
  
                      {
                          desk1: 30,
                          desk2: "",
                          desk3: 52,
                          desk4: 65,
                          desk5: 76,
                      },
                      ,
  
                      {
                          desk1: 45,
                          desk2: "",
                          desk3: "",
                          desk4: 67,
                          desk5: 81,
                      },
                      

                      {
                          desk1: 60,
                          desk2: "",
                          desk3: "",
                          desk4: "",
                          desk5: 82,
                      },

                     
                     
  
  
  
                    ]
                }
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