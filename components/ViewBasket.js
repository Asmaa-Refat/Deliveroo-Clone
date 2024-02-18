import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';

const ViewBasket = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  //Defensive programming statement
  if(items.length === 0) return null;

  return (
    <View className='absolute w-full z-50 bottom-10'>
      <TouchableOpacity onPress={() => navigation.navigate('Basket')} className='bg-[#00CCBB] mx-5 p-3 rounded-lg flex-row items-center space-x-1'>
        <Text className='text-white text-lg font-extrabold bg-[#01A296] py-1 px-2'>{items.length}</Text>
        <Text className='text-white text-lg font-extrabold text-center flex-1'>View Basket</Text>
        <Text className='text-white text-lg font-extrabold'>
          <Currency quantity={basketTotal} currency='GBP' />
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ViewBasket