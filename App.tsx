import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import DataProvider  from './contexts/dataProvider';
import Example from './components/example'

export default function App() {
  return (
    <DataProvider>
      <Content>
        <Example/>
        <StatusBar style="auto" />
      </Content>
    </DataProvider>
  );
}

const Content = styled.div`
  display: flex;
  height: 100vh;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;