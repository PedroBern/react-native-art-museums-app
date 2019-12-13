import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { TextInput } from "react-native";
import { connect } from "react-redux";

const SearchBarComponent = ({ dismiss, onSubmit, ...rest }) => {
  const [search, setSearch] = useState("");

  return (
    <Searchbar
      platform="android"
      placeholder="Search..."
      onChangeText={value => setSearch(value)}
      value={search}
      icon="arrow-left"
      onIconPress={dismiss}
      autoFocus
      selectionColor="#9e9e9e"
      blurOnSubmit
      onSubmitEditing={() => {
        const processed = search.trim();
        if (processed.length > 0) onSubmit(processed);
      }}
      {...rest}
    />
  );
};

export default SearchBarComponent;
