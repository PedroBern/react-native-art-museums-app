import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";
import { connect } from "react-redux";
import { Appbar, Paragraph, ToggleButton } from "react-native-paper";

import FeedItem, { CARD_OFFSET } from "../components/FeedItem";
import ListEmpty from "../components/ListEmpty";
import ListFooter from "../components/ListFooter";
import Spinner from "../components/Spinner";
import {
  loadFeed,
  toggleFeedView,
  setVisibleIndex,
  refreshFeed
} from "../store/actions/feed";

const width = Dimensions.get("window").width;

const FeedScreen = ({
  loadFeed,
  refreshFeed,
  refreshing,
  records,
  loading,
  error,
  grid,
  visibleIndex,
  toggleFeedView,
  setVisibleIndex
}) => {
  const flatList = useRef(null);

  useEffect(() => {
    if (records.length === 0) loadFeed();
  }, []);

  useEffect(() => {
    if (flatList.current && visibleIndex > 0) {
      try {
        const index = grid
          ? Math.max((visibleIndex - 3 - (visibleIndex % 3)) / 3, 0)
          : Math.max(visibleIndex - 1, 0);
        flatList.current.scrollToIndex({
          index,
          viewPosition: 1,
          animated: false
        });
      } catch {}
    }
  }, [grid]);

  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content title="Most recent updates" />
        <Appbar.Action
          icon={grid ? "view-agenda" : "view-grid"}
          onPress={toggleFeedView}
        />
      </Appbar.Header>
      <FlatList
        ref={flatList}
        key={grid ? "grid-feed-list" : "regular-feed-list"}
        data={records}
        numColumns={grid ? 3 : 1}
        renderItem={({ item }) => <FeedItem grid={grid} {...item} />}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => loadFeed()}
        onViewableItemsChanged={setVisibleIndex}
        onRefresh={refreshFeed}
        refreshing={refreshing}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100
        }}
        getItemLayout={(data, index) => {
          const height = grid ? width / 3 : width + CARD_OFFSET;
          return {
            length: height,
            offset: height * index,
            index
          };
        }}
        ListEmptyComponent={() => (
          <ListEmpty error={error} loading={loading} refreshing={refreshing} />
        )}
        ListFooterComponent={() => (
          <ListFooter
            show={records.length > 0}
            error={error}
            loading={loading}
            refreshing={refreshing}
          />
        )}
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
  records: state.feed.records,
  loading: state.feed.loading,
  error: state.feed.error,
  grid: state.feed.grid,
  visibleIndex: state.feed.visibleIndex,
  refreshing: state.feed.refreshing
});

const mapDispatchToProps = dispatch => ({
  loadFeed: () => dispatch(loadFeed()),
  refreshFeed: () => dispatch(refreshFeed()),
  toggleFeedView: () => dispatch(toggleFeedView()),
  setVisibleIndex: ({ viewableItems, changed }) => {
    if (viewableItems[0] && viewableItems[0].index) {
      dispatch(setVisibleIndex(viewableItems[0].index));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
