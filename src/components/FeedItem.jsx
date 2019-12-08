import React, { memo } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Subheading,
  Caption
} from "react-native-paper";

const FeedItem = memo(
  ({
    id,
    title,
    images,
    division,
    dated,
    lastUpdateDate,
    lastUpdateTime,
    grid
  }) => (
    <Card key={id} style={grid ? styles.grid : styles.root} elevation={0}>
      {!grid && <Card.Title title={title} subtitle={division} />}
      <Card.Cover
        source={{ uri: images[0].url }}
        style={grid ? styles.imageGrid : styles.image}
      />
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
