import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import theme from './mui/theme.js'
//components
import App from './App.jsx'
//styles
import './index.css'
import '../src/styles/font.css'

const client = new ApolloClient({
  uri:import.meta.env.VITE_APP_GRAPHCMS_URI,
  cache:new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
