
import './App.css';
import firebase from 'firebase'

import Header from './Components/Header/Header'
import routes from './routes'
import { HashRouter } from 'react-router-dom'
// import MessageBoard from './Components/UserMessages/MessageBoard';
import Message from './Components/Messages/Message'
import Loading from './Components/Loading/Loading';
import { isLoading } from './ducks/uiReducer';
import { connect } from 'react-redux';

function App(props) {

  const { isLoading } = props.ui

  return (
    <HashRouter>
      <div className="App">
        {isLoading && <Loading/>}
        <Header/>
        {/* <MessageBoard /> */}
        <Message />
        {routes}
      </div>
    </HashRouter>
  );
}

function mapStateToProps(reduxState){
    return reduxState
}

export default connect(mapStateToProps, { isLoading })(App)
// export default App;
