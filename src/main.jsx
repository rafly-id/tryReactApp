import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//try
// import Counter from './try/useState.jsx'
// import MyComponent from './try/useEffect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Counter />  */}
    {/* <MyComponent /> */}
  </StrictMode>,
)
