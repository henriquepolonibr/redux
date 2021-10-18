import Home from './components/Header'
import Body from './components/Body'
import OtherComponent from './components/OtherComponent'
import { useSelector, useDispatch } from 'react-redux';
import { toggleLogged } from './actions';
import './App.css';

function App() {
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(toggleLogged())}>{isLogged ? 'Change to Public' : 'Change to Private'}</button>
      <h1>Teste</h1>
      <Home />
      <Body />
      <OtherComponent />
    </div>
  );
}

export default App;
