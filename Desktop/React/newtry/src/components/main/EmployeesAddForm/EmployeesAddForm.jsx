import { Component } from 'react';
import css from './EmployeesAddForm.module.scss'

// ERROR ПРИ ВАЛИДАЦИИ ДОПИСАТЬ.
class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            id: this.props.employees.length,

            errorName: '',
            errorSalary: '',
        }
    }

    onChanger = (e) => {
        const name = e.target.name;
        let value = (name === 'salary') ? e.target.value.replace(/\D+/g, '') : e.target.value.replace(/\d+/g, '');
        this.setState({ [name]: value, id: this.state.id + 1 });
    }

    validateName = () => {
        if (this.state.name.length < 3) {
            console.log(this.state.name, 'length');
            this.setState({ errorName: true });
            return true;
        }
        return false;
    }
    validateSalary = () => {
        if (+this.state.salary < 100) {
            console.log(this.state.salary, '< 100');
            this.setState({ errorSalary: true });
            return true;
        }
        return false;
    }

    onSubmit = (obj, e) => {
        e.preventDefault();

        this.setState({
            errorName: this.validateName(),
            errorSalary: this.validateSalary(),
        });

        this.props.onAddEmployees(obj);
        this.setState({ name: '', salary: '' });
    }

    render() {
        const { name, salary, id, errorName, errorSalary } = this.state;


        const obj = { id, name, salary, premium: false, increase: false };

        const activeErrorName = (errorName) ? `${css.error__name} ${css.active}` : `${css.error__name}`;
        const activeErrorSalary = (errorSalary) ? `${css.error__salary} ${css.active}` : `${css.error__salary}`;


        return (
            <div className={css.employeesAddForm}>
                <h1 className={css.employeesAddForm__title}>Добавить нового сотрудника</h1>
                <form onSubmit={(e) => this.onSubmit(obj, e)} className={css.employeesAddForm__form}>
                    <input onChange={this.onChanger} name='name' className={css.formInputName} type="text" placeholder='Имя сотрудника' value={name} tabIndex='1' />
                    <input onChange={this.onChanger} name='salary' className={css.formInputSalary} type="text" placeholder='З/П в $' value={salary} tabIndex='2' />
                    <button type='submit' className={css.employeesAddForm__formBtn} tabIndex='3'>Добавить</button>
                </form>
                <div className={css.error}>
                    <div className={activeErrorName}>Мало символов</div>
                    <div className={activeErrorSalary}>Не меньше 100$</div>
                </div>
            </div >
        );
    }
}

export default EmployeesAddForm;