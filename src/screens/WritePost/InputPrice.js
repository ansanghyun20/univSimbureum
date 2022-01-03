import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import Container from '../../components/Container';

import RNPickerSelect from 'react-native-picker-select';


export default InputPrice = (props ) => {

  
  const [price, setPrice] = useState("");
  
  const { category } = props.route.params;


  useEffect(()=>{ 
    console.log(price);
  }, [price])

  return (
    <Container>
      <View style={styles.titleMargin}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{category}</Text>
          <Text style={styles.subTitle}>{category}의 원하는 가격을 선택해 주세요.</Text>
        </View>

        

        <View style={styles.inputWrapper}>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{ width: 250 }}>

              <RNPickerSelect
                
                onValueChange={(value) => {setPrice(value)}}
                fixAndroidTouchableBug={true}
                items={[
                  { label: '1000원', value: '1000' },
                  { label: '2000원', value: '2000' },
                  { label: '3000원', value: '3000' },
                  { label: '4000원', value: '4000' },
                  { label: '5000원', value: '5000' },
                ]}
                style={pickerSelectStyles}
              />
              
          </View>
        </View>
          


        </View>

        <View>
          <TouchableOpacity style={[{marginTop: 30, marginBottom: 100, alignItems: 'center', justifyContent: 'center'}]} onPress={() => { 
              if(price){
                props.navigation.navigate('WriteTitle', {category: category,price: price,})  
              }
              else{
                alert("선택해주세요.")
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
    marginTop: "20%"
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
    marginBottom: 20,
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
      width: 250, 
      color: '#000000',
      borderColor: '#000000', 
      borderWidth: 1,
      borderRadius: 12,
      padding: 10
  },
  inputAndroid: {
      fontSize: 16,
      height: 50, 
      width: 250, 
      color: '#000000',
      borderColor: '#000000', 
      borderWidth: 1,
      borderRadius: 12,
      padding: 10
  },
});