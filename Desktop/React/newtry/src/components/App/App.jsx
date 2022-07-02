import React, { Component } from 'react';
import css from './App.module.scss';
import AppInfo from '../main/AppInfo/AppInfo';
import SearchPanel from '../main/SearchPanel/SearchPanel';
import AppFilter from '../main/AppFilter/AppFilter';
import EmployeesList from '../main/EmployeesList/EmployeesList';
import EmployeesAddForm from '../main/EmployeesAddForm/EmployeesAddForm';

// import WhoAmI from './WhoAmI';


class App extends Component {
  constructor() {
    super()
    this.state = JSON.parse(window.localStorage.getItem('state')) ||
    {
      employees: [
        { id: 1, name: 'John C.', salary: 800, premium: false, increase: true },
        { id: 2, name: 'Alex M.', salary: 3000, premium: true, increase: false },
        { id: 3, name: 'Carl W.', salary: 5000, premium: true, increase: false },
      ],
      btnsProps: [
        { id: 1, children: 'Все сотрудники', isActive: true, type: 'all' },
        { id: 2, children: 'На повышение', isActive: false, type: 'increased' },
        { id: 3, children: 'З/П больше 1000$', isActive: false, type: 'over1000$' },
        { id: 4, children: 'На премию', isActive: false, type: 'premium' },
      ],
      withPremium: 0,
      searchValue: { text: '', type: 'all' },
    };
  }

  // setState(state) {
  //   window.localStorage.setItem('state', JSON.stringify(this.state));
  //   super.setState(state);
  // }

  onSearch = (e) => {
    this.setState({ searchValue: { ...this.state.searchValue, text: e.target.value } });
  }

  filteredEmployeesFunc = (items, text, type) => {
    return items.filter(el => {
      if (el.name.toLowerCase().indexOf(text.toLowerCase()) > -1) {
        switch (type) {
          case 'all':
            return el;
          case 'increased':
            if (el.increase) {
              return el;
            }
            break;
          case 'over1000$':
            if (el.salary > 1000) {
              return el;
            }
            break;
          case 'premium':
            if (el.premium) {
              return el;
            }
            break;
        }
      }

    })
  }

  onDelete = (id) => {
    this.setState(state => ({
      employees: state.employees.filter(el => el.id !== id)
    }))
  }

  onActiveBtn = (id, type) => {
    this.setState(state => ({ searchValue: { ...state.searchValue, type: type }, btnsProps: state.btnsProps.map(el => (id === el.id) ? { ...el, isActive: true } : { ...el, isActive: false }) }));
  }

  onSalary = (value, id) => {
    const sal = value.replace(/\D+/g, '');

    this.setState(state => ({ employees: state.employees.map(el => el.id === +id ? { ...el, salary: sal } : el) }));
  }

  onIncreaseAndPremium = (id, dataAtr) => {
    // РЕШЕНИЕ ЧЕРЕЗ ДАТА-АТРИБУТЫ e.currentTarget.getAttribute('data-something')
    // dataAtr обязательно в [] чтобы не было ошибок с именами
    this.setState(state => ({ employees: state.employees.map(el => el.id === id ? { ...el, [dataAtr]: !el[dataAtr] } : el) }))
  }

  onAddEmployees = (obj) => {

    if (obj.name.length < 3) {
      return;
    }
    if (+obj.salary < 100) {
      return;
    }

    this.setState(state => ({
      employees: [...state.employees, obj],
    }));
  }

  render() {
    const { btnsProps, employees, searchValue } = this.state;

    const filteredEmployees = this.filteredEmployeesFunc(employees, searchValue.text, searchValue.type);
    const withPremium = filteredEmployees.reduce((acc, next) => (next.increase) ? acc + 1 : acc, 0)


    return (
      <div className={css.app}>

        <AppInfo withPremium={withPremium} employeesCount={employees.length} />
        <div className={css.SearchPanelWrapper}>


          <SearchPanel onSearch={this.onSearch} />

          <AppFilter onActiveBtn={this.onActiveBtn} btnsProps={btnsProps} />
        </div>

        <EmployeesList onSalary={this.onSalary} onIncreaseAndPremium={this.onIncreaseAndPremium} onDelete={this.onDelete} employees={filteredEmployees} />


        <EmployeesAddForm validateObj={this.validateObj} onAddEmployees={this.onAddEmployees} employees={filteredEmployees} />

      </div>
    );
  }
}

export default App;
