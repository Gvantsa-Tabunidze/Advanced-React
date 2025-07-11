import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './graphQL/client.ts'
import { BrowserRouter } from 'react-router-dom'
import './scss/main.scss'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)
