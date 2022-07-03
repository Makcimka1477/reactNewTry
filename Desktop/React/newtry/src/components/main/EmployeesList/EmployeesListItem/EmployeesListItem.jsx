import { Component } from 'react';
import './EmployeesListItem.scss';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        this.props.onSalary(e.target.value, e.target.id);
    }


    render() {
        const { salary, name, increase, premium, id } = this.props;

        const classes = `${(increase ? 'increase' : '')} ${(premium ? 'premium' : '')}`;

        return (
            <li className={`employeesListItem${(classes) ? ' ' + classes : ''}`}>
                <span onClick={(e) => {
                    if (e.button === 0) {
                        e.currentTarget.blur()
                    }
                    this.props.onIncreaseAndPremium(e);
                    }}
                     tabIndex='3'
                    //   onClick={this.props.onIncreaseAndPremium}
                      className='employeesListItem__name' data-toggle='premium'>{name}</span>
                <input id={id} onChange={this.onChange} name='salary' type='text' className='employeesListItem__salary' value={salary + '$'} />

                <div className='employeesListItem__props'>
                    <button onClick={this.props.onDelete} className='btn-trash btn-sm' type='button'>
                        <i className='fas fa-trash'></i>
                    </button>
                    <button onClick={this.props.onIncreaseAndPremium} data-toggle='increase' className='btn-cookie btn-sm' type='button'>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button className='btn-star btn-sm' type='button' tabIndex="-1">
                        <i className='fas fa-star'></i>
                    </button>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;