import css from './AppFilterBtn.module.scss';

const AppFilterBtn = ({ children, isActive, onActive }) => {

    return (
        <button
            onClick={onActive}
            className={(isActive) ? `${css.appFilterBtn} ${css.active}` : `${css.appFilterBtn}`}>
            {children}
        </button>
    );
}

export default AppFilterBtn;