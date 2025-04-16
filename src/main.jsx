import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { legacy_createStore as createStore } from 'redux'
import { bookReducer } from './reducers/index.js'
import { Provider } from 'react-redux'

const store = createStore(bookReducer);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
