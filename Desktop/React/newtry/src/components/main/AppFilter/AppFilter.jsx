import { useState } from 'react';
import css from './AppFilter.module.scss';
import AppFilterBtn from './AppFilterBtn/AppFilterBtn';

const AppFilter = ({ btnsProps, onActive }) => {

    const btns = btnsProps.map(({isActive, id, children, type}) => {
        return (
            <AppFilterBtn
                onActive={() => onActive(id, type)}
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