import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row pb-3 items-center space-x-2 mx-4">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 p-4 rounded-full bg-gray-300"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={33} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 mr-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and Cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100">
        {/* Categories Horizontal Row */}
        <Categories />

        {/* Featured Horizontal Rows */}
        <FeaturedRow
          id="1"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />
        <FeaturedRow
          id="12"
          title="Featured"
          description="Restaurant tonight!"
        />
        <FeaturedRow
          id="123"
          title="Tasty Discounts"
          description="Why not support tonight!"
        />
        <FeaturedRow
          id="1234"
          title="BOAH GE!"
          description="Why not BOAH it!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
