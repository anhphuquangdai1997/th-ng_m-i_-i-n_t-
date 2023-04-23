import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import { Link } from 'react-router-dom'
// import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Hotfrend from "./Hotfrend/Hotfrend";
import Start from "./Start";
import { Button } from "@material-ui/core";
import RecipeReviewCard from "./RecipeReviewCard";
import RecipeReviewCard1 from "./RecipeReviewCard1";
import RecipeReviewCard2 from "./RecipeReviewCard2";
import Giamgia from "./Giamgia";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Chào Mừng Bán Đến Với Shop Mobile</p>
            <h1>Tìm Những Sản Phẩm Tốt Nhất Tại Đây</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <div className="quangcao">
            <a href="https://www.apple.com/watch/" target="blank">
              <img
                className="adv-img w-100 bor-rad-8"
                src="https://res.cloudinary.com/tuan-cloudinary/image/upload/v1608268459/others/1_iorzsj.webp" alt="hello" width='80%'
              />
            </a>
          </div>
          <div className="homehotpageee">
            <h4>Tìm kiếm nhanh</h4>
            <Hotfrend />
          </div>
          <h2 className="homeHeading">Sản phẩm nổi bậc</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <Start key={product._id} product={product} />
              ))
            }
          </div>
          <div className="nutbamm"><Button><Link to='/products'>Xem Thêm</Link></Button></div>


          <div className="homehotpage">
            <h4>Thương hiệu nổi bậc</h4>
            <Giamgia />
          </div>

          <div className="homehotpageee">
            <h4>Tin mới công nghệ</h4>
            <div className="canhchinh"><RecipeReviewCard /></div>
            <div className="canhchinh"><RecipeReviewCard1 /></div>
            <div className="canhchinh"><RecipeReviewCard2 /></div>

          </div>

        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
