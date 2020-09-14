import React from 'react';
import Modal from './Modal';
import GridLayout from './GridLayout'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * { 
        margin: 0;
        padding: 0;
        font-family: sans-serif
     }
`

const App = () => {
  return (
  <>
    <GlobalStyle />
    <GridLayout />
  </>
  );
}

export default App;
