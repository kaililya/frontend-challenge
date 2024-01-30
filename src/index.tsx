import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { setupStore} from './store/store';

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
if (!window.location.pathname.includes('/frontend-challenge')) {
  window.history.replaceState(
    '',
    '',
    '/frontend-challenge' + window.location.pathname
  );
};
root.render(
  <Router basename='/frontend-challenge/'>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);
reportWebVitals();
