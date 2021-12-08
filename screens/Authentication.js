import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Styled from 'styled-components/native';

export default function Authentication(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>로그인 회원가입</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType='email-address'
        autoCompleteType='off'
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <View style={styles.buttons}>
        <Button title="로그인" onPress={() => props.signin(email, password)} />
        <Button title="회원가입" onPress={() => props.createUser(email, password)} />
        
      </View>
      <View style={styles.buttons}>
      <Button title="비밀번호 찾기" onPress={() => props.findPassword(email)} />
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    marginBottom: 30,
    fontFamily: 'BMDoHyeon',
  },
  input: {
    width: 300,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6d69c3',
    marginVertical: 10,
    padding: 15,
    fontFamily: 'BMDoHyeon',
    
  },
  buttons: {
    width: 150,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontFamily: 'BMDoHyeon',
    
  },
});