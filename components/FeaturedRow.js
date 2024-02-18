import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=2&limit=20"
        );
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <View className="flex-row justify-between items-center mt-4 mx-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs px-4 pb-3 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {images.map((image) => (
          <RestaurantCard
            key={image.id}
            id={image.id}
            imgURL={image.download_url}
            title={image.author}
            rating={4.0}
            genre="sea food"
            address="mamal reass"
            short_description="It is a long established fact that a reader will be distracted by the readable content"
          />
        ))}
      </ScrollView>
    </>
  );
};

export default FeaturedRow;
