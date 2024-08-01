
"use client";

import React from 'react';
import styles from '../styles/Nav.module.css';

const Nav: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    Banner Generator
                </div>
            </div>
        </nav>
    );
};

export default Nav;
