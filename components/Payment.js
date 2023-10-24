import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet ,Alert} from 'react-native';

const Payment = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');

  const cancelButton = () =>{
    navigation.navigate("Home")
  }

  const handlePayment = () => {
    // Check if any field is empty
    if (!cardNumber || !nameOnCard || !expirationDate || !cvv) {
      Alert.alert('Error', 'All fields are required.');
    }else{
        navigation.navigate('PaymentSuccedded')
    }
    
}

  return (
    <View style={styles.container}>
      <View style={styles.paymentForm}>
        <Text style={styles.title}>Payment Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          placeholder="Name on Card"
          value={nameOnCard}
          onChangeText={(text) => setNameOnCard(text)}
        />
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Expiration Date"
            value={expirationDate}
            onChangeText={(text) => setExpirationDate(text)}
            keyboardType='numeric'
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={cvv}
            onChangeText={(text) => setCVV(text)}
            keyboardType='numeric'
          />
        </View>
        <Button
          title="Make Payment"
          onPress={handlePayment}
        />
        <Button
          title="Close"
          color="red"
          onPress={cancelButton}

        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentForm: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Payment;
