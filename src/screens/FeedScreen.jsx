import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { Appbar, Paragraph } from "react-native-paper";

import SortDialog from "../components/SortDialog";
import FlatListBase from "../components/FlatListBase";
import ListFooter from "../components/ListFooter";
import {
  loadFeed,
  toggleFeedView,
  setVisibleIndex,
  refreshFeed,
  sortFeed
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
  setCurrentDetail,
  sortFeed
}) => {
  useEffect(() => {
    if (records.length === 0) loadFeed();
  }, []);

  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.root}>
      <SortDialog
        visible={visible}
        onDismiss={() => setVisible(false)}
        buttons={[
          {
            title: "Recent page views",
            onPress: () => sortFeed("dateoflastpageview", "desc")
          },
          {
            title: "Older page views",
            onPress: () => sortFeed("dateoflastpageview", "asc")
          },
          {
            title: "More total views",
            onPress: () => sortFeed("totalpageviews", "desc")
          },
          {
            title: "Less total views",
            onPress: () => sortFeed("totalpageviews", "asc")
          }
        ]}
      />
      <Appbar.Header>
        <Appbar.Content title="Feed" />
        <Appbar.Action icon={"sort-variant"} onPress={() => setVisible(true)} />
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
  sortFeed: (sort, order) => dispatch(sortFeed(sort, order)),
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
