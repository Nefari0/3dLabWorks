
import './App.css';
import firebase from 'firebase'

import Header from './Components/Header/Header'
import routes from './routes'
import { HashRouter } from 'react-router-dom'
import MessageBoard from './Components/UserMessages/MessageBoard';

function App() {

  return (
    <HashRouter>
    <div className="App">
        <Header/>
        <MessageBoard />

        {/* MOVED TO SAVE REAL ESTATE */}
        {/* <Message /> */}

        {routes}
    </div>
    </HashRouter>
  );
}

export default App;
