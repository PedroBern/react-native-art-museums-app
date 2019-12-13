import React, { useReducer, useEffect, memo, useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";
import { Appbar } from "react-native-paper";

import { loadListOf, sortList, search } from "../store/actions/explore";
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
    prev.data.length === next.data.length &&
    prev.ListFooterComponent === next.ListFooterComponent
  )
    return true;
  return false;
};

const MemoizedList = memo(props => <FlatList {...props} />, areEqual);

const ListScreen = () => {
  const { push, goBack } = useNavigation();
  const target = useNavigationParam("target");
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    loadListOf(target.toLowerCase())(dispatch);
  }, []);

  const showingAllRecords = state.totalRecords === state.records.length;

  const handleSort = () => {
    sortList(state)(dispatch);
  };

  const renderItem = ({ item, index }) => (
    <ListItem key={item.id} {...item} target={state.target} />
  );

  const renderListFooter = () => (
    <ListFooter error={state.error} loading={state.loading} />
  );

  const onEndReached = () =>
    state.next && loadListOf(state.target, state.next)(dispatch);

  const onSubmitSearch = text =>
    search(
      text,
      state.target,
      showingAllRecords ? state.records : null
    )(dispatch);

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
          <Appbar.Action
            disabled={!state.totalRecords}
            icon={state.desc ? "sort-descending" : "sort-ascending"}
            onPress={handleSort}
          />
          <Appbar.Action
            disabled={!state.totalRecords}
            icon={"magnify"}
            onPress={() => setShowSearch(true)}
          />
        </Appbar.Header>
      )}

      <MemoizedList
        inverted={state.totalRecords && state.desc && showingAllRecords}
        data={showSearch ? state.filteredRecords : state.records}
        renderItem={renderItem}
        keyExtractor={item => item.id + ""}
        getItemLayout={getItemLayout}
        maxToRenderPerBatch={50}
        initialNumToRender={50}
        onEndReached={onEndReached}
        ListFooterComponent={renderListFooter}
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

export default ListScreen;
