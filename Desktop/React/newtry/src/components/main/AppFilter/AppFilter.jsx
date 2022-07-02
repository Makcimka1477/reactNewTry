import React from 'react'
import css from './AppFilter.module.scss';
import AppFilterBtn from './AppFilterBtn/AppFilterBtn';
import uuid from 'react-uuid';

const AppFilter = ({ btnsProps, onActiveBtn}) => {
    
    const btns = btnsProps.map(({isActive, id, children, type}, i) => {

        return (
            <AppFilterBtn
            onActiveBtn={() => onActiveBtn(id, type)}
                isActive={isActive}
                key={id}>
                {children}
            </AppFilterBtn>);
    })

    return (
        <div className={css.appFilter}>
            {btns}
        </div>
    );
}

export default AppFilter;