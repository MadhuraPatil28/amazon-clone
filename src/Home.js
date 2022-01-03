import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover – October 16, 2018"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91S+nNHdHSL._AC_UL210_SR195,210_.jpg"
          />
          <Product
            id="49538094"
            title="22” LED HDTV | Continu.us CT-2270 HDTV 720p 60Hz LED, Television/Lightweight and Slim Design"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61XCqDMoxWL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="ApePal 5-Layer Disposable KN95 Face Masks Wide Elastic Ear Loops Safety Face Mask"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41SryUNmj4L._SY445_SX342_QL70_FMwebp_.jpg"
          />
          <Product
            id="90829332"
            title="ApePal 5-Layer Disposable KN95 Face Masks Wide Elastic Ear Loops Safety Face Mask"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41SryUNmj4L._SY445_SX342_QL70_FMwebp_.jpg"
          />
           <Product
            id="90829332"
            title="ApePal 5-Layer Disposable KN95 Face Masks Wide Elastic Ear Loops Safety Face Mask"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41SryUNmj4L._SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;