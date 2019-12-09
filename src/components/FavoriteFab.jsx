import React from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { FAB } from "react-native-paper";

import { toggleFavorite } from "../store/actions/favorites";

const FavoriteFab = ({
  record,
  favorites,
  toggleFavorite,
  state,
  ...other
}) => {
  return (
    <FAB
      icon="heart"
      onPress={() => toggleFavorite(record)}
      color={favorites.find(f => f.id === record.id) ? "#ff87cd" : "black"}
      {...other}
    />
  );
};

const mapStateToProps = state => ({
  favorites: state.favorites.records,
  state: state
});

export default connect(mapStateToProps, { toggleFavorite })(FavoriteFab);
