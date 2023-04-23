import React, { useState } from 'react';
import './frend.css'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hotfrend() {

    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const [settings, setSettings] = useState(config);

    const products = [
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1639833018/products/flxkel7lqqzlfctjylp9.jpg',
            title: 'Điện Thoại',
            link: '/products/di%20động',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1638545290/products/pgpnwm7wwvv81hby5mm3.jpg',
            title: 'Laptop',
            link: '/products/laptop',
        },

        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1640166822/products/zilz1srf9ygoxicolckw.jpg',
            title: 'Máy Ảnh',
            link: '/products/máy%20ảnh',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1640356674/products/kofqpsfnn7x90siguhkj.jpg',
            title: 'Ipad',
            link: '/products/ipad',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1640166314/products/tqvnnu8psbosiefgwas6.jpg',
            title: 'Phụ Kiện',
            link: '/products/phụ%20kiện',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1638545290/products/pgpnwm7wwvv81hby5mm3.jpg',
            title: 'Laptop',
            link: '/products/laptop',
        }

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

export default Hotfrend;