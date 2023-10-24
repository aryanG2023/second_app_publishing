import { StyleSheet, Text, View ,Button } from "react-native";
import React, { useEffect, useState } from "react";
import { samestate } from "../redux/action";
import { useSelector ,useDispatch } from "react-redux";

export default function Header({navigation,item}) {
  const cartData = useSelector((state) => state.reducer);
  const dispatch = useDispatch()

  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize : 20, marginTop : 15, paddingHorizontal : 12}}>Electronics Store</Text>
      <Text
        style={{
          fontSize: 30,
          textAlign: "right",
          padding: 10,
          backgroundColor: "orange",
        }}
      >
        {cartItems}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'orange',
    flex: 1,
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
});
