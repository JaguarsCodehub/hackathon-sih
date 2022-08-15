import { View, Text, FlatList, TextInput } from "react-native";
import React, { useState } from "react";
import { SearchBar } from "../../components";
import { COLORS } from "../../constants";

const data = [
  { id: "1", name: "Jyotindra" },
  { id: "2", name: "Karuna" },
  { id: "3", name: "Kaustubh" },
  { id: "4", name: "Swadha" },
];

const Search = () => {
  const [dataFromState, setData] = useState(data);

  const item = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  const searchName = (input) => {
    let data = dataFromState;
    let searchData = data.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setData(searchData);
  };

  return (
    <View
      style={{
        marginTop: 60,
      }}
    >
      {/* <SearchBar /> */}
      <View style={{ backgroundColor: COLORS.green }}>
        <TextInput
          onChangeText={(input) => {
            searchName(input);
          }}
          style={{
            fontSize: 16,
          }}
        />
      </View>
      <FlatList
        data={dataFromState}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Search;
