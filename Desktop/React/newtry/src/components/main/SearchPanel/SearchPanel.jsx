import css from './SearchPanel.module.scss';

const SearchPanel = ({onSearch}) => {

    return (
        <div className={css.searchPanel}>
            <input onChange={(e) => onSearch(e.target.value)} className={css.searchPanelInput} placeholder="Найти сотрудника" type="text" />
        </div>
    );
}

export default SearchPanel;