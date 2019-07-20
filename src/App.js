import React from 'react';
import Layout from './components/Layout/Layout'
import Burgerbuilder from './containers/burgerbuilder/burgerbuilder'
import './App.css';

function App() {
  return (
    <div >
      <Layout>
        <Burgerbuilder/>
      </Layout>
    </div>
  );
}

export default App;
