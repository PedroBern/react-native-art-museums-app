import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { connect } from "react-redux";

const SearchBarComponent = ({ dismiss, ...rest }) => {
  const [search, setSearch] = useState("");

  return (
    <Searchbar
      platform="android"
      placeholder="Search..."
      onChangeText={value => setSearch(value)}
      value={search}
      icon="arrow-left"
      onIconPress={dismiss}
      {...rest}
    />
  );
};

export default SearchBarComponent;
