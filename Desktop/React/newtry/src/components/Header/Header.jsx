import css from './header.module.scss'

const Header = ({ employeesCount, withPremium }) => {
    return (
        <header className={css.header}>
            <h1 className={css.header__title}>Учет сотрудников в компании</h1>
            <p className={css.header__employeesCount}>Общеее число сотрудников: {employeesCount}</p>
            <p className={css.header__employeesWithPremium}>Премию получат: {withPremium}</p>
        </header>
    );
}

export default Header;