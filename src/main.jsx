import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import ReactDOM from 'react-dom/client'
//components
import App from './App.jsx'
//styles
import './index.css'

const client = new ApolloClient({
  uri:"https://api-us-west-2.hygraph.com/v2/cl5ex4xej1o9h01ug1jevguyc/master",
  cache:new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
