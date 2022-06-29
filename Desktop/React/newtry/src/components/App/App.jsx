import React, { Component } from 'react';
import css from './App.module.scss';
import AppInfo from '../main/AppInfo/AppInfo';
import SearchPanel from '../main/SearchPanel/SearchPanel';
import AppFilter from '../main/AppFilter/AppFilter';
import EmployeesList from '../main/EmployeesList/EmployeesList';
import EmployeesAddForm from '../main/EmployeesAddForm/EmployeesAddForm';

// import WhoAmI from './WhoAmI';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [
        { id: 1, name: 'John C.', salary: 800, premium: false, increase: true },
        { id: 2, name: 'Alex M.', salary: 3000, premium: true, increase: false },
        { id: 3, name: 'Carl W.', salary: 5000, premium: true, increase: false },
      ],
      btnsProps: [
        { id: 1, children: 'Все сотрудники', isActive: true, type: 'all' },
        { id: 2, children: 'На повышение', isActive: false, type: 'rised' },
        { id: 3, children: 'З/П больше 1000$', isActive: false, type: 'over1000$' },
        { id: 4, children: 'На премию', isActive: false, type: 'premium' },
      ],
      withPremium: 0,
      searchValue: { text: '', type: 'all' },
    };
  }


  onDelete = (id) => {
    this.setState(state => ({
      employees: state.employees.filter(el => el.id !== id)
    }))
  }

  onAddEmployees = (obj) => {
    this.setState(state => ({
      employees: [...state.employees, obj],
    }));
  }

  onPremium = (id) => {
    // console.log('prem', id);
    this.setState(state => ({ employees: state.employees.map(el => el.id === id ? { ...el, premium: !el.premium } : el) }));

  }

  onIncrease = (id) => {
    // console.log('inc', id);
    this.setState(({ employees }) => ({ employees: employees.map(el => el.id === id ? { ...el, increase: !el.increase } : el) }));
  }

  onActive = (id, type) => {
    this.setState(state => ({ btnsProps: state.btnsProps.map(el => (id === el.id) ? { ...el, isActive: true } : { ...el, isActive: false }) }))
    this.setState({ searchValue: { ...this.state.searchValue, type: type } })
  }

  onSalary = (value, id) => {
    const sal = value.replace(/\D+/g, '');

    this.setState(state => ({ employees: state.employees.map(el => el.id === +id ? { ...el, salary: sal } : el) }));
  }

  onSearch = (text) => {
    this.setState({ searchValue: { ...this.state.searchValue, text: text } });
  }



  render() {
    const { employees, btnsProps, searchValue } = this.state;


    const withPremium = employees.reduce((acc, next) => (next.increase) ? acc + 1 : acc, 0)




    const filteredEmployees = employees.filter(el => {

      if (el.name.toLowerCase().indexOf(searchValue.text.toLowerCase()) > -1) {

        switch (searchValue.type) {
          case 'all':
            return el;
          case 'rised':
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

    });




    return (
      <div className={css.app}>

        {/* <WhoAmI name='John' surname='Smith' link='aaa.com' />
      <WhoAmI name='Bred' surname='Tomson' link='bbb.com' /> */}

        <AppInfo withPremium={withPremium} employeesCount={employees.length} />
        <div className={css.SearchPanelWrapper}>
          <SearchPanel onSearch={this.onSearch} />
          <AppFilter onActive={this.onActive} btnsProps={btnsProps} />
        </div>

        <EmployeesList onSalary={this.onSalary} onPremium={this.onPremium} onIncrease={this.onIncrease} onDelete={this.onDelete} employees={filteredEmployees} />

        <EmployeesAddForm onAddEmployees={this.onAddEmployees} employees={employees} />

      </div>
    );
  }
}

export default App;
