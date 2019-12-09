import React, { memo } from "react";
import { FlatList, Dimensions } from "react-native";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";

import FeedItem, { CARD_OFFSET, GRID_COLUMNS } from "../components/FeedItem";

const width = Dimensions.get("window").width;

const viewabilityConfig = {
  itemVisiblePercentThreshold: 95
};

function areEqual(p, n) {
  if (
    p.grid !== n.grid ||
    p.records !== n.records ||
    p.ListFooterComponent !== n.ListFooterComponent
  ) {
    return false;
  }
  return true;
}

const FlatListBase = memo(
  ({
    records,
    grid,
    setVisibleIndex,
    visibleIndex,
    listKey,
    navigation,
    ...other
  }) => {
    return (
      <FlatList
        key={listKey}
        initialScrollIndex={
          grid
            ? Math.max(
                (visibleIndex - (visibleIndex % GRID_COLUMNS)) / GRID_COLUMNS,
                0
              )
            : Math.max(visibleIndex, 0)
        }
        data={records}
        numColumns={grid ? GRID_COLUMNS : 1}
        renderItem={({ item }) => (
          <FeedItem
            grid={grid}
            {...item}
            fluiId={`${listKey}-${item.id}`}
            onPress={fluidId =>
              navigation.navigate("Details", { ...item, fluidId })
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
        onViewableItemsChanged={setVisibleIndex}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={(data, index) => {
          const height = grid ? width / GRID_COLUMNS : width + CARD_OFFSET;
          return {
            length: height,
            offset: height * index,
            index
          };
        }}
        {...other}
      />
    );
  },
  areEqual
);

FlatListBase.propTypes = {
  records: PropTypes.array.isRequired,
  grid: PropTypes.bool.isRequired,
  setVisibleIndex: PropTypes.func.isRequired,
  visibleIndex: PropTypes.number.isRequired,
  listKey: PropTypes.string.isRequired
};

export default withNavigation(FlatListBase);
