import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";
import { connect } from "react-redux";
import { Appbar, Paragraph } from "react-native-paper";
import { withNavigation } from "react-navigation";

import FeedItem, { CARD_OFFSET } from "../components/FeedItem";
import ListFooter from "../components/ListFooter";
import Spinner from "../components/Spinner";
import {
  loadFeed,
  toggleFeedView,
  setVisibleIndex,
  refreshFeed
} from "../store/actions/feed";
import { setCurrentDetail } from "../store/actions/details";

const width = Dimensions.get("window").width;

const viewabilityConfig = {
  itemVisiblePercentThreshold: 95
};

const GRID_KEY = "feed-grid-display";
const LIST_KEY = "feed-list-display";

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
      <FlatList
        key={grid ? GRID_KEY : LIST_KEY}
        initialScrollIndex={
          grid
            ? Math.max((visibleIndex - (visibleIndex % 3)) / 3, 0)
            : Math.max(visibleIndex, 0)
        }
        data={records}
        numColumns={grid ? 3 : 1}
        renderItem={({ item }) => (
          <FeedItem
            grid={grid}
            {...item}
            fluiId={`${grid ? GRID_KEY : LIST_KEY}-${item.id}`}
            onSingleTap={fluidId => {
              setCurrentDetail(item.id, () =>
                navigation.navigate("Details", {
                  ...item,
                  fluidId
                })
              );
            }}
          />
        )}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => loadFeed()}
        onViewableItemsChanged={setVisibleIndex}
        onRefresh={refreshFeed}
        refreshing={refreshing}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(data, index) => {
          const height = grid ? width / 3 : width + CARD_OFFSET;
          return {
            length: height,
            offset: height * index,
            index
          };
        }}
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
  setCurrentDetail: (id, navigate) => dispatch(setCurrentDetail(id, navigate)),
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

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(FeedScreen)
);
