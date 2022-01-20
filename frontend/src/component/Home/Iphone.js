import React, { useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Iphone() {

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
            img: 'https://anh.24h.com.vn/upload/4-2014/images/2014-12-26/1419556351-iphone-lam-nong-thi-truong-dien-thoai-1.jpg',
            title: 'Iphone 4s',
            link: '/product/61e926c9a393690004c6ebd7',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYjftNU1cEyL8ZB9JqT6svgWbi_2Y2WeQNNs8tgBecelaCx5Jigmao0pNmPi6dYHIA_Q&usqp=CAU',
            title: 'iphone 7plus',
            link: '/product/61e92842a393690004c6ec01',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwhgjBjjwlS-ex4GVdI9rACiEvzcRc_6_JQw&usqp=CAU',
            title: 'iphone 5s',
            link: '/product/61e9275ca393690004c6ebe3',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1638599862/products/blpvbiz02e4d9fmuudkb.jpg',
            title: 'iphone SE',
            link: '/product/61ab0b5bdf8d5000047197f1',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1639833015/products/pa3p0h4jf7lt8edefhap.jpg',
            title: 'iphone 6plus',
            link: '/product/61bdddbbf4812e54447b748e',
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

export default Iphone;