import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
import UploadPage from './components/uploadPage';
import CatalogPage from './components/catalogPage';

function App() {
    return (
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route exact path="/upload" component={UploadPage} />
                  <Route exact path="/catalog" component={CatalogPage} />
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
