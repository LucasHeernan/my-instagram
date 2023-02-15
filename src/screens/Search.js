import React from "react";
import { View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";

const Search = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <SearchBar />
      {/* </ScrollView> */}
    </View>
  )
}

export default Search;