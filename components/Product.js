import { StyleSheet, Text, View ,Button,Image} from 'react-native'
import React, { useEffect ,useState} from 'react'
import { addtoCart , removefromcart} from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Product(props) {
  const navigation = useNavigation()
  const item = props.item
  const dispatch = useDispatch()
  const cardItems = useSelector((state)=>state.reducer)
  const [isadded,setisAdded] = useState(false)
  
  const handleAddToCart = (item) =>{
    // console.warn("called",item)
    dispatch(addtoCart(item))
    navigation.navigate("User",{item})
    // console.warn(item)
  }
  
  const handleRemoveFromCart = (item) =>{
    dispatch(removefromcart(item.id))
  }

  useEffect(()=>{
    let result = cardItems.filter((element)=>{
      return element.id === item.id
    })
    if(result.length) {
      setisAdded(true)
    }else{
      setisAdded(false)
    }

  },[cardItems])

  return (
    <View style={{alignItems:'center',borderBottomColor:'orange',borderBottomWidth:2,padding:10}} key={item.id}>
    <Text style={{fontSize:24}}>{item.name}</Text>
    <Text style={{fontSize:24}}>{item.color}</Text>
    <Text style={{fontSize:24}}>{item.price}</Text>
    <Image style={{flex : 1,width:200,height:200}} source={{uri:item.image}}/>
    {
      isadded ? 
      <Button title='remove from cart' onPress={()=>handleRemoveFromCart(item)}/>
      : 
      <Button title='add to cart' onPress={()=>handleAddToCart(item)}/>
    }
  </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})

// 1107