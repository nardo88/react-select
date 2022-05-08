import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Select from './components/Select';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  
`

function App() {
  const [value, setValue] = useState({id: 'React', title: 'React'})

  const options = [
    {id: 'React', title: 'React'},
    {id: 'TypeScript', title: 'TypeScript'},
    {id: 'NodeJS', title: 'NodeJS'},
    {id: 'Express', title: 'Express'},
    {id: 'JavaScript', title: 'JavaScript'},
    {id: 'MongoDB', title: 'MongoDB'},
    {id: 'Docker', title: 'Docker'},
    {id: 'SASS (SCSS)', title: 'SASS (SCSS)'},
    {id: 'Angular', title: 'Angular'},
    {id: 'Vue', title: 'Vue'},
  ]
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Select 
          options={options} 
          value={value} 
          onChange={setValue} 
          label="Выберите технологию"
        />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
`
