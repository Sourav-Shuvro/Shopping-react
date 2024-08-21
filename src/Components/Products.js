import React from 'react';

const Product = (props) => {
  console.log(props)
    const {title, image, price, description, rating} = props;
  return (
      <article className="product">
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p style={{color:'#FFA500', textAlign:'left'}}>Price: {price}</p>
        <p style={{color:'#FFA500', textAlign:'left'}}>Rating: {rating}/5</p>
        <p className="product__desc">Description: {description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};

export default Product;
