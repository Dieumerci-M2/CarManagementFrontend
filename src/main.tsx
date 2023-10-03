import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ContextProvider from './Context/Context.tsx'
/**
 * As we can see, we're wrapping the main App component in ContextProvider
 * so that the latter is the only source of truth for all these descendants,
 * since the data flows in a single direction.
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
      <App />
  </ContextProvider>
)
