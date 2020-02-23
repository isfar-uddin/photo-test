import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
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
                  <Route path="/upload" component={UploadPage} />
                  <Route path="/catalog" component={CatalogPage} />
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
