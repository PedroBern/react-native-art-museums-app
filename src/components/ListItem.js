import React, { memo } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Title, Caption } from "react-native-paper";
import { useNavigation } from "react-navigation-hooks";

export const LIST_ITEM_HEIGHT = 48;

// ListItem used in Search Tab

const ListItem = memo(({ name, id, objectcount, theme, target }) => {
  const { push } = useNavigation();
  return (
    <View style={styles.item}>
      <ScrollView horizontal style={styles.name} indicatorStyle="light">
        <TouchableOpacity
          testID="list-item"
          key={id}
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
        >
          <Title numberOfLines={1}>{name}</Title>
        </TouchableOpacity>
      </ScrollView>
      {objectcount > 0 ? (
        <View style={styles.count}>
          <Caption numberOfLines={1} ellipsizeMode="tail">
            {objectcount}
          </Caption>
        </View>
      ) : null}
    </View>
  );
});

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  objectcount: PropTypes.number,
  theme: PropTypes.string,
  target: PropTypes.string.isRequired
};

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
