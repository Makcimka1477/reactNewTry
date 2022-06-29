import { Component } from 'react';
import css from './EmployeesAddForm.module.scss'

// const EmployeesAddForm = () => {
// ERROR ПРИ ВАЛИДАЦИИ ДОПИСАТЬ.
class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: this.props.employees,
            name: '',
            salary: '',
            // error: '',
        }
    }

    onChanger = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({ [name]: value });
        // switch (e.target.name) {
        //     case 'name':
        //         let newName = value.replace(/\d/g, '')
        //         this.setState({ name: newName });
        //         break;
        //     case 'salary':
        //         let newSalary = value.replace(/\D/, '')
        //         this.setState({ salary: newSalary });
        //         break;
        // }
    }

    render() {
        const obj = { name: this.state.name, salary: this.state.salary, id: this.state.employees.length};
        const { name, salary } = this.state;
        return (
            <div className={css.employeesAddForm}>
                <h1 className={css.employeesAddForm__title}>Добавить нового сотрудника</h1>
                <div className={css.employeesAddForm__inputGroup}>
                    <input onChange={this.onChanger} className={css.employeesAddForm__inputName} name='name' type="text" placeholder='Имя сотрудника' value={name} tabIndex='1' />
                    <input onChange={this.onChanger} name='salary' className={css.employeesAddForm__inputSalary} type="text" placeholder='З/П в $' value={salary} tabIndex='2' />
                    <button onClick={() => this.props.onAddEmployees(obj)} className={css.employeesAddForm__inputBtn} type='button' tabIndex='3'>Добавить</button>
                </div>
            </div>
        );
    }
}

export default EmployeesAddForm;