import React, { useState } from "react";
import { SearchBar, Divider } from "react-native-elements";
import { View, StyleSheet } from "react-native";

const SearchBarComponent = props => {
  const [search, setSearch] = useState("");

  return (
    <View>
      <SearchBar
        containerStyle={styles.search}
        platform="android"
        placeholder="Type Here..."
        onChangeText={value => setSearch(value)}
        value={search}
      />
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    paddingLeft: 8,
    paddingRight: 8
  }
});

export default SearchBarComponent;
