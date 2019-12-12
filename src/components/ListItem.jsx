import React, { memo } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Title, Caption } from "react-native-paper";
import { useNavigation } from "react-navigation-hooks";

export const LIST_ITEM_HEIGHT = 48;

// ListItem used in Search Tab

const ListItem = memo(({ name, id, objectcount, theme, target }) => {
  const { push } = useNavigation();
  return (
    <View style={styles.item}>
      {/*<TouchableOpacity
      key={id}
      style={styles.item}
      onPress={
        target === "person"
          ? () => push("Person", { personid: id, name, role: "" })
          : target === "object"
          ? () => push("Details", { title: name, id })
          : () =>
              push("Feed", {
                title: name,
                subtitle: theme || "",
                filter: `&${target.toLowerCase()}=${id}`
              })
      }
    >*/}
      <ScrollView horizontal style={styles.name} indicatorStyle="light">
        <Title
          numberOfLines={1} //ellipsizeMode="tail">
        >
          {name}
        </Title>
      </ScrollView>
      <View style={styles.count}>
        <Caption numberOfLines={1} ellipsizeMode="tail">
          {objectcount}
        </Caption>
      </View>
      {/*</TouchableOpacity>*/}
    </View>
  );
});

const styles = StyleSheet.create({
  item: {
    height: LIST_ITEM_HEIGHT,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row"
  },
  name: {
    flex: 1
  },
  count: {
    padding: 8
  }
});

export default ListItem;
