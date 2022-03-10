import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeConfig from 'theme';
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeConfig>
        <SimpleReactLightbox>
          <App />
        </SimpleReactLightbox>
      </ThemeConfig>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
