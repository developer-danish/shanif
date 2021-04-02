import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <Wrapper>
       <Sidebar />
       <Main />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
`
