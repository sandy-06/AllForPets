import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

//import StoreContainer from './components/StoreContainer'

import Landing from './pages/Homepage';
import Login from './components/Login';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import NavTabs from './components/NavTabs';
import SignUp from './components/SignUp'
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <NavTabs />
        <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/Login' element={<Login/>} />
            <Route path='/SignUp' element={<SignUp/>} />
            <Route path='/Footer' element={<Footer/>} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Routes>
        </Router>
    </ApolloProvider>
  );
}

export default App;

