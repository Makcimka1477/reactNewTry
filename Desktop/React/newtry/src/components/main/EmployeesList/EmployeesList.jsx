import css from './EmployeesList.module.scss';
import EmployeesListItem from './EmployeesListItem/EmployeesListItem';
const EmployeesList = ({ employees, onDelete, onPremium, onIncrease, onSalary }) => {


    const elements = employees.map(({name, salary, increase, premium, id }) => {
        // ...el Можно деструктурировать элемент и все пропсы вставятся сами.
        return <EmployeesListItem id={id} onSalary={onSalary}  onPremium={() => onPremium(id)} onIncrease={() => onIncrease(id)} onDelete={() => onDelete(id)} name={name} salary={salary} key={name} increase={increase} premium={premium}/>;
    })


    return (
        <ul className={css.employeesList}>
            {elements}
        </ul>
    );
}

export default EmployeesList;