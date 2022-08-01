import React from 'react';
import styles from "./Product.module.css";
import {useParams} from 'react-router-dom';


const Product = (product) => {
   const params = useParams()
    return (
        <div className={styles.products}>
            <h1>{product.text}: {params.name}</h1>
            img
            price
            description
        </div>
    );
};

export default Product;