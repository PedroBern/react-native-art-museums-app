import React, { useEffect, memo, useState, useCallback } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { Appbar } from "react-native-paper";

import useExploreReducer from "../store/hooks/explore";
import ListFooter from "../components/ListFooter";
import ListItem, { LIST_ITEM_HEIGHT } from "../components/ListItem";
import SearchBar from "../components/SearchBar";

const getItemLayout = (data, index) => {
  return {
    length: LIST_ITEM_HEIGHT,
    offset: LIST_ITEM_HEIGHT * index,
    index
  };
};

const areEqual = (prev, next) => {
  if (
    prev.listKey === next.listKey &&
    prev.data.length === next.data.length &&
    prev.ListFooterComponent === next.ListFooterComponent &&
    prev.onEndReached === next.onEndReached
  )
    return true;
  return false;
};

const MemoizedList = memo(
  ({ listKey, ...props }) => <FlatList key={listKey} {...props} />,
  areEqual
);

const ListScreen = () => {
  const { push, goBack } = useNavigation();
  const target = useNavigationParam("target");
  const { state, actions } = useExploreReducer(target.toLowerCase());
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    actions.loadList();
  }, []);

  const renderItem = useCallback(
    ({ item, index }) => (
      <ListItem key={item.id + ""} {...item} target={state.target} />
    ),
    [state.target]
  );

  const renderListFooter = useCallback(
    () => <ListFooter error={state.error} loading={state.loading} />,
    [state.error, state.loading]
  );

  return (
    <View style={styles.root}>
      {showSearch ? (
        <Appbar.Header>
          <SearchBar
            dismiss={() => setShowSearch(false)}
            onSubmit={actions.onSubmitSearch}
          />
        </Appbar.Header>
      ) : (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => goBack()} />
          <Appbar.Content title={target} />
          <Appbar.Action
            disabled={!state.totalRecords}
            icon={"magnify"}
            onPress={() => setShowSearch(true)}
          />
        </Appbar.Header>
      )}

      {showSearch ? (
        <MemoizedList
          listKey={"search"}
          data={state.filteredRecords}
          renderItem={renderItem}
          keyExtractor={item => item.id + ""}
          getItemLayout={getItemLayout}
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          onEndReached={actions.onEndReachedSearch}
          ListFooterComponent={renderListFooter}
        />
      ) : (
        <MemoizedList
          listKey={"regular"}
          data={state.records}
          renderItem={renderItem}
          keyExtractor={item => item.id + ""}
          getItemLayout={getItemLayout}
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          onEndReached={actions.onEndReached}
          ListFooterComponent={renderListFooter}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

export default ListScreen;
