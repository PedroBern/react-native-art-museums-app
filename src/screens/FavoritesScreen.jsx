import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";
import { connect } from "react-redux";
import { Appbar, Paragraph } from "react-native-paper";

import FlatListBase from "../components/FlatListBase";
import EmptyList from "../components/EmptyList";
import {
  toggleFavoritesView,
  setVisibleIndex
} from "../store/actions/favorites";
import { setCurrentDetail } from "../store/actions/details";

const FavoritesScreen = ({
  records,
  grid,
  toggleFavoritesView,
  setVisibleIndex,
  visibleIndex,
  navigation,
  setCurrentDetail
}) => {
  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content title="Favorites" />
        <Appbar.Action
          icon={grid ? "view-agenda" : "view-grid"}
          onPress={toggleFavoritesView}
        />
      </Appbar.Header>
      <FlatListBase
        listKey={grid ? "favorites-grid-display" : "favorites-list-display"}
        setVisibleIndex={setVisibleIndex}
        visibleIndex={visibleIndex}
        setCurrentDetail={setCurrentDetail}
        records={records}
        grid={grid}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

const mapStateToProps = state => ({
  records: state.favorites.records,
  grid: state.favorites.grid,
  visibleIndex: state.favorites.visibleIndex
});

const mapDispatchToProps = dispatch => ({
  setCurrentDetail: (id, navigate) => dispatch(setCurrentDetail(id, navigate)),
  toggleFavoritesView: () => dispatch(toggleFavoritesView()),
  setVisibleIndex: ({ viewableItems, changed }) => {
    if (viewableItems[0]) {
      const firstViewable = changed.find(el => el.isViewable);
      if (firstViewable) {
        dispatch(
          setVisibleIndex(Math.min(viewableItems[0].index, firstViewable.index))
        );
      } else {
        dispatch(setVisibleIndex(viewableItems[0].index));
      }
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
