import React from 'react';
import s from './Aside.module.css'

const Aside = () => {

    return (
        <aside className={s.sidebar}>
            <img className={s.sidebar_image} src="https://gc.onliner.by/images/i-fire-orange.png" alt="fire"/>
            <a href={""} className={s.sidebar_item}>Каталог</a>
            <a href={""} className={s.sidebar_item}>Новости</a>
            <img className={s.sidebar_image} src="https://gc.onliner.by/images/i-ab-advert-specific.png" alt="car"/>
            <a href={""} className={s.sidebar_item}>Автобарахолка</a>
            <a href={""} className={s.sidebar_item}>Дома и квартиры</a>
            <a href={""} className={s.sidebar_item}>Услуги</a>
            <a href={""} className={s.sidebar_item}>Барахолка</a>
            <a href={""} className={s.sidebar_item}>Форум</a>
        </aside>
    );
};

export default Aside;