import React from 'react';
import {Link} from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
                <li><Link to="/products">Продукты</Link></li>
                <li><Link to="/catalog">Каталог</Link></li>
                <li><Link to="/catalog/iphone">Телефоны</Link></li>
                <li><Link to="/catalog/macBook">Компьютеры</Link></li>

            </ul>
        </div>
    );
};

export default Header;