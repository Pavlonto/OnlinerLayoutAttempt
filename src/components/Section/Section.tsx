import React from 'react';
import {dataItem} from "../../data";
import SectionItem from "./SectionItem";
import s from './Section.module.css'

const Section = () => {
    return (
        <section className={s.content}>
            {dataItem.map((item, index) => <SectionItem key={index} {...item}/>)}
        </section>
    );
};

export default Section;