import React from 'react';
import {text} from "../../data";
import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.nav_up}>
                <img className={s.nav_logo}
                     src="https://gc.onliner.by/images/logo/onliner_logo.v3@2x.png?1653040822"
                     alt="logo"/>
                <input className={s.nav_search_input} placeholder={"Поиск в Каталоге. Например, \"...\" "}
                       type="text"></input>
                <div className={s.login}>
                    <button type={"button"} className={s.entry_button}>Войти</button>
                    <button className={`${s.nav_image_button} ${s.fb}`}/>
                    <button className={`${s.nav_image_button} ${s.vk}`}/>
                    <button className={`${s.nav_image_button} ${s.gg}`}/>
                </div>
                <button className={`${s.nav_image_button} ${s.cart}`}></button>
            </div>
            <div className={s.nav_down}>
                <div className={s.prime}>
                    <img className={s.prime_image} src="https://gc.onliner.by/images/i-prime-arrow.png"
                         alt="prime"/>
                    <div className={s.prime_text}>Призы за покупки с Prime!</div>
                </div>
                {text.map((t, index) => <div key={index} className={index === 0 ? s.symbol : s.nav_down_text}>{t.text}</div>)}
            </div>
        </nav>
    );
};

export default Nav;
