import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import ViewBasket from "../components/ViewBasket";
import { setRestaurant } from "../features/restaurantSlice";
import { useDispatch } from "react-redux";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [dishes, setdishes] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=4&limit=10"
        );
        const data = await response.json();
        setdishes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    dispatch(
      setRestaurant({
        id,
        imgURL,
        title,
        rating,
        genre,
        address,
        short_description,
      })
    );
  }, []);

  const {
    params: { id, imgURL, title, rating, genre, address, short_description },
  } = useRoute();

  return (
    <>
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imgURL }}
            className="h-56 w-full bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute bg-gray-100 top-14 left-5 p-2 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="bg-white pb-36">
          <View className="ml-4 mt-4">
            <Text className="text-3xl font-bold mb-1">{title}</Text>
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-600"> {rating} </Text>. {genre}
              </Text>
              <MapPinIcon color="gray" size={22} opacity={0.4} />
              <Text className="text-xs text-gray-500">
                {" "}
                Nearby . {address}{" "}
              </Text>
            </View>
            <Text className="text-gray-400 mt-2 mb-4 pr-3">
              {short_description}
            </Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-200">
            <QuestionMarkCircleIcon color="gray" opacity={0.5} size={22} />
            <Text className="pl-2 flex-1 font-bold">
              {" "}
              Have a food allergy?{" "}
            </Text>
            <ChevronRightIcon size={20} color="#00CCBB" />
          </TouchableOpacity>

          <View className="bg-gray-200">
            <Text className="font-bold text-xl pt-6 pl-4 pb-3">Menu</Text>
          </View>

          {dishes.map((dish) => (
            <DishRow
              key={dish.id}
              id={dish.id}
              name={dish.author}
              imgURL={dish.download_url}
              price={dish.width}
              short_description="It is a long established fact that a reader will be distracted by the readable content"
            />
          ))}
        </View>
      </ScrollView>

      <ViewBasket />
    </>
  );
};

export default RestaurantScreen;
