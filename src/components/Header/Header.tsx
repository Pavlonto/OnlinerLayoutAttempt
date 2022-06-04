import React from 'react';
import Aside from "../Aside/Aside";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <Aside/>
            <div className={s.header_body}>
                        <span className={s.header_item}>
                            <img className={s.header_image}
                                 src="https://gc.onliner.by/images/i-clover.png"
                                 alt="card"/>Onlíner Клевер</span>
                <span className={`${s.header_item} ${s.gray}`}>$ 2,5810</span>
                <span className={`${s.header_item} ${s.gray}`}>Погода: +19</span>
                <span className={s.header_age}>18+</span>
            </div>
        </header>
    );
};

export default Header;