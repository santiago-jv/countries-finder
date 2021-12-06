import './App.css';
import { store } from './store/store';
import {Provider} from 'react-redux'
import CountriesRouter from './routes/CountriesRouter'; 

function App() {

	return (
		<Provider store={store}>
		
			<CountriesRouter/>
		
		</Provider>
	);
}

export default App;
