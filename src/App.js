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




            {
                id: "Paratrasnet_PDA_Schwaertz_COSMOS_ΔT=60_µs_raza_Rp_79-107m",
                title: "Paratrasnet PDA Schwaertz  ΔT=60 µs raza Rp 79-107m",
                counter: 1,
                img: product2,
                price: 892,
                description: "Paratrasnet PDA Schwaertz COSMOS. Asigurarea protecției cu paratrasnet PDA Schwaertz împotriva trăsnetelor pentru constructii, case, scoli, biserici, infrastructură și companii facilități. SCHWÆRTZ COSMOS a fost proiectat pentru a funcționa în cele mai dificile condiții și pentru a oferi cea mai bună protecție.",
                filter: "Paratrasnet PDA Schwaertz",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Paratrasnet PDA Schwaertz COSMOS poate proteja constuctii foarte mari, dispune de un timp de amorsare ΔT=60 µs si o raza de protectie de la 79 la 107 metri. Poate fi testat cu Testerul dedicat. Instalatia partrasnet PDA poate fi monitorizata cu contoare de trasnet. Poate fi comandat de firme de montaj paratrasnet, de persoane juridice cat si persoane fizice.",
                    dataTehniceBotom: "∆T - valoarea timpului de avans (determinată pe baza eficienței paratrăsnetului teste efectuate într-un laborator de înaltă tensiune) H - elevația (catragul) paratrăsnetului peste elementele protejate (necesar H ≥2m) R - raza zonei protejate. Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie redus cu 40%. Garantie 5 ani.  Testat la un curent de 100kA (10 / 350μs). Testabil. Certificare CE.",
                    titleDateTehnice: [
                        {desk1: "H(m)",
                         desk2: "Nivel 1(D=20) Eficienta 98%",
                         desk3: "Nivel 2(D=30) Eficienta 95%",
                         desk4: "Nivel 1(D=45) Eficienta 90%",
                         desk5: "Nivel 4(D=60) Eficienta 80%"
                      },
  
                      {
                          desk1: 2,
                          desk2: 31,
                          desk3: 34,
                          desk4: 38,
                          desk5: 42,
                      },
                      {
                          desk1: 3,
                          desk2: 47,
                          desk3: 51,
                          desk4: 58,
                          desk5: 63,
                      },
                       {
                          desk1: 4,
                          desk2: 63,
                          desk3: 69,
                          desk4: 77,
                          desk5: 85,
                      },
  
                      {
                          desk1: 5,
                          desk2: 79,
                          desk3: 86,
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
                          desk1: 8,
                          desk2: 79,
                          desk3: 87,
                          desk4: 98,
                          desk5: 108,
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
                      ,
  
                      {
                          desk1: 45,
                          desk2: "",
                          desk3: 89,
                          desk4: 105,
                          desk5: 119,
                      },
                      

                      {
                          desk1: 50,
                          desk2: "",
                          desk3: "",
                          desk4: 105,
                          desk5: 120,
                      },

                      {
                        desk1: 55,
                        desk2: "",
                        desk3: "",
                        desk4: 105,
                        desk5: 120,
                    },

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
                id: "Paratrasnet_PDA_Schwaertz_CORE_ΔT=45_µs_raza_Rp_63-89m",
                title: "Paratrasnet PDA Schwaertz CORE ΔT=45 µs raza Rp 63-89m",
                counter: 1,
                img: product2,
                price: 892,
                description: "Montati un paratrasnet PDA Schwaertz Core pentru a proteja constructii si facilitati de dimensiuni mari. Garantie 5 ani, certificat CE, ISO 9001. Paratrasnetul Schwaertz Core este testabil, izolat fata de apa de ploaie, foarte rezistent in timp.",
                filter: "Paratrasnet PDA Schwaertz",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Paratrasnet PDA Schwaertz COSMOS poate proteja constuctii foarte mari, dispune de un timp de amorsare ΔT=60 µs si o raza de protectie de la 79 la 107 metri. Poate fi testat cu Testerul dedicat. Instalatia partrasnet PDA poate fi monitorizata cu contoare de trasnet. Poate fi comandat de firme de montaj paratrasnet, de persoane juridice cat si persoane fizice.",
                    dataTehniceBotom: "∆T - valoarea timpului de avans (determinată pe baza eficienței paratrăsnetului teste efectuate într-un laborator de înaltă tensiune) H - elevația (catragul) paratrăsnetului peste elementele protejate (necesar H ≥2m) R - raza zonei protejate. Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie redus cu 40%. Garantie 5 ani.  Testat la un curent de 100kA (10 / 350μs). Testabil. Certificare CE.",
                    titleDateTehnice: [
                        {desk1: "H(m)",
                         desk2: "Nivel 1(D=20) Eficienta 98%",
                         desk3: "Nivel 2(D=30) Eficienta 95%",
                         desk4: "Nivel 1(D=45) Eficienta 90%",
                         desk5: "Nivel 4(D=60) Eficienta 80%"
                      },
  
                      {
                          desk1: 2,
                          desk2: 25,
                          desk3: 28,
                          desk4: 32,
                          desk5: 35,
                      },
                      {
                          desk1: 3,
                          desk2: 38,
                          desk3: 42,
                          desk4: 48,
                          desk5: 35,
                      },
                       {
                          desk1: 4,
                          desk2: 50,
                          desk3: 56,
                          desk4: 64,
                          desk5: 71,
                      },
  
                      {
                          desk1: 5,
                          desk2: 63,
                          desk3: 71,
                          desk4: 81,
                          desk5: 89,
                      },
                      {
                          desk1: 6,
                          desk2: 63,
                          desk3: 71,
                          desk4: 81,
                          desk5: 90,
                      },
                       {
                          desk1: 8,
                          desk2: 64,
                          desk3: 72,
                          desk4: 82,
                          desk5: 91,
                      },
                      {
                          desk1: 10,
                          desk2: 64,
                          desk3: 72,
                          desk4: 83,
                          desk5: 92,
                      },
                       {
                          desk1: 15,
                          desk2: 65,
                          desk3: 73,
                          desk4: 85,
                          desk5: 95,
                      },
  
                      {
                          desk1: 20,
                          desk2: 65,
                          desk3: 74,
                          desk4: 86,
                          desk5: 97,
                      },
                      ,
  
                      {
                          desk1: 45,
                          desk2: "",
                          desk3: "",
                          desk4: 90,
                          desk5: 104,
                      },
                      

                      {
                          desk1: 50,
                          desk2: "",
                          desk3: "",
                          desk4: 90,
                          desk5: 105,
                      },

                      {
                        desk1: 55,
                        desk2: "",
                        desk3: "",
                        desk4: "",
                        desk5: 105,
                    },

                    {
                        desk1: 60,
                        desk2: "",
                        desk3: "",
                        desk4: "",
                        desk5: 105,
                    },

                     
                     
  
  
  
                    ]
                }
            },





            {
                id: "Paratrasnet_PDA_Schwaertz_Compact_S_ΔT=35_µs_raza_Rp_53-77m",
                title: "Paratrasnet PDA Schwaertz  S ΔT=35 µs raza Rp 53-77m",
                counter: 1,
                img: product2,
                price: 892,
                description: "Paratrasnetul cu amorsare de tip PDA Schwærtz Compact M Este un paratrasnet PDA de inalta eficienta destinat a se utiliza in instalatiile paratrasnet impotriva lovitirilor de trasnet directe si indirecte. Se recomanda folosirea acestuia ca element principal de protectie pentru constructii medii si mici.",
                filter: "Paratrasnet PDA Schwaertz",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Paratrasnetul cu amorsare de tip PDA  Schwærtz Compact M Este un paratrasnet PDA de inalta eficienta destinat a se utiliza in instalatiile paratrasnet impotriva lovitirilor de trasnet directe si indirecte. Se recomanda folosirea acestuia ca element principal de protectie pentru constructii medii si mici. Compact M este un paratrasnet PDA cu un timp de avans al amorsarii de 35 µs si o  raza intre 53 si 77 de metri. Paratrasnet PDA COMPACT M ΔT=35 µs raza Rp 53-77m",
                    dataTehniceBotom: "∆T - valoarea timpului de avans (determinată pe baza eficienței paratrăsnetului teste efectuate într-un laborator de înaltă tensiune) H - elevația (catragul) paratrăsnetului peste elementele protejate (necesar H ≥2m) R - raza zonei protejate. Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie redus cu 40%. Garantie 5 ani.  Testat la un curent de 100kA (10 / 350μs). Testabil. Certificare CE. Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie redus cu 40%. Garantie 5 ani.  Testat la un curent de 100kA (10 / 350μs). Testabil. Certificare CE.",
                    titleDateTehnice: [
                        {desk1: "H(m)",
                         desk2: "Nivel 1(D=20) Eficienta 98%",
                         desk3: "Nivel 2(D=30) Eficienta 95%",
                         desk4: "Nivel 1(D=45) Eficienta 90%",
                         desk5: "Nivel 4(D=60) Eficienta 80%"
                      },
  
                      {
                          desk1: 2,
                          desk2: 21,
                          desk3: 23,
                          desk4: 27,
                          desk5: 30,
                      },
                      {
                          desk1: 3,
                          desk2: 31,
                          desk3: 35,
                          desk4: 41,
                          desk5: 46,
                      },
                       {
                          desk1: 4,
                          desk2: 42,
                          desk3: 48,
                          desk4: 55,
                          desk5: 61,
                      },
  
                      {
                          desk1: 5,
                          desk2: 53,
                          desk3: 60,
                          desk4: 69,
                          desk5: 77,
                      },
                      {
                          desk1: 6,
                          desk2: 55,
                          desk3: 60,
                          desk4: 70,
                          desk5: 78,
                      },
                       {
                          desk1: 8,
                          desk2: 54,
                          desk3: 61,
                          desk4: 71,
                          desk5: 80,
                      },
                      {
                          desk1: 10,
                          desk2: 54,
                          desk3: 62,
                          desk4: 72,
                          desk5: 81,
                      },
                       {
                          desk1: 15,
                          desk2: 55,
                          desk3: 63,
                          desk4: 74,
                          desk5: 84,
                      },
  
                      {
                          desk1: 20,
                          desk2: 55,
                          desk3: 64,
                          desk4: 76,
                          desk5: 86,
                      },
                      ,
  
                      {
                          desk1: 45,
                          desk2: "",
                          desk3: "",
                          desk4: 80,
                          desk5: 94,
                      },
                      

                      {
                          desk1: 50,
                          desk2: "",
                          desk3: "",
                          desk4: 80,
                          desk5: 94,
                      },

                      {
                        desk1: 55,
                        desk2: "",
                        desk3: "",
                        desk4: "",
                        desk5: 95,
                    },

                    {
                        desk1: 60,
                        desk2: "",
                        desk3: "",
                        desk4: "",
                        desk5: 95,
                    },

                     
                     
  
  
  
                    ]
                }
            },







            {
                id: "Paratrasnet_PDA_Schwaertz_Compact_S_ΔT=25_µs_raza_Rp_42-65m",
                title: "Paratrasnet PDA Schwaertz  S ΔT=25 µs raza Rp 42-65m",
                counter: 1,
                img: product2,
                price: 892,
                description: "Cum funcționează paratrasnetul PDA Schwærtz S? Este un paratrăsnet de ultima generație certificat ca paratrasnet PDA pentru un curent suportat de impact 100kA (10 / 350μs). Terminalele paratrasnet PDA Schwærtz conțin un generator de impulsuri care emite impulsuri electrice la intervale foarte mici de timp.",
                filter: "Paratrasnet PDA Schwaertz",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Cum funcționează paratrasnetul PDA Schwærtz Compact S?  Este un paratrăsnet de ultima generație certificat ca paratrasnet PDA  pentru un curent suportat de impact 100kA (10 /350μs). Terminalele paratrasnet PDA  Schwærz conțin un generator de impulsuri care emite impulsuri electrice la intervale mici de timp. Terminalele paratrasnet PDA Schwærz, spre deosebire de alte terminale paratrasnet PDA, sunt complet autonome și nu trebuie întreținute. În plus, datorită designului lor, se caracterizează prin faptul că pot funcționa în condiții extreme de mediu.",
                    dataTehniceBotom: "∆T - valoarea timpului de avans (determinată pe baza eficienței paratrăsnetului teste efectuate într-un laborator de înaltă tensiune) H - elevația (catragul) paratrăsnetului peste elementele protejate (necesar H ≥2m) R - raza zonei protejate. Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie redus cu 40%. Garantie 5 ani.  Testat la un curent de 100kA (10 / 350μs). Testabil. Certificare CE. Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie redus cu 40%. Garantie 5 ani.  Testat la un curent de 100kA (10 / 350μs). Testabil. Certificare CE.",
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
                          desk3: 19,
                          desk4: 22,
                          desk5: 25,
                      },
                      {
                          desk1: 3,
                          desk2: 25,
                          desk3: 29,
                          desk4: 34,
                          desk5: 38,
                      },
                       {
                          desk1: 4,
                          desk2: 34,
                          desk3: 39,
                          desk4: 45,
                          desk5: 51,
                      },
  
                      {
                          desk1: 5,
                          desk2: 42,
                          desk3: 49,
                          desk4: 57,
                          desk5: 65,
                      },
                      {
                          desk1: 6,
                          desk2: 43,
                          desk3: 49,
                          desk4: 58,
                          desk5: 66,
                      },
                       {
                          desk1: 8,
                          desk2: 43,
                          desk3: 50,
                          desk4: 59,
                          desk5: 67,
                      },
                      {
                          desk1: 10,
                          desk2: 44,
                          desk3: 51,
                          desk4: 61,
                          desk5: 69,
                      },
                       {
                          desk1: 15,
                          desk2: 45,
                          desk3: 53,
                          desk4: 63,
                          desk5: 72,
                      },
  
                      {
                          desk1: 20,
                          desk2: 45,
                          desk3: 54,
                          desk4: 65,
                          desk5: 75,
                      },
                      
  
                      {
                          desk1: 45,
                          desk2: "",
                          desk3: "",
                          desk4: 70,
                          desk5: 84,
                      },
                      

                      {
                          desk1: 50,
                          desk2: "",
                          desk3: "",
                          desk4: 70,
                          desk5: 84,
                      },

                      {
                        desk1: 55,
                        desk2: "",
                        desk3: "",
                        desk4: "",
                        desk5: 85,
                    },

                    {
                        desk1: 60,
                        desk2: "",
                        desk3: "",
                        desk4: "",
                        desk5: 85,
                    },

                     
                     
  
  
  
                    ]
                }
            },





            {
                id: "SLC_01",
                title: "Contor de lovituri mecanic SCHWÆRTZ SLC 01",
                counter: 1,
                img: product1,
                price: 892,
                description: "Contorul de trăsnet SLC-01 este conceput pentru detectarea și numărarea trăsnetelor captate de instalatiile paratrasnet. Este montat în general pe un conductor de coborâre.",
                filter: "Contoare de lovituri",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Informațiile primite de contor pot fi utilizate pentru întreținerea specifică a echipamentului. Este total autonom și nu necesită sursă de alimentare externă. Disponibil si in varianta testabila",
                    dataTehniceBotom: "",
                    titleDateTehnice: [
                        {desk1: "Afisaj numeric mecanic",
                         desk2: "0-999",
                         },
  
                      {
                          desk1: "Sensibilitate",
                          desk2: "1kA la 10/350 us",
                          
                      },
                      {
                          desk1: "Curent maxim detectat",
                          desk2: "100kA la 10/350 us",
                          
                      },
                       {
                          desk1: "Conectori de intrare si iesire",
                          desk2: "diametru 8mm/50mmp",
                          
                      },
  
                      {
                          desk1: "Temperatura de functionare",
                          desk2: "-30°C  + 80°C",
                          
                      },
                      {
                          desk1: "Indice de protectie carcasa",
                          desk2: "IP67",
                         
                      },
                       {
                          desk1: "Dimensiuni",
                          desk2: "180x90x80 mm",
                          
                      },
                      {
                          desk1: "Greutate",
                          desk2: "590 g",
                          
                      },
                       
                     

  
                    ]
                }
            },




            {
                id: "AUB-CONT-01",
                title: "Contor lovituri mecanic AUBACH",
                counter: 1,
                img: product21,
                price: 892,
                description: "In general se monteaza pe unul din condutoare. Pentru montaj nu este necesară decât găurirea suprafeței unde doriți să fie montat folosind doua dibluri si șuruburi normale. Se prezinta într-o carcasă de oțel complet etanșă pentru a fi amplasată în aer liber în orice tip de mediu. De asemenea, permite intrarea de conductori cu diametru de până la 16mm",
                filter: "Contoare de lovituri",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Datorită constructiei sale, contorul de trasnete are capacitatea de a detecta și înregistra descărcări între 300A și 100KA capturat de un paratrăsnet. Numără automat de fiecare dată când paratrăsnetul capteaza lovitura și o conducce la sol. Alimentat de curentul de trăsnet în sine, deci nu este nevoie de niciun tip de întreținere, are o viață foarte lungă. Instalare simplă și rapidă,",
                    dataTehniceBotom: "∆T - valoarea timpului de avans (determinată pe baza eficienței paratrăsnetului teste efectuate într-un laborator de înaltă tensiune) H - elevația (catragul) paratrăsnetului peste elementele protejate (necesar H ≥2m) R - raza zonei protejate. Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie redus cu 40%. Garantie 5 ani.  Testat la un curent de 100kA (10 / 350μs). Testabil. Certificare CE. Pentru instalațiile care necesită protecție la 1 ++ (99,9%) și pentru instalațiile care prezintă o amenințare pentru mediu (factor de pericol specific hf = 20 conform EN 62305-2) sau care poate cauza mediu de contaminare (hf = 50 conform EN 62305-2), valorile razei de protecție ar trebui să fie redus cu 40%. Garantie 5 ani.  Testat la un curent de 100kA (10 / 350μs). Testabil. Certificare CE.",
                    titleDateTehnice: [
                        {desk1: "Afisaj numeric mecanic",
                         desk2: "0-999",
                         },
  
                      {
                          desk1: "Sensibilitate",
                          desk2: "(Itc 8/20 μs): 350A",
                          
                      },
                      {
                          desk1: "Curent maxim detectat",
                          desk2: "(Imcw 10/350 μs): 100 kA",
                          
                      },
                       {
                          desk1: "Conectori de intrare si iesire",
                          desk2: "Rotund până la Ø 14 mm",
                          
                      },
  
                      {
                          desk1: "Temperatura de functionare",
                          desk2: "-20 ° C până la + 85 ° C",
                          
                      },
                      {
                          desk1: "Indice de protectie carcasa",
                          desk2: "IP65",
                         
                      },
                       {
                          desk1: "Dimensiuni",
                          desk2: "110x33x82mm",
                          
                      },
                      {
                          desk1: "Greutate",
                          desk2: "400 g",
                          
                      },
                       
                     

  
                    ]
                }
            },









            {
                id: "Cutie_cu_eclisa_de_separatie_din_cupru",
                title: "Cutie cu eclisa de separatie din cupru",
                counter: 1,
                img: product19,
                price: 892,
                description: "Cutie cu eclisa de separatie cu conectoru din cupru are rolul de a deconecta priza de impamantare pentru mentenata si masuratori. Carcasa IP55",
                filter: "Accesorii paratrasnet PDA",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Cutie cu eclisa de separatie din cupru. Cutie de separatie",
                    dataTehniceBotom: "",
                    titleDateTehnice: [
                        {desk1: "Material",
                         desk2: "Policarbonat",
                         },
  
                      {
                          desk1: "Material conector",
                          desk2: "Cupru",
                          
                      },
                      {
                          desk1: "Tip de conductor",
                          desk2: "Rotund pana la 75mmp",
                          
                      }
                     

  
                    ]
                }
            }, 


            {
                id: "Spark",
                title: "Spark Gap 10/350 µs 100kA",
                counter: 1,
                img: product20,
                price: 892,
                description: "Pentru conexiunea / împământarea indirectă a părților izolate ale instalațiilor în condiții de trăsnet",
                filter: "Accesorii paratrasnet PDA",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Pentru conexiunea / împământarea indirectă a părților izolate ale instalațiilor în condiții de trăsnet Pentru legarea echipotențială a partilor metalice la instalatia paratrasnet  conform IEC 62305 .Cu conexiuni din oțel inoxidabil rezistente la coroziune Pentru instalare în clădiri, locații exterioare și încăperi umede, precum și pentru instalare subterană",
                    dataTehniceBotom: "Date tehnice contor de lovituri",
                    titleDateTehnice: [
                        {desk1: "Spark Gap 10/350 µs 100kA"
                         
                         },
  
                      {
                          desk1: "Uaw",
                          desk2: "2,5 kV",
                          
                      },
                      {
                          desk1: "Up",
                          desk2: "5kV", 
                      }

                      ,
                      {
                          desk1: "Curent maxim suportat",
                          desk2: "( 10/350 μs): 100 kA", 
                      }
                     

  
                    ]
                }
            },










            {
                id: "Tarusi_otel_cuprat_15-25_microni_ED_nefiletati",
                title: "Tarusi otel cuprat 15-25 microni ED nefiletati",
                counter: 1,
                img: product16,
                price: 892,
                description: "Tarusi de impamantare din otel cuprat sunt produsi pe baza unor studii si cercetari care au avut loc in Europa si SUA pe o perioada de 50 ani in care sau folosit peste 14 000 de aliaje diferite. Studiul a presupus testarea electrozilor in situri, monitorizarea si analiza rezistentei la coroziune.",
                filter: "Tarusi Otel Cuprat 25 microni",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Electrozi de impamantare, otel cuprat de cost redus, În comparație cu cuprul pur, conductivitatea acestor electrozi bimetalici este mai mică. Pentru a spori capacitatea curentă de transport a cuprului, diametrul și grosimea stratului de cuprului sunt crescute. Strat de cupru 25 microni.",
                    dataTehniceBotom: "",
                    titleDateTehnice: [
                        {desk1: "Referinta",
                         desk2: "Dimensiune nominala", 
                         desk3: "Diametru real", 
                         desk4: "Greutate Kg"
                         
                         },
  
                      {
                        desk1: "ED1014",
                        desk2: "1000 X 13,7mm	", 
                        desk3: "13,7mm	", 
                        desk4: "1,6"
                          
                      },
                      {
                        desk1: "ED1514	",
                        desk2: "1500 X 13,7mm", 
                        desk3: "13,7mm	", 
                        desk4: "1,75"
                      }
                      ,
                      {
                        desk1: "ED2014",
                        desk2: "2000 X 13,7mm", 
                        desk3: "13,7mm	", 
                        desk4: "2,45"
                      }
                     

  
                    ]
                }
            },








            {
                id: "Tarusi_otel_cuprat_15-25_microni__nefiletati",
                title: "Tarusi otel cuprat 15-25 microni ED filetati",
                counter: 1,
                img: product17,
                price: 892,
                description: "Tarusi de impamantare de cost redus, În comparație cu cuprul pur, conductivitatea acestor electrozi bimetalici este mai mică. Pentru a spori capacitatea curentă de transport a cuprului, diametrul și grosimea stratului de cuprului sunt crescute. Strat de cupru 15-25 microni.",
                filter: "Tarusi Otel Cuprat 25 microni",
                curentPrice: 892,

                dateTehnice:{
                    dateTehniceDesc: "Tarusii de împământare trebuie separati între ei și de orice cabluri adiacente la o distanță nu mai mică decât lungimea lor. Tijele de împământare suplimentare trebuie conectate folosind bandă de cupru sau cablu de cupru. Electrozii adiționali trebuie așezați astfel încât să mentina o separare fata de sistemele de impamntare LV și HV.",
                    dataTehniceBotom: "",
                    titleDateTehnice: [
                        {desk1: "Referinta",
                         desk2: "Dimensiune nominala", 
                         desk3: "Diametru real", 
                         desk4: "Greutate Kg"
                         
                         },
  
                      {
                        desk1: "ED1014RR",
                        desk2: "1000 X 5/8 inch", 
                        desk3: "5/8 inch", 
                        desk4: "1,6"
                          
                      },
                      {
                        desk1: "ED1514RR	",
                        desk2: "1500 X 5/8 inch	", 
                        desk3: "5/8 inch", 
                        desk4: "1,75"
                      }
                      ,
                      {
                        desk1: "ED2014RR",
                        desk2: "2000 X 5/8 inch", 
                        desk3: "5/8 inch", 
                        desk4: "2.45"
                      }
                     

  
                    ]
                }
            }






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