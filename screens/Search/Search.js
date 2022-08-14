import { View, Text } from "react-native";
import React from "react";
import { SearchBar } from "../../components";

const Search = () => {
  return (
    <View
      style={{
        marginTop: 60,
      }}
    >
      <SearchBar />
    </View>
  );
};

export default Search;
