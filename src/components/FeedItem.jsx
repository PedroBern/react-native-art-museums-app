import React, { memo } from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Subheading,
  Caption
} from "react-native-paper";
import { Transition } from "react-navigation-fluid-transitions";
import DoubleTap from "react-native-double-tap";

const FeedItem = memo(
  ({
    id,
    title,
    images,
    division,
    dated,
    lastUpdateDate,
    lastUpdateTime,
    grid,
    onSingleTap,
    fluiId
  }) => (
    <Card key={id} style={grid ? styles.grid : styles.root} elevation={0}>
      {!grid && <Card.Title title={title} subtitle={division} />}
      <Transition shared={fluiId}>
        <DoubleTap
          doubleTap={() => console.log("double tap on " + id)}
          singleTap={() => onSingleTap(fluiId)}
        >
          <Card.Cover
            source={{ uri: images[0].url }}
            style={grid ? styles.imageGrid : styles.image}
          />
        </DoubleTap>
      </Transition>
      {!grid && (
        <Card.Content>
          <Caption>{`Dated: ${dated}`}</Caption>
        </Card.Content>
      )}
    </Card>
  )
);

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  root: {
    marginTop: 24
  },
  grid: {
    flex: 1,
    padding: 2
  },
  image: {
    width: width,
    height: width
  },
  imageGrid: {
    width: width / 3 - 4,
    height: width / 3 - 4
  }
});

// height of Card Title + Card Content
// used on getItemLayout of FlatList
export const CARD_OFFSET = 139;

export default FeedItem;
