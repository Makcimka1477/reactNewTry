import css from './EmployeesList.module.scss';

import EmployeesListItem from './EmployeesListItem/EmployeesListItem';
const EmployeesList = ({ employees, onDelete, onIncreaseAndPremium, onSalary }) => {

    const elements = employees.map(({ name, salary, increase, premium, id }) => {
        // ...el Можно деструктурировать элемент и все пропсы вставятся сами.
        return <EmployeesListItem id={id} onSalary={onSalary} onIncreaseAndPremium={(e) => onIncreaseAndPremium(id, e.currentTarget.getAttribute('data-toggle'))}
            onDelete={() => onDelete(id)}
            name={name} salary={salary} 
            increase={increase} premium={premium}
            key={id} />;
    })

    return (
        <ul className={css.employeesList}>
            {(elements.length > 0) ? elements : <div className={css.noEmployees}><div className={css.noEmployees__elem}>Нет сотрудников</div></div>}
        </ul>
    );
}

export default EmployeesList;