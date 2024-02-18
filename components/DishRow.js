import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBasketItemsWithId,
  removeFromBasket,
  addToBasket,
} from "../features/basketSlice";

const DishRow = ({ id, name, imgURL, price, short_description }) => {
  const [toggle, setToggle] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, imgURL, price, short_description }));
  };

  const removeItemFromBasket = () => {
    //defensive programming statement
    if (items.length <= 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <View className="border border-gray-100">
      <TouchableOpacity
        onPress={() => {
          setToggle(!toggle);
        }}
        className=" p-4"
      >
        <View className="flex-row">
          <View className="flex-1 pr-3 ">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{short_description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="GBP" />
            </Text>
          </View>
          <View>
            <Image source={{ uri: imgURL }} className="h-20 w-20" />
          </View>
        </View>
      </TouchableOpacity>

      {toggle && (
        <View className="flex-row items-center space-x-2 p-3">
          <TouchableOpacity
            disabled={!items.length}
            onPress={removeItemFromBasket}
          >
            <MinusCircleIcon
              color={items.length > 0 ? "#00CCBB" : "gray"}
              size={35}
            />
          </TouchableOpacity>

          <Text> {items.length} </Text>

          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon color="#00CCBB" size={35} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DishRow;
