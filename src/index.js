import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeConfig from 'theme';
import SimpleReactLightbox from 'simple-react-lightbox';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ThemeConfig>
          <SimpleReactLightbox>
            <App />
          </SimpleReactLightbox>
        </ThemeConfig>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
