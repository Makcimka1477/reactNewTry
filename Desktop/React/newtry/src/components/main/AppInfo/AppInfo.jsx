import css from './AppInfo.module.scss'

const AppInfo = ({ employeesCount, withPremium }) => {
    return (
        <header className={css.appInfo}>
            <h1 className={css.appInfo__title}>Учет сотрудников в компании</h1>
            <p className={css.appInfo__employeesCount}>Общеее число сотрудников: {employeesCount}</p>
            <p className={css.appInfo__employeesWithPremium}>Премию получат: {withPremium}</p>
        </header>
    );
}

export default AppInfo;