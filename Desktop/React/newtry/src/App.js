import './App.scss';
import Header from './components/Header/Header';
// import Sidebar from './Sidebar/Sidebar'
// import Content from './Content/Content';


function App() {
  const state = {
    employees: [
      {name: 'John C.', salary: 800, premium: false},
      {name: 'Alex M.', salary: 3000, premium: true},
      {name: 'Carl W.', salary: 5000, premium: false},
    ]
  };
  const withPremium = state.employees.reduce((acc, n) => (n.premium) ? acc + 1 : acc, 0);

  return (
    <div className="App">
        <Header withPremium={withPremium} employeesCount={state.employees.length}/>

        <i class="fa-solid fa-trash"></i>
        <i class="fa-regular fa-cookie"></i>
        <i class="fa-regular fa-star"></i>
    </div>
  );
}

export default App;
