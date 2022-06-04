import React from 'react';
import s from './Section.module.css';

type SectionType = {
    title:string,
    img:string,
    subTitle?:string
}

const SectionItem = ({title,img,subTitle}: SectionType) => {
    return (
        <div className={s.content_item} style={{backgroundImage:`url(${img})`}}>
            <div className={s.text_content}>{title}</div>
            {subTitle &&  <p className={s.sub_title}>{subTitle}</p>}
        </div>
    );
};

export default SectionItem;