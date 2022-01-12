import {LocaleConfig, Calendar} from 'react-native-calendars';

import firestore from '@react-native-firebase/firestore';

import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

import Container from '../../components/Container';

import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { getCalendarDateString } from 'react-native-calendars/src/services';

export default SelectStartDate = (props) => {
  
  var now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()+1 > 9 ? now.getMonth() +1 : "0" + (now.getMonth() +1)
  const day = now.getDate() > 9 ? now.getDate() : "0" + (now.getDate())
  const current = year + "-" + month + "-" + day
  console.log(current)
  var [startDate, setStartDate] = useState("");
  const post = firestore().collection('Posts')
  
  const [markedDates, setMarkedDates] = React.useState(null);
  var [dates, setDates] = React.useState([""]);

  const { category, price, title, content} = props.route.params;
    ////<Text>{category} {price} {mainTitle}</Text>
    LocaleConfig.locales['fr'] = {
        monthNames: [
          'jan',
          'Février',
          'Mars',
          'Avril',
          'Mai',
          'Juin',
          'Juillet',
          'Août',
          'Septembre',
          'Octobre',
          'Novembre',
          'Décembre'
        ],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        today: "Aujourd'hui"
      };
      LocaleConfig.defaultLocale = 'fr';
      
      function addDates(date) {
        let obj = date.reduce(
          (c, v) =>
            Object.assign(c, {
            [v]: { selected: true },
            }),
          {},
        );
        console.log(obj);
        setMarkedDates(obj);
      }
        
        
        
  return (
      
    <Container>
      <View style={styles.titleMargin}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>종료 날짜</Text>

            <Text style={styles.subTitle}>종료되는 날짜를 정해주세요.</Text>
            <Text style={styles.subTitle}>{current}</Text>
        </View>

        <View style={styles.inputWrapper}>
            
        
        <Calendar
            minDate={current}
            onDayPress={day => {
                setStartDate(day["dateString"])
                console.log(startDate);
                addDates([day["dateString"]]);
            }}
            markedDates={markedDates}
        />

            <TouchableOpacity style={[{marginTop: 30, marginBottom: 100, alignItems: 'center', justifyContent: 'center'}]} onPress={() => { 
              if(startDate){
                post
                .add({
                  category: category,
                  price: price,
                  title: title,
                  content: content,
                  endDate: startDate,
                })
                .then(() => {
                    props.navigation.navigate("Home")
                    console.log('post added!');
                })
                .catch(error => {console.error(error);})
                

                //props.navigation.navigate('SelectStartTime', {category: category, price: price, title: title, content: content, startDate: startDate,  })
              }
              else{
                alert("선택해 주세요.")
              }
            }}>
                <Text>{startDate}</Text>
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