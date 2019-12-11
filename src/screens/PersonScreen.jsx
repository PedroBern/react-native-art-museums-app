import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { Appbar, Paragraph, Title } from "react-native-paper";

import { loadPersonRecords, resetPerson } from "../store/actions/person";
import Spinner from "../components/Spinner";
import Link from "../components/Link";
import Divider from "../components/Divider";
import FlatListBase from "../components/FlatListBase";
import ListFooter from "../components/ListFooter";

const PersonScreen = ({
  navigation,
  person,
  records,
  loadPersonRecords,
  resetPerson
}) => {
  const id = navigation.getParam("personid", "");
  const name = navigation.getParam("name", "");
  const role = navigation.getParam("role", "");

  useEffect(() => {
    return () => resetPerson();
  }, []);

  return (
    <View style={styles.root}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={name} subtitle={role} />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        {person.loading ? (
          <Spinner />
        ) : person.error ? (
          <Text style={styles.body}>{person.error}</Text>
        ) : (
          <View style={styles.body}>
            <Title>Name</Title>
            <Paragraph>{person.data.displayname}</Paragraph>
            <Divider />

            <Title>Gender</Title>
            <Paragraph>{person.data.gender}</Paragraph>
            <Divider />

            <Title>Culture</Title>
            <Paragraph>{person.data.culture}</Paragraph>
            <Divider />

            <Title>Birthplace</Title>
            <Paragraph>{person.data.birthplace}</Paragraph>
            <Divider />

            <Title>Deathplace</Title>
            <Paragraph>{person.data.deathplace}</Paragraph>
            <Divider />

            <Title>Date</Title>
            <Paragraph>{person.data.displaydate}</Paragraph>
            <Divider />

            <View style={styles.grow} />

            <Link
              Component={Paragraph}
              url={`https://en.wikipedia.org/?curid=${person.data.wikipedia_id}`}
            >
              Open on Wikipedia
            </Link>
            <Divider />
            <Link Component={Paragraph} url={person.data.url}>
              Open on Harvard Art Museum
            </Link>
          </View>
        )}
        {records.loading && records.data.length === 0 ? (
          <Spinner />
        ) : records.error ? (
          <Text style={styles.body}>{records.error}</Text>
        ) : (
          <View>
            <FlatListBase
              listKey="person-records"
              records={records.data}
              grid={true}
              onEndReached={() =>
                records.next && loadPersonRecords(id, records.next)
              }
              ListFooterComponent={() => (
                <ListFooter
                  error={records.error}
                  loading={records.loading}
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
  },
  flatList: {
    // max
  }
});

const mapStateToProps = state => ({
  ...state.person
});

export default connect(mapStateToProps, {
  loadPersonRecords,
  resetPerson
})(PersonScreen);
