import React from 'react';
import styles from './Contacts.module.css';

const Contacts = (contacts) => {
    return (
        <div className={styles.contacts}>
            <h1>{contacts.text}</h1>
        </div>
    );
};

export default Contacts;