
import './App.css';
import firebase from 'firebase'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setAlert } from './ducks/interactionsReducer';

import Header from './Components/Header/Header'
import routes from './routes'
import { HashRouter } from 'react-router-dom'
import MessageBoard from './Components/UserMessages/MessageBoard';
import Alert from './Components/Interactions/Alert/alert.component';

function App(props) {

  const { alert } = props.userInteractions

  return (
    <HashRouter>
    <div className="App">
        <Header/>
        <MessageBoard />
        {alert.length > 0 && <Alert alert={alert} />}

        {/* MOVED TO SAVE REAL ESTATE */}
        {/* <Message /> */}

        {routes}
    </div>
    </HashRouter>
  );
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, {setAlert})(App)

// export default App;
