import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О нас</a></li>
                <li><a href="/contacts">Контакты</a></li>
                <li><a href="/products">Продукты</a></li>
                <li><a href="/catalog/iphone">Телефоны</a></li>
                <li><a href="/catalog/macBook">Компьютеры</a></li>

            </ul>
        </div>
    );
};

export default Header;