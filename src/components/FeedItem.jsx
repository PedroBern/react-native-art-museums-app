import React, { memo } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Subheading,
  Caption
} from "react-native-paper";

import FavoriteFab from "./FavoriteFab";

const width = Dimensions.get("window").width;

// height of Card Title + Card Content
// used on getItemLayout of FlatList
export const CARD_OFFSET = 139;

// Columns on grid view
export const GRID_COLUMNS = 2;

const FeedItem = memo(
  ({
    id,
    title,
    primaryimageurl,
    division,
    century,
    grid,
    onPress,
    fluiId
  }) => (
    <Card key={id} style={grid ? styles.grid : styles.root} elevation={0}>
      {!grid && <Card.Title title={title} subtitle={division} />}
      <TouchableOpacity onPress={() => onPress(fluiId)}>
        <Card.Cover
          source={{
            uri: `${primaryimageurl}`
          }}
          style={grid ? styles.imageGrid : styles.image}
        />
      </TouchableOpacity>
      {!grid && (
        <React.Fragment>
          <Card.Content>
            <Caption>{century}</Caption>
          </Card.Content>
          <FavoriteFab
            record={{
              id,
              title,
              primaryimageurl,
              division,
              century
            }}
            style={styles.fab}
          />
        </React.Fragment>
      )}
    </Card>
  )
);

const styles = StyleSheet.create({
  root: {
    marginTop: 24
  },
  grid: {
    // flex: 1,
    padding: 2
  },
  image: {
    width: width,
    height: width
  },
  imageGrid: {
    width: width / GRID_COLUMNS - 4,
    height: width / GRID_COLUMNS - 4
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});

export default FeedItem;
