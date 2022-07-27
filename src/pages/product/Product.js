import React from 'react';
import styles from "./Product.module.css";

const Product = (product) => {
    return (
        <div className={styles.products}>
            <h1>{product.text}</h1>
        </div>
    );
};

export default Product;