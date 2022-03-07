import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeConfig from 'theme';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
