import './EmployeesListItem.scss';
import { Component } from 'react';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     salary: this.props.salary,
        // }
    }

    onChange = (e) => {
        this.props.onSalary(e.target.value, e.target.id);
    }


    render() {
        const { salary, name, increase, premium, id } = this.props;

        const classes = `${(increase ? 'increase' : '')} ${(premium ? 'premium' : '')}`;

        return (
            <li className={`employeesListItem ${classes}`}>
                <span onClick={this.props.onPremium} className='employeesListItem__name'>{name}</span>
                <input id={id} onChange={this.onChange} name='salary' type='text' className='employeesListItem__salary' value={salary + '$'} />

                <div className='employeesListItem__props'>
                    <button onClick={this.props.onDelete} className='btn-trash btn-sm' type='button'>
                        <i className='fas fa-trash'></i>
                    </button>
                    <button onClick={this.props.onIncrease} className='btn-cookie btn-sm' type='button'>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button className='btn-star btn-sm' type='button'>
                        <i className='fas fa-star'></i>
                    </button>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;