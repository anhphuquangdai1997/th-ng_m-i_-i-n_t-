import React, { useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Oppo() {

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
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1639211475/products/eaypemgalhrbellx5bro.jpg',
            title: 'Oppo A1K',
            link: '/product/61ab0d8fdf8d50000471986c',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1639211474/products/vavmpwugqptpqb17fswq.jpg',
            title: 'Oppo Reno 2F',
            link: '/product/61b461d3987346000433dd28',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1638878706/products/vqotmocxkpuok0m3p3ye.jpg',
            title: 'Oppo S2',
            link: '/product/61af4df5d001930004c8cad4',
        },
        {
            img: 'https://res.cloudinary.com/dwjj1ijln/image/upload/v1642669363/products/ldpy5fifc7ixntxvjnci.jpg',
            title: 'OPPO Find X3',
            link: '/product/61e92534a393690004c6ebb0',
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

export default Oppo;