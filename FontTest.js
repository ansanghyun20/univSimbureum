import * as React from 'react';
import { Platform } from 'react-native';
import Styled from 'styled-components/native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #F5FCFF;
`;
const Welcome = Styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  font-family: 'BMDoHyeon'; 
`;
const Instructions = Styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5px;
  font-family: 'BMDoHyeon"; 
`;

interface Props {}
interface State {}

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Welcome>Welcome to React Native!</Welcome>
        <Instructions>To get started, edit App.js</Instructions>
        <Instructions>{instructions}</Instructions>
      </Container>
      
    );
  }
}