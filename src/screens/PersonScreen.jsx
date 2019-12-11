import React, { useEffect, useReducer } from "react";
import { connect } from "react-redux";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Appbar, Paragraph, Title } from "react-native-paper";
import { useNavigation, useNavigationParam } from "react-navigation-hooks";

import { loadPersonRecords, loadPerson } from "../store/actions/person";
import reducer, {
  personInitialState as initialState
} from "../store/reducers/person";
import Spinner from "../components/Spinner";
import Link from "../components/Link";
import Divider from "../components/Divider";
import FlatListBase from "../components/FlatListBase";
import ListFooter from "../components/ListFooter";

const PersonScreen = () => {
  const { goBack } = useNavigation();

  const id = useNavigationParam("personid");
  const name = useNavigationParam("name");
  const role = useNavigationParam("role");

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    loadPersonRecords(id)(dispatch);
    loadPerson(id)(dispatch);
  }, []);

  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => goBack()} />
        <Appbar.Content title={name} subtitle={role} />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        {state.person.loading ? (
          <Spinner />
        ) : state.person.error ? (
          <Text style={styles.body}>{state.person.error}</Text>
        ) : (
          <View style={styles.body}>
            <Title>Name</Title>
            <Paragraph>{state.person.data.displayname}</Paragraph>
            <Divider />

            <Title>Gender</Title>
            <Paragraph>{state.person.data.gender}</Paragraph>
            <Divider />

            <Title>Culture</Title>
            <Paragraph>{state.person.data.culture}</Paragraph>
            <Divider />

            <Title>Birthplace</Title>
            <Paragraph>{state.person.data.birthplace}</Paragraph>
            <Divider />

            <Title>Deathplace</Title>
            <Paragraph>{state.person.data.deathplace}</Paragraph>
            <Divider />

            <Title>Date</Title>
            <Paragraph>{state.person.data.displaydate}</Paragraph>
            <Divider />

            <View style={styles.grow} />

            <Link
              Component={Paragraph}
              url={`https://en.wikipedia.org/?curid=${state.person.data.wikipedia_id}`}
            >
              Open on Wikipedia
            </Link>
            <Divider />
            <Link Component={Paragraph} url={state.person.data.url}>
              Open on Harvard Art Museum
            </Link>
          </View>
        )}
        {state.records.loading && state.records.data.length === 0 ? (
          <Spinner />
        ) : state.records.error ? (
          <Text style={styles.body}>{state.records.error}</Text>
        ) : (
          <View>
            <FlatListBase
              listKey="person-records"
              records={state.records.data}
              grid={true}
              onEndReached={() =>
                state.records.next &&
                loadPersonRecords(id, state.records.next)(dispatch)
              }
              ListFooterComponent={() => (
                <ListFooter
                  error={state.records.error}
                  loading={state.records.loading}
                  refreshing={false}
                />
              )}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black"
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
