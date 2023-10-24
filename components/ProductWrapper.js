import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    Image,
    StatusBar
  } from "react-native";
  import React from "react";
  import Header from "./Header";
  import Product from "./Product";
  import AsyncStorage from "@react-native-async-storage/async-storage";
    
  export default function ProductWrapper({navigation}) {
    const Products = [
      {
        id: 1,
        name: "Samsung",
        color: "white",
        price: "30,000",
        image:
          "https://media.istockphoto.com/id/1309147753/vector/realistic-mobile-phone-mockup-template-isolated-stock-vector.jpg?s=612x612&w=0&k=20&c=llG65plOEQMKpWq0e04XRls2mufZa3mhh-pEnz5iGbU=",
      },
      {
        id: 2,
        name: "Apple",
        color: "white",
        price: "1,30,000",
        image:
          "https://media.istockphoto.com/id/1309147753/vector/realistic-mobile-phone-mockup-template-isolated-stock-vector.jpg?s=612x612&w=0&k=20&c=llG65plOEQMKpWq0e04XRls2mufZa3mhh-pEnz5iGbU=",
      },
      {
        id: 3,
        name: "Xioami",
        color: "white",
        price: "18,000",
        image:
          "https://media.istockphoto.com/id/1309147753/vector/realistic-mobile-phone-mockup-template-isolated-stock-vector.jpg?s=612x612&w=0&k=20&c=llG65plOEQMKpWq0e04XRls2mufZa3mhh-pEnz5iGbU=",
      },
      {
        id: 4,
        name: "Nothing",
        color: "white",
        price: "50,000",
        image:
          "https://media.istockphoto.com/id/1309147753/vector/realistic-mobile-phone-mockup-template-isolated-stock-vector.jpg?s=612x612&w=0&k=20&c=llG65plOEQMKpWq0e04XRls2mufZa3mhh-pEnz5iGbU=",
      },
    ];
  

    // AsyncStorage.setItem('PRODUCTS',JSON.stringify(Products))
    // .then(()=>{
    //   console.log("Data is stored ")
    // })
    // .catch(err =>{
    //   console.error('Error retreiving data ',err)
    // })

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='yellow' barStyle={"dark-content"}  />
        <ScrollView>
          <Header navigation={navigation} item={Products} />
          {Products.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container : {
      flex : 1,
      marginBottom : 2,
      backgroundColor : 'white'
    }
  })
  