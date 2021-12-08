import React, { useState, setState } from 'react';
import { Platform, SafeAreaView, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, useColorScheme, Text, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default LoginScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [idFocus, setidFocus] = useState(false);
  const [pwFocus, setpwFocus] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1}} keyboardVerticalOffset={-200} behavior="padding">
        <ScrollView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

          <View style={styles.appTitle}>
            <FontAwesomeIcon name="user-circle-o" size={100} color="#F3F2F2" />
            <Text style={styles.title}>Welcome Back</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={idFocus ? styles.focusedInput : styles.input}
              placeholder="학번 입력"
              value={id}
              autoCorrect={false}
              left={<TextInput.Icon name={() => <AntDesignIcon name="user" size={20} color={idFocus ? "#53B77C" : "#999899"} />} />}
              underlineColor='transparent'
              activeUnderlineColor="transparent"
              selectionColor="#292929"
              onFocus={() => {setidFocus(true)}}
              onBlur={() => {setidFocus(false)}}
              theme={{ colors: {text: idFocus ? "#53B77C" : "#999899" } }}
              onChangeText={text => setId(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              style={pwFocus ? styles.focusedInput : styles.input}
              placeholder="비밀번호 입력"
              value={pw}
              autoCorrect={false}
              secureTextEntry={true}
              left={<TextInput.Icon name={() => <AntDesignIcon name="lock" size={20} color={pwFocus ? "#53B77C" : "#999899"} />} />}
              underlineColor='transparent'
              activeUnderlineColor="transparent"
              selectionColor="#292929"
              onFocus={() => {setpwFocus(true)}}
              onBlur={() => {setpwFocus(false)}}
              theme={{ colors: {text: pwFocus ? "#53B77C" : "#999899" } }}
              onChangeText={text => setPw(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={{alignSelf: 'flex-end', marginBottom: 35}}>
              <Text style={styles.textButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.squareButton, {marginBottom: 35}]}>
              <Text style={styles.squareButtonText}>LOGIN</Text>
            </TouchableOpacity>
          
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 15}}>Don't have account? </Text>
              <TouchableOpacity>
                <Text style={styles.textButtonText}>Create a new accont</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appTitle: {
    alignItems: 'center',
    marginTop: Platform.OS === "ios" ? 80 : 40,
    marginBottom: 35,
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
    padding: 10,
  },
  inputContainer: {
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
  },
  focusedInput: {
    backgroundColor: "#fff",
    fontWeight: "700",
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {width: 6, height: 3},
      },
      android: {
        elevation: 6,
      },
    })
  },
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 35,
  },
  squareButton: {
    backgroundColor: '#53B77C',
    paddingVertical: 13,
    alignItems: 'center',
    borderRadius: 5,
  },
  squareButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
  textButtonText: {
    color: "#53B77C",
    fontSize: 15,
    fontWeight: "600",
  },
});