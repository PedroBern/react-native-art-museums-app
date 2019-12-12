import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const SearchBarComponent = props => {
  const [search, setSearch] = useState("");

  return (
    <Searchbar
      style={styles.root}
      inputStyle={styles.input}
      platform="android"
      placeholder="Search..."
      placeholderTextColor="white"
      onChangeText={value => setSearch(value)}
      value={search}
      iconColor="white"
    />
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#212121",
    marginBottom: 8
  },
  input: {
    color: "white"
  }
});

export default SearchBarComponent;
