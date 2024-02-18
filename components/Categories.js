import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* CategoryCards */}
      <CategoryCard imgURL="https://links.papareact.com/wru" title="Asmaa1" />
      <CategoryCard imgURL="https://links.papareact.com/wru" title="Asmaa2" />
      <CategoryCard imgURL="https://links.papareact.com/wru" title="Asmaa3" />
      <CategoryCard imgURL="https://links.papareact.com/wru" title="Asmaa3" />
      <CategoryCard imgURL="https://links.papareact.com/wru" title="Asmaa3" />
      <CategoryCard imgURL="https://links.papareact.com/wru" title="Asmaa3" />
    </ScrollView>
  );
};

export default Categories;
