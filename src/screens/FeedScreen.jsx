import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { connect } from "react-redux";
import { Appbar, Paragraph, ProgressBar } from "react-native-paper";
import { useNavigationParam, useNavigation } from "react-navigation-hooks";

import useFeedReducer from "../store/hooks/feed";
import SortDialog from "../components/SortDialog";
import FlatListBase from "../components/FlatListBase";
import ListFooter from "../components/ListFooter";
import EmptyList from "../components/EmptyList";

const FeedScreen = () => {
  const title = useNavigationParam("title") || "Feed";
  const subtitle = useNavigationParam("subtitle");
  const filter = useNavigationParam("filter");
  const { goBack } = useNavigation();

  const { state, actions } = useFeedReducer(filter);

  useEffect(() => {
    actions.loadFeed();
  }, []);

  const [visible, setVisible] = useState(false);
  const onDismiss = () => setVisible(false);

  // const setVisibleIndex = useCallback(() => actions.setVisibleIndex(), [
  //   actions.setVisibleIndex
  // ]);

  const buttons = useCallback(
    () => [
      {
        title: "Recent page views",
        onPress: () => actions.sortFeed("dateoflastpageview", "desc", filter)
      },
      {
        title: "Older page views",
        onPress: () => actions.sortFeed("dateoflastpageview", "asc", filter)
      },
      {
        title: "More total views",
        onPress: () => actions.sortFeed("totalpageviews", "desc", filter)
      },
      {
        title: "Less total views",
        onPress: () => actions.sortFeed("totalpageviews", "asc", filter)
      }
    ],
    [actions.sortFeed]
  )();

  const ListFooterComponent = useCallback(
    () => (
      <ListFooter
        error={state.error}
        loading={state.loading && !state.refreshing}
      />
    ),
    [state.error, state.loading, state.refreshing]
  );

  const EmptyListComponent = useCallback(
    () => (
      <EmptyList notShow={state.loading || state.refreshing || state.error} />
    ),
    [state.loading, state.refreshing, state.error]
  );

  return (
    <View style={styles.root}>
      <SortDialog visible={visible} onDismiss={onDismiss} buttons={buttons} />
      <Appbar.Header>
        {filter && <Appbar.BackAction onPress={() => goBack()} />}
        <Appbar.Content title={title} subtitle={subtitle} />
        <Appbar.Action
          disabled={state.loading || state.refreshing}
          icon={"sort-variant"}
          onPress={() => setVisible(true)}
        />
        <Appbar.Action
          disabled={state.loading || state.refreshing}
          icon={state.grid ? "view-agenda" : "view-grid"}
          onPress={actions.toggleFeedView}
        />
      </Appbar.Header>
      <FlatListBase
        listKey={`${state.grid ? "g" : "l"}-${state.sortOrder}-${state.sort}`}
        setVisibleIndex={actions.setVisibleIndex}
        visibleIndex={state.visibleIndex}
        grid={state.grid}
        records={state.records}
        onEndReached={actions.onEndReached}
        onRefresh={() => actions.refreshFeed(state.sort, state.sortOrder)}
        refreshing={state.refreshing}
        ListFooterComponent={ListFooterComponent}
        ListEmptyComponent={EmptyListComponent}
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
