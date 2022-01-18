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
import {ImagesArrowSvg, ImagesArrowSvg2,  ImagesArrowSvg3, ImagesArrowSvg4} from "./ArrowSvg";
import AnimatePhoto from "../../Pages/home_section1/home_animation.png";
import AnimatePhoto2 from "../../Pages/home_section1/home_animation2.png";
import AnimatePhoto3 from "../../Pages/home_section1/home_animation3.png";
import AnimatePhoto4 from "../../Pages/home_section1/home_animation4.png";





class Slider extends Component {


    static defaultProps = {
        images: [
            {id:1, img: Fist_Img, alt: "fist"},
            {id:2, img: Seconds_Img, alt: "second"},
            {id:3, img: AnimatePhoto, alt: "second"},
            {id:4, img: AnimatePhoto2, alt: "second"},
            {id:5, img: AnimatePhoto3, alt: "second"},

        ],

        arrowCurent: [
            {img: leftArrow, alt: "Left Arrow"},
            {img: rightArrow, alt: "Right Arrow"},
            {img: leftArrowHover, alt: "Left Arrow Hover"},
            {img: rightArrowHover, alt: "Right Arrow Hover"}
        ],

        svgWishList: [<ImagesArrowSvg3/>, <ImagesArrowSvg4/>]


       
 
    }




    state = {
        curentSlide: this.props.images[0],
        click: 1, 
        leftArrow: this.props.arrowCurent[0],
        rightArrow: this.props.arrowCurent[1],
        products: this.props.produse,
        iconWishList: this.props.svgWishList[0],
        counterSlider: 1
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


            this.setState({counterSlider: this.state.counterSlider +1})
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
        
        let wishList = this.props.wishList.map(el => el.id);

        

        return ( 



            <React.Fragment>



            <div className="img_out_grid">
                    <div className={this.state.curentSlide.id === 3 ? "animated" : "photo"}>

                            <div className= "img_right">
                                <img  src={this.state.curentSlide.img} alt={this.state.curentSlide.alt}/>
                            </div>
                        

                        {this.state.curentSlide.id === 3 && 
                                    <div className='animated_photo'>
                                        <div className="animation_top">
                                            <div className="circle_animation">
                                               <div className="line_animation"></div>
                                            </div>
                                            
                                            <div className="text_animation">
                                                <p>Paratrasnet PDA Sensor</p>
                                            </div>
                                        </div>


                                        <div className="animation_bottom animation_delay_button">
                                            <div className="circle_animation">
                                                <div className="line_animation"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom">
                                                    <p>Catarg fixare Paratrasnet PDA</p>
                                                </div>
                                        </div>

                                    </div>
                        }






                        {this.state.curentSlide.id === 4 && 
                                    <div className='animated_photo2'>
                                        <div className="animation_top2">
                                            <div className="circle_animation2">
                                               <div className="line_animation2"></div>
                                            </div>
                                            
                                            <div className="text_animation2">
                                                <p>Paratrasnet PDA Sensor</p>
                                            </div>
                                        </div>


                                        <div className="fii_in_siguranta">
                                            <div className="circle_animation2">
                                                <div className="line_animation2"></div>
                                            </div>

                                                <div className="text_animation_bottom2">
                                                    <p>Fii in suguranta cu DNA</p>
                                                </div>

                                        </div>


                                        <div className="animation_bottom2 animation_delay_button2">
                                                <div className="circle_animation2">
                                                   <div className="line_animation2"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom2">
                                                    <p>Catarg fixare Paratrasnet PDA</p>
                                                </div>
                                        </div>

                                    </div>
                        }







                      {this.state.curentSlide.id === 5 && 
                                    <div className='animated_photo4'>
                                        <div className="animation_top4">
                                            <div className="circle_animation4">
                                               <div className="line_animation4"></div>
                                            </div>
                                            
                                            <div className="text_animation4">
                                                <p>Garantie de lunga durata</p>
                                            </div>
                                        </div>


                                        <div className="fii_in_siguranta4">
                                            <div className="circle_animation4">
                                                <div className="line_animation4"></div>
                                            </div>

                                                <div className="text_animation_bottom4">
                                                    <p>Calitate inalta</p>
                                                </div>

                                        </div>


                                        <div className="animation_bottom4 animation_delay_button4">
                                                <div className="circle_animation4">
                                                   <div className="line_animation4"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom4">
                                                    <p>Protectie exceptionala</p>
                                                </div>
                                        </div>

                                    </div>
                        }


                    </div>

                   
                </div>

























            
               <section className="section_slider ">



                    








                <div className="center_slider ">
                    <div className="right">
                        <h1>Sudara exotermica CADWELD</h1>
                        <p>Accesorii, interconexiuni, consumabile
                            Suduri impamantare durabile, garantie pe viata, durata de viata 100 ani.</p>
                            <NavLink className="btn" to="/contact"><button>Contacteaza-ne</button></NavLink>

                        <div className="indicator">
                            <button className='slider_btn_prev' onClick={this.leftArrow}><span className='slider__button-inner'><ImagesArrowSvg/></span></button>
                            <button className='slider_btn_next' onClick={this.rightArrow}><span className='slider__button-inner'><ImagesArrowSvg2/></span></button>
                        </div>

                    </div>
                </div>










                <div className="right_img">
                    <div className={this.state.curentSlide.id === 3 ? "animated" : "photo"}>

                            <div className="img_right">
                                <img  src={this.state.curentSlide.img} alt={this.state.curentSlide.alt}/>
                            </div>
                        

                        {this.state.curentSlide.id === 3 && 
                                    <div className='animated_photo'>
                                        <div className="animation_top">
                                            <div className="circle_animation">
                                               <div className="line_animation"></div>
                                            </div>
                                            
                                            <div className="text_animation">
                                                <p>Paratrasnet PDA Sensor</p>
                                            </div>
                                        </div>


                                        <div className="animation_bottom animation_delay_button">
                                            <div className="circle_animation">
                                                <div className="line_animation"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom">
                                                    <p>Catarg fixare Paratrasnet PDA</p>
                                                </div>
                                        </div>

                                    </div>
                        }






                        {this.state.curentSlide.id === 4 && 
                                    <div className='animated_photo2'>
                                        <div className="animation_top2">
                                            <div className="circle_animation2">
                                               <div className="line_animation2"></div>
                                            </div>
                                            
                                            <div className="text_animation2">
                                                <p>Paratrasnet PDA Sensor</p>
                                            </div>
                                        </div>


                                        <div className="fii_in_siguranta">
                                            <div className="circle_animation2">
                                                <div className="line_animation2"></div>
                                            </div>

                                                <div className="text_animation_bottom2">
                                                    <p>Fii in suguranta cu DNA</p>
                                                </div>

                                        </div>


                                        <div className="animation_bottom2 animation_delay_button2">
                                                <div className="circle_animation2">
                                                   <div className="line_animation2"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom2">
                                                    <p>Catarg fixare Paratrasnet PDA</p>
                                                </div>
                                        </div>

                                    </div>
                        }







                      {this.state.curentSlide.id === 5 && 
                                    <div className='animated_photo4'>
                                        <div className="animation_top4">
                                            <div className="circle_animation4">
                                               <div className="line_animation4"></div>
                                            </div>
                                            
                                            <div className="text_animation4">
                                                <p>Garantie de lunga durata</p>
                                            </div>
                                        </div>


                                        <div className="fii_in_siguranta4">
                                            <div className="circle_animation4">
                                                <div className="line_animation4"></div>
                                            </div>

                                                <div className="text_animation_bottom4">
                                                    <p>Calitate inalta</p>
                                                </div>

                                        </div>


                                        <div className="animation_bottom4 animation_delay_button4">
                                                <div className="circle_animation4">
                                                   <div className="line_animation4"></div>
                                                </div>
                                                
                                                <div className="text_animation_bottom4">
                                                    <p>Protectie exceptionala</p>
                                                </div>
                                        </div>

                                    </div>
                        }


                    </div>

                   
                </div>





                










                <div className="section_instruments_bottom ">

                    <div className="first_item">
                        <img className='img' src={this.state.products[0].img} alt="Sfredel" />
                        <div className="hover_item">

                             <img className="img" src={this.state.products[0].img} alt="Sfredel"  />
                            <ul>
                                <li onClick={this.searchItem1}><NavLink to={`/produse/${this.state.products[0].id}`}><img src={search} alt="search"/></NavLink></li>
                                <li onClick={this.selectFirstItem}>{wishList.includes(this.state.products[0].id) ?  <ImagesArrowSvg4/> : <ImagesArrowSvg3/>}</li>
                            </ul>
                            
                        </div>
                    </div>


                    <div className="first_item">
                        <img className='img' src={this.state.products[1].img} alt="Sfredel"  />
                        <div className="hover_item">

                             <img className="img" src={this.state.products[1].img} alt="Sfredel"  />
                            <ul>
                                <li><NavLink to={`/produse/${this.state.products[1].id}`}><img src={search} alt="search"/></NavLink></li>
                                <li onClick={this.selectFirstItem2}>{wishList.includes(this.state.products[1].id) ?  <ImagesArrowSvg4/> : <ImagesArrowSvg3/>}</li>
                            </ul>
                            
                        </div>
                    </div>




                    <div className="first_item">
                        <img className='img' src={this.state.products[2].img} alt="Sfredel"  />
                        <div className="hover_item">

                              <img className="img" src={this.state.products[2].img} alt="Sfredel"  />
                            <ul>
                                <li ><NavLink to={`/produse/${this.state.products[2].id}`}><img src={search} alt="search"/></NavLink></li>
                                <li onClick={this.selectFirstItem3}>{wishList.includes(this.state.products[2].id) ?  <ImagesArrowSvg4/> : <ImagesArrowSvg3/>}</li>
                            </ul>
                            
                        </div>

                        
                    </div>



                   


                    
                    
                </div>


                <NavLink className="btn-link" to="/contact"><button>Contacteaza-ne</button></NavLink>

            </section>


            </React.Fragment>
         );
    }
}
 
export default Slider;