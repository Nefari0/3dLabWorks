
import './App.css';
import firebase from 'firebase'

import Header from './Components/Header/Header'
import routes from './routes'
import { HashRouter } from 'react-router-dom'
import MessageBoard from './Components/UserMessages/MessageBoard';
import Alert from './Components/Interactions/Alert/alert.component';

function App() {

  return (
    <HashRouter>
    <div className="App">
        <Header/>
        <MessageBoard />
        <Alert />

        {/* MOVED TO SAVE REAL ESTATE */}
        {/* <Message /> */}

        {routes}
    </div>
    </HashRouter>
  );
}

export default App;
