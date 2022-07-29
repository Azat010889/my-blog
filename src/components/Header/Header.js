import React from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {

    const setActive = ({isActive}) =>  isActive ? "active" : "";

    return (
        <div className={styles.header}>
            <ul>
                <li><NavLink className={setActive} to="/">Главная</NavLink></li>
                <li><NavLink className={setActive} to="/about">О нас</NavLink></li>
                <li><NavLink className={setActive} to="/contacts">Контакты</NavLink></li>
                <li><NavLink className={setActive} to="/products">Продукты</NavLink></li>
                <li><NavLink className={setActive} to="/catalog">Каталог</NavLink></li>
                <li><NavLink className={setActive} to="/catalog/iphone">Телефоны</NavLink></li>
                <li><NavLink className={setActive} to="/catalog/macBook">Компьютеры</NavLink></li>

            </ul>
        </div>
    );
};

export default Header;