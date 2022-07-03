import css from './AppFilterBtn.module.scss';

const AppFilterBtn = ({ children, isActive, onActiveBtn }) => {

    return (
        <button
            tabIndex={2}
            onClick={onActiveBtn}
            className={(isActive) ? `${css.appFilterBtn} ${css.active}` : `${css.appFilterBtn}`}>
            {children}
        </button>
    );
}


export default AppFilterBtn;