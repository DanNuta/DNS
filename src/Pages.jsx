import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet, useParams, useHistory  } from 'react-router-dom';


const Pages = (data) => {
    const { slug } = useParams();
    

    

    console.log(data, slug)

    

    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )

}
 
export default Pages;