import React, { Component } from 'react';
import "./Slider.scss";
import {  NavLink } from "react-router-dom";
import Fist_Img from "../../Pages/section_images/first.png";
import Seconds_Img from "../../Pages/section_images/second.png";
import images_instrument1 from "../../Pages/section_images/instruments_img/first_img.png";
import search from "../../Pages/icon/search.svg";
import heart from "../../Pages/icon/heart.svg";
import leftArrow from "../../Pages/icon/header_arrow/left_arrow.svg";
import rightArrow from "../../Pages/icon/header_arrow/right_arrow.svg";
import rightArrowHover from "../../Pages/icon/header_arrow/right_arrow_hover.svg";
import leftArrowHover from "../../Pages/icon/header_arrow/left_arrow_hover.svg";





class Slider extends Component {


    static defaultProps = {
        images: [
            {id:1, img: Fist_Img, alt: "fist", class: "active_slide"},
            {id:2, img: Seconds_Img, alt: "second", class: "active_slide"},
        ],

        arrowCurent: [
            {img: leftArrow, alt: "Left Arrow"},
            {img: rightArrow, alt: "Right Arrow"},
            {img: leftArrowHover, alt: "Left Arrow Hover"},
            {img: rightArrowHover, alt: "Right Arrow Hover"}
        ]
 
    }




    state = {
        curentSlide: this.props.images[0],
        click: 1, 

        leftArrow: this.props.arrowCurent[0],
        rightArrow: this.props.arrowCurent[1],

        products: this.props.products

        
        
    }


    leftArrow = () =>{

            this.setState({click: this.state.click - 1})
            this.setState({curentSlide: this.props.images[this.state.click]})
            this.setState({leftArrow: this.props.arrowCurent[2]})
            this.setState({rightArrow: this.props.arrowCurent[1]})
            


            if(this.state.click <= 0){
                this.setState({click: this.props.images.length -1})
                
            }
        
    }

    rightArrow = () =>{
    
            this.setState({click: this.state.click + 1})
            this.setState({curentSlide: this.props.images[this.state.click]})
            this.setState({rightArrow: this.props.arrowCurent[3]})
            this.setState({leftArrow: this.props.arrowCurent[0]})


            if(this.state.click >= this.props.images.length -1){
                this.setState({click: 0})
                
            }
    }



    selectFirstItem = () =>{
        this.props.onExportDate(this.state.products[0])
    }


    selectFirstItem2 = () =>{
        this.props.onExportDate(this.state.products[1])
    }



    selectFirstItem3 = () =>{
        this.props.onExportDate(this.state.products[2])
    }


    searchItem1 = () =>{
        this.props.onSearchItem(this.state.products[0])
    }



    
    render() { 




        return ( 
            
            <section className="section_slider">

                <div className="center_slider center">
                    <div className="right">
                        <h1>Sudara exotermica CADWELD</h1>
                        <p>Accesorii, interconexiuni, consumabile
                            Suduri impamantare durabile, garantie pe viata, durata de viata 100 ani.</p>
                        <button onClick={this.submitData} className="btn">Contactează-ne</button>

                        <div className="indicator">
                            <button onClick={this.leftArrow}><img src={this.state.leftArrow.img}  /></button>
                            <button onClick={this.rightArrow}><img src={this.state.rightArrow.img} /></button>
                        </div>

                    </div>
                </div>


                <div className="right_img">
                    <img src={this.state.curentSlide.img} alt={this.state.curentSlide.alt}  />
                </div>


                <div className="section_instruments_bottom center">

                    <div className="first_item">
                        <img className='img' src={this.state.products[0].img} alt="Sfredel" />
                        <div className="hover_item">

                             <img className="img" src={this.state.products[0].img} alt="Sfredel"  />
                            <ul>
                                <li onClick={this.searchItem1}><NavLink to={`/produse/${this.props.products[0].id}`}><img src={search} alt="search"/></NavLink></li>
                                <li onClick={this.selectFirstItem}><img src={heart} alt="search"/></li>
                            </ul>
                            
                        </div>
                    </div>


                    <div className="first_item">
                        <img className='img' src={this.state.products[1].img} alt="Sfredel"  />
                        <div className="hover_item">

                             <img className="img" src={this.state.products[1].img} alt="Sfredel"  />
                            <ul>
                                <li><NavLink to="/service/pr2"><img src={search} alt="search"/></NavLink></li>
                                <li onClick={this.selectFirstItem2}><img src={heart} alt="search"/></li>
                            </ul>
                            
                        </div>
                    </div>




                    <div className="first_item">
                        <img className='img' src={this.state.products[2].img} alt="Sfredel"  />
                        <div className="hover_item">

                              <img className="img" src={this.state.products[2].img} alt="Sfredel"  />
                            <ul>
                                <li ><NavLink to="/service/pr3"><img src={search} alt="search"/></NavLink></li>
                                <li onClick={this.selectFirstItem3}><img src={heart} alt="search"/></li>
                            </ul>
                            
                        </div>
                    </div>



                    <div className="number_slider">

                        <ul>
                            <li>01</li>
                            <li>02</li>
                            <li>03</li>
                            <li>04</li>
                        </ul>
                    </div>


                    
                    
                </div>

            </section>
         );
    }
}
 
export default Slider;