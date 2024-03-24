import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ThemeProvider } from '@emotion/react'
import theme from './mui/theme.js'
//components
import App from './App.jsx'
//styles
import './index.css'
import '../src/styles/font.css'

const client = new ApolloClient({
  uri:"https://api-us-west-2.hygraph.com/v2/cl5ex4xej1o9h01ug1jevguyc/master",
  cache:new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
