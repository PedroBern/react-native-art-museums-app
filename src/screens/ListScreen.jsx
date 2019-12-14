import React, { useEffect, memo, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { Appbar } from "react-native-paper";

import useAbortableReducer from "../hooks/useAbortableReducer";
import {
  loadListOf,
  sortList,
  search,
  resetSearch
} from "../store/actions/explore";
import reducer, { initialState } from "../store/reducers/explore";
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
  const { state, dispatch } = useAbortableReducer(reducer, initialState);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    loadListOf(target.toLowerCase())(dispatch);
  }, []);

  const showingAllRecords = state.totalRecords === state.records.length;

  // const handleSort = () => sortList(state)(dispatch);

  const renderItem = ({ item, index }) => (
    <ListItem key={item.id + ""} {...item} target={state.target} />
  );

  const renderListFooter = () => (
    <ListFooter error={state.error} loading={state.loading} />
  );

  const onEndReached = () =>
    state.next && loadListOf(state.target, state.next)(dispatch);

  const onSubmitSearch = text => {
    dispatch(resetSearch());
    search(
      text,
      state.target,
      showingAllRecords ? state.records : null
    )(dispatch);
  };

  const onEndReachedSearch = () =>
    state.nextSearchUrl &&
    loadListOf(state.target, state.nextSearchUrl, false, true)(dispatch);

  return (
    <View style={styles.root}>
      {showSearch ? (
        <Appbar.Header>
          <SearchBar
            dismiss={() => setShowSearch(false)}
            onSubmit={onSubmitSearch}
          />
        </Appbar.Header>
      ) : (
        <Appbar.Header>
          <Appbar.BackAction onPress={() => goBack()} />
          <Appbar.Content title={target} />
          {/*<Appbar.Action
            disabled={!state.totalRecords}
            icon={state.desc ? "sort-descending" : "sort-ascending"}
            onPress={handleSort}
          />*/}
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
          onEndReached={onEndReachedSearch}
          ListFooterComponent={renderListFooter}
        />
      ) : (
        <MemoizedList
          listKey={"regular"}
          inverted={state.totalRecords && state.desc && showingAllRecords}
          data={state.records}
          renderItem={renderItem}
          keyExtractor={item => item.id + ""}
          getItemLayout={getItemLayout}
          maxToRenderPerBatch={20}
          initialNumToRender={20}
          onEndReached={onEndReached}
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
