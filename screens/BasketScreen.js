import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { useMemo } from "react";
import { XCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item); // this line is so concise 🤎
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className=" flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5  bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center"> Basket 🧺 </Text>
            <Text className="text-gray-400 text-center">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-4 right-4"
          >
            <XCircleIcon color="#00CCBB" height={35} width={35} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1"> Deliver in 50-75 min </Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]"> Change </Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row bg-white items-center space-x-3 px-5 py-2"
            >
              <Text className="text-[#00CCBB]">{items.length} x</Text>
              <Image
                source={{ uri: items[0]?.imgURL }}
                className="w-11 h-11 rounded-full"
              />
              <Text className="flex-1 text-s">{items[0].name}</Text>
              <Text className="text-gray-600">
                <Currency quantity={items[0]?.price} currency="GBP" />
              </Text>

              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text className="text-[#00CCBB] text-xs"> Remove </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="bg-white p-5 mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400"> Subtotal </Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400"> Delivery Fee </Text>
            <Text className="text-gray-400">
              <Currency quantity={5.99} currency="GBP" />
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text> Order Total </Text>
            <Text className="font-extrabold">
              <Currency quantity={basketTotal + 5.99} currency="GBP" />
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PreparingOrder")}
            className="bg-[#00CCBB] rounded-lg p-3"
          >
            <Text className="text-center text-white text-lg font-bold">
              {" "}
              Place Order{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

// what use memo is doing
// let's assume that
// const items = [
//   { id: 1, name: "Item 1" },
//   { id: 2, name: "Item 2" },
//   { id: 1, name: "Item 3" },
//   { id: 3, name: "Item 4" },
//   { id: 2, name: "Item 5" }
// ];

// After running the reduce() operation, the results object might look like this:

// {
//   1: [
//     { id: 1, name: "Item 1" },
//     { id: 1, name: "Item 3" }
//   ],
//   2: [
//     { id: 2, name: "Item 2" },
//     { id: 2, name: "Item 5" }
//   ],
//   3: [
//     { id: 3, name: "Item 4" }
//   ]
// }
