import React from 'react';
import logo from './images/logo.png';
import styled from 'styled-components';
import './style/';

const Page = styled.div`
  min-height: 100vh;
  background-color: var(--color--beige);
  color: var(--color--dark-purple);
  font-family: 'Roboto Regular';
  font-size: var(--font-size--regular);
  padding: 0 45px;
`;

const App = () => {
  return (
    <Page>
      <header>
        <img src={logo} alt="App logo" />

        <p>
          This is just the beginning.
        </p>
      </header>
    </Page>
  );
}

export default App;
