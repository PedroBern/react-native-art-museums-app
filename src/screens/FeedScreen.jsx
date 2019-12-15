import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { Appbar, Paragraph, ProgressBar } from "react-native-paper";
import { useNavigationParam, useNavigation } from "react-navigation-hooks";
import useCancelableThunkReducer from "use-cancelable-thunk-reducer";

import SortDialog from "../components/SortDialog";
import FlatListBase from "../components/FlatListBase";
import ListFooter from "../components/ListFooter";
import EmptyList from "../components/EmptyList";
import {
  loadFeed,
  toggleFeedView,
  setVisibleIndex,
  refreshFeed,
  sortFeed
} from "../store/actions/feed";
import reducer, { feedInitialState } from "../store/reducers/feed";

const setVisibleIndexFactory = ({ viewableItems, changed }) => dispatch => {
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
};

const FeedScreen = () => {
  const title = useNavigationParam("title") || "Feed";
  const subtitle = useNavigationParam("subtitle");
  const filter = useNavigationParam("filter");
  const { goBack } = useNavigation();

  const [state, dispatch] = useCancelableThunkReducer(reducer, {
    ...feedInitialState,
    loadFeed: next => dispatch(loadFeed(filter, next)),
    refreshFeed: (sort, sortOrder) =>
      dispatch(refreshFeed(filter, sort, sortOrder)),
    toggleFeedView: () => dispatch(toggleFeedView()),
    sortFeed: (sort, order) => dispatch(sortFeed(sort, order, filter)),
    setVisibleIndex: ({ viewableItems, changed }) =>
      dispatch(setVisibleIndexFactory({ viewableItems, changed }))
  });

  useEffect(() => {
    state.loadFeed();
  }, []);

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);
  const [buttons, setButtons] = useState([
    {
      title: "Recent page views",
      onPress: () => state.sortFeed("dateoflastpageview", "desc", filter)
    },
    {
      title: "Older page views",
      onPress: () => state.sortFeed("dateoflastpageview", "asc", filter)
    },
    {
      title: "More total views",
      onPress: () => state.sortFeed("totalpageviews", "desc", filter)
    },
    {
      title: "Less total views",
      onPress: () => state.sortFeed("totalpageviews", "asc", filter)
    }
  ]);

  return (
    <View style={styles.root}>
      <SortDialog visible={visible} onDismiss={onDismiss} buttons={buttons} />
      <Appbar.Header>
        {filter && <Appbar.BackAction onPress={() => goBack()} />}
        <Appbar.Content title={title} subtitle={subtitle} />
        <Appbar.Action icon={"sort-variant"} onPress={() => setVisible(true)} />
        <Appbar.Action
          icon={state.grid ? "view-agenda" : "view-grid"}
          onPress={state.toggleFeedView}
        />
      </Appbar.Header>
      <FlatListBase
        listKey={`${state.grid ? "g" : "l"}-${state.sortOrder}-${state.sort}`}
        setVisibleIndex={state.setVisibleIndex}
        visibleIndex={state.visibleIndex}
        grid={state.grid}
        records={state.records}
        onEndReached={() => state.info.next && state.loadFeed(state.info.next)}
        onRefresh={() => state.refreshFeed(state.sort, state.sortOrder)}
        refreshing={state.refreshing}
        ListFooterComponent={() => (
          <ListFooter
            error={state.error}
            loading={state.loading && !state.refreshing}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyList
            notShow={state.loading || state.refreshing || state.error}
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

export default FeedScreen;
