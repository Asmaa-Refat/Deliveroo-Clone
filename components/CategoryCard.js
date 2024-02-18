import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const CategoryCard = ({ imgURL, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative ">
      <Image
        source={{
          uri: "https://picsum.photos/200/200",
        }}
        className="h-20 w-20 bg-slate-300 rounded"
      />
      <Text className="absolute bottom-1 font-bold left-1 text-white">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
