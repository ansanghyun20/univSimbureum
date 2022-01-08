import {LocaleConfig, Calendar} from 'react-native-calendars';


import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

import Container from '../../components/Container';

import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
export default SelectStartTime = (props) => {
  
  const [time, setTime] = useState("");
  
  const [timeFocus, setTimeFocus] = useState("");
  
  const { category, price, title, content, startDate} = props.route.params;

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate)
  };




  return (
      
    <Container>
      <View style={styles.titleMargin}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>종료 시간</Text>

            <Text style={styles.subTitle}>종료 시간을 선택해 주세요.</Text>

            
        </View>
      
        <RNDateTimePicker 
          display="spinner"
          value={date}
          onChange={onChange}
          mode='time'
          is24Hour={true}
          />

          <Text>{category}, {price}, {title}, {content}, {startDate}</Text>
        <View style={styles.inputWrapper}>
        
            <TouchableOpacity style={[{marginTop: 30, marginBottom: 100, alignItems: 'center', justifyContent: 'center'}]} onPress={() => { 
              if(time){
                props.navigation.navigate('', {category: category, price: price, title: title, content: content, startDate: startDate, })
                alert("완료")
              }
              else{
                console.log(category, price, title, content)
                alert("최소 한글자 이상 작성해 주세요.")
              }
            }}>
            <Image
              style = {styles.item}
              source={require('../../assets/img/Ok.png')}
              
            />
            </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};



const styles = StyleSheet.create({
    titleMargin: {
        marginTop: "5%"
      },
      titleWrapper: {
        marginTop: Platform.OS === "ios" ? "10%" : "5%",
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
      },
      title: {
        fontFamily: 'Roboto-Bold',
        color: 'black',
        fontSize: 24,
        padding: 10,
      },
      subTitle: {
        marginBottom: 0,
        fontFamily: 'Roboto',
        color: 'black',
        fontSize: 18,
        padding: 10,
      },
    inputWrapper: {
      paddingHorizontal: 30,
      marginBottom: 10,
    },
    input: {
      backgroundColor: '#fff',
      marginBottom: 12,
    },
    buttonWrapper: {
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
      fontSize: 16,
      fontWeight: '600',
    },
    textButtonText: {
      color: "#53B77C",
      fontSize: 16,
      fontWeight: "600",
    },
    focusedInput: {
        backgroundColor: "#fff",
        marginBottom: 12,
        fontWeight: "600",
        borderRadius: 7,
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
      item: {
        marginTop: "10%",
        alignItems: "center",
        justifyContent: "center",
        
        width: 50, 
        height: 50, 
      },
  });
  
  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        height: 50, 
        width: 300, 
        color: '#000000',
        borderColor: '#000000', 
        
        borderRadius: 12,
        padding: 10
    },
    inputAndroid: {
        fontSize: 16,
        height: 50, 
        width: 300, 
        color: '#000000',
        borderColor: '#000000', 
        
        borderRadius: 12,
        padding: 10
    },

  });