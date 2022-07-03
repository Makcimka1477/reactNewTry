import css from './SearchPanel.module.scss';

const SearchPanel = ({ onSearch }) => {

    return (
        <div className={css.searchPanel}>
            <input tabIndex={1} onChange={onSearch} className={css.searchPanelInput} placeholder="Найти сотрудника" type="text" />
        </div>
    );
}

export default SearchPanel;