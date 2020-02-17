import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import UploadScreen from './components/uploadScreen';

function App() {
    return (
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route exact path="/" component={UploadScreen} />
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
