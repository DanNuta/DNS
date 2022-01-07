import React, { Component } from 'react';

class NewProducts extends Component {
    
    
    state = {
       id: "",
       title: "",
       counter: 1, /* */
       img: "",
       price: 0,   /* */
       description: "",
       filter: "",
       curentPrice: 0,
       link: ""
    }

    id = (e) =>{
        let value = e.target.value;
        this.setState({id: value})
    }


    title = (e) =>{
        let value = e.target.value;
        this.setState({title: value})
    }


    img = (e) =>{
        let value = e.target.value;
        this.setState({img: value})
    }




    description = (e) =>{
        let value = e.target.value;
        this.setState({description: value})
    }


    filter = (e) =>{
        let value = e.target.value;
        this.setState({filter: value})
    }

    curentPrice = (e) =>{
        let value = e.target.value;
        this.setState({curentPrice: value})
    }




    link = (e) =>{
        let value = e.target.value;
        this.setState({link: value})
    }


    submit = (e) =>{

        e.preventDefault();


        const obj = {
            ...this.state,
            nume:"danu"
        }

        this.props.onAddNewProducts(this.state)

    }



    filesFromImg = (e) =>{
        let img = new FileReader();

        img.onload = () =>{
            if(img.readyState === 2){
                this.setState({img: img.result})
            }
        }

        img.readAsDataURL(e.target.files[0])
    }


    





    render() { 
        return ( 
            <div>


                <form onSubmit={this.submit} action="">
                    <input onChange={this.id} type="text" placeholder='id' />
                    <input onChange={this.title} type="text" placeholder='title' />
                    <input onChange={this.img} type="file" accept='images/*' onChange={this.filesFromImg} placeholder='img' />
                    <textarea onChange={this.description} placeholder='description'></textarea>
                    <input onChange={this.filter} type="text" placeholder='filter' />
                    <input onChange={this.curentPrice} type="number" placeholder='curentPrice' />
                    <input onChange={this.link} type="text" placeholder='link'/>

                    <button onClick={this.submit}>Sumbit</button>
                </form>

                <img src={this.state.img} alt="" />
            </div>
         );
    }
}
 
export default NewProducts;