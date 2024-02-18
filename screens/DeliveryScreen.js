import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-white text-lg font-light">Order Help</Text>
        </View>

        <View className="bg-white rounded-md z-50 p-5 mx-5 my-2 shadow-md">
          <View className="flex-row">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>

          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />

          <Text className="mt-3 text-gray-500 text-xs">
            Your Order at {restaurant.title} is being prepared!
          </Text>
        </View>
      </SafeAreaView>

      <MapView className="flex-1 -mt-10 z-0" mapType="mutedStandard" />

      <SafeAreaView className=" bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 p-4 ml-5 rounded-full bg-gray-300"
        />
        <View className="flex-1">
          <Text className="text-lg"> Asmaa Refaat </Text>
          <Text className="text-gray-400"> Your Rider </Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold"> Call </Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
