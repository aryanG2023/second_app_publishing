import React from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const PaymentSuccedded = ({navigation}) => {

    const paymentDone = () =>{
        navigation.navigate("Home")
    }

  return (
    <Modal
      transparent={true}
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.popupText}>Payment Succeeded!!</Text>
          <TouchableOpacity style={styles.closeButton} onPress={paymentDone}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#90EE90',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  popupText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaymentSuccedded;
