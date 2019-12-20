import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Appbar, Paragraph, Title } from "react-native-paper";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";

import usePresonReducer from "../store/hooks/person";
import Spinner from "../components/Spinner";
import Link from "../components/Link";
import Divider from "../components/Divider";
import FlatListBase from "../components/FlatListBase";
import ListFooter from "../components/ListFooter";
import PersonInfo from "../components/PersonInfo";

const PersonScreen = () => {
  const { goBack } = useNavigation();

  const id = useNavigationParam("personid");
  const name = useNavigationParam("name");
  const role = useNavigationParam("role");

  const { person, records, actions } = usePresonReducer(id);

  useEffect(() => {
    actions.loadPersonRecords();
    actions.loadPerson();
  }, []);

  const ListFooterComponent = useCallback(
    () => (
      <ListFooter
        error={records.error}
        loading={records.loading}
        refreshing={false}
      />
    ),
    [records.error, records.loading]
  );

  const ListHeaderComponent = useCallback(
    () => <PersonInfo person={person} />,
    [person.loading]
  );

  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => goBack()} />
        <Appbar.Content title={name} subtitle={role} />
      </Appbar.Header>
      <FlatListBase
        listKey="person-records"
        records={records.data}
        grid={true}
        onEndReached={() => actions.onEndReached()}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white"
  },
  content: {
    flex: 1,
    backgroundColor: "white"
  },
  body: {
    flex: 1,
    padding: 16
  }
});

export default PersonScreen;
