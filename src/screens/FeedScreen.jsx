import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { Appbar, Paragraph } from "react-native-paper";

import FlatListBase from "../components/FlatListBase";
import ListFooter from "../components/ListFooter";
import {
  loadFeed,
  toggleFeedView,
  setVisibleIndex,
  refreshFeed
} from "../store/actions/feed";

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
  setVisibleIndex,
  navigation,
  setCurrentDetail
}) => {
  useEffect(() => {
    if (records.length === 0) loadFeed();
  }, []);

  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.Content title="Most recent updates" />
        <Appbar.Action
          icon={grid ? "view-agenda" : "view-grid"}
          onPress={toggleFeedView}
        />
      </Appbar.Header>
      <FlatListBase
        listKey={grid ? "feed-grid-display" : "feed-list-display"}
        setVisibleIndex={setVisibleIndex}
        visibleIndex={visibleIndex}
        setCurrentDetail={setCurrentDetail}
        grid={grid}
        records={records}
        onEndReached={() => loadFeed()}
        onRefresh={refreshFeed}
        refreshing={refreshing}
        ListFooterComponent={() => (
          <ListFooter error={error} loading={loading} refreshing={refreshing} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
