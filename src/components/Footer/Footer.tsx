import React from 'react';
import {dataFooter, Icons} from "../../data";
import s from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer_text}>
                {dataFooter.map((foot, index) => <div
                    key={index} className={`${s.footer_text_item} ${foot.active && s.yellow}`}>{foot.title}</div>)}
            </div>
            <div className={s.footer_image}>
                <img src="https://gc.onliner.by/images/logo/onliner_logo_cat.svg" alt="pcr"/>
                <div className={s.footer_image_text}>Ⓒ 2001-2022 Onliner</div>
            </div>
            <div className={s.social_network_image}>
                {Icons.map((ic, index) => <div key={index} className={s.item_image_footer}><img src={ic.src} alt="pcr"/>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;