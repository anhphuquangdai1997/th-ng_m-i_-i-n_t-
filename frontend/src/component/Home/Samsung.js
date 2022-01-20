import React, { useState } from 'react';

import Slider from "react-slick";
import { Link } from 'react-router-dom';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Samsung() {

    const config = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const [settings, setSettings] = useState(config);

    const products = [
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1638599679/products/nbgdzirf5fm9jst4ezjr.jpg',
            title: 'Samsung galaxy Z',
            link: '/product/61ab0bffdf8d50000471980c',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1639832624/products/os0rr5glptwcpp4l0n1b.jpg',
            title: 'galaxy note 10 pro',
            link: '/products/máy%20ảnh',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1642668603/products/ai0mumzfn3kghtreduev.jpg',
            title: 'samsung galaxy A32',
            link: '/product/61e9223ca393690004c6eb70',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1642668900/products/ykbgttawykdaddek3crd.jpg',
            title: 'galaxy note 40 128gb',
            link: '/product/61e92365a393690004c6eb8d',
        },



    ]

    return (
        <div className="App">


            <Slider {...settings}>
                {products.map((x, i) => {
                    return <div key={i} className="img-card">
                        <div class="card-body">
                            <div className="card-title">{x.title}</div>

                        </div>

                        <Link to={x.link}><img className="img" src={x.img} alt='kkk' /></Link>


                    </div>
                })}
            </Slider>
        </div>
    );
}

export default Samsung;