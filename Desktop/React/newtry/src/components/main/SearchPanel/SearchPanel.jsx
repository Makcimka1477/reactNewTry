import css from './SearchPanel.module.scss';

const SearchPanel = ({ onSearch }) => {

    return (
        <div className={css.searchPanel}>
            <input onChange={onSearch} className={css.searchPanelInput} placeholder="Найти сотрудника" type="text" />
        </div>
    );
}

export default SearchPanel;