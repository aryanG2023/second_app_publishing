import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

import { Provider } from 'react-redux'
import store from './redux/store'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductWrapper from "./components/ProductWrapper";
import UserList from "./components/UserList";
import Payment from "./components/Payment";
import PaymentSuccedded from "./components/PaymentSuccedded";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ProductWrapper} options={{
            headerStyle : {
              backgroundColor : 'yellow'
            }
          }}/>
          <Stack.Screen name="User" component={UserList} options={{
            headerStyle : {
              backgroundColor : 'yellow'
            }
          }}/>
          <Stack.Screen name="Payment" component={Payment} options={{
            headerStyle : {
              backgroundColor : 'yellow'
            }
          }}/>
          <Stack.Screen name="PaymentSuccedded" component={PaymentSuccedded} options={{
            headerStyle : {
              backgroundColor : 'yellow'
            }
          }}/>


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
