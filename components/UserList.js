import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function UserList({ route,navigation }) {

  const handlePayment = () =>{
    navigation.navigate("Payment")
  }

  const { item } = route.params;
  const itemsList = useSelector((state) => state.reducer);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='yellow' barStyle={"dark-content"}  />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.color}</Text>
        <Text style={styles.description}>{item.price}</Text>
        <TouchableOpacity style={styles.buyButton} onPress={handlePayment}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  contentContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  name: {
    fontSize: 24,
    marginTop: 10,
  },
  description: {
    fontSize: 24,
    marginTop: 10,
  },
  buyButton: {
    marginTop: 20,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buyButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 50,
  },
});

// {/* <Text style={{fontSize:30,fontWeight : "bold"}}> */}

// </Text>
