import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import PropTypes from "prop-types";

import Spinner from "../components/Spinner";
import Link from "../components/Link";
import Divider from "../components/Divider";

const PersonInfo = ({ person }) => {
  return person.loading ? (
    <Spinner />
  ) : person.error ? (
    <Text style={styles.body}>{person.error}</Text>
  ) : (
    <View style={styles.body}>
      <Title>Name</Title>
      <Paragraph>{person.data.displayname}</Paragraph>
      <Divider />

      <Title>Gender</Title>
      <Paragraph>{person.data.gender || <Text>-</Text>}</Paragraph>
      <Divider />

      <Title>Culture</Title>
      <Paragraph>{person.data.culture || <Text>-</Text>}</Paragraph>
      <Divider />

      <Title>Birthplace</Title>
      <Paragraph>{person.data.birthplace || <Text>-</Text>}</Paragraph>
      <Divider />

      <Title>Deathplace</Title>
      <Paragraph>{person.data.deathplace || <Text>-</Text>}</Paragraph>
      <Divider />

      <Title>Date</Title>
      <Paragraph>{person.data.displaydate || <Text>-</Text>}</Paragraph>
      <Divider />

      {person.data.wikipedia_id && (
        <React.Fragment>
          <Link
            Component={Paragraph}
            url={`https://en.wikipedia.org/?curid=${person.data.wikipedia_id}`}
          >
            Open on Wikipedia
          </Link>
          <Divider />
        </React.Fragment>
      )}
      <Link Component={Paragraph} url={person.data.url}>
        Open on Harvard Art Museum
      </Link>
    </View>
  );
};

PersonInfo.propTypes = {
  person: PropTypes.shape({
    loading: PropTypes.bool,
    data: PropTypes.shape({
      displayname: PropTypes.string,
      gender: PropTypes.string,
      culture: PropTypes.string,
      birthplace: PropTypes.string,
      deathplace: PropTypes.string,
      displaydate: PropTypes.string,
      wikipedia_id: PropTypes.string,
      url: PropTypes.string
    })
  })
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "white"
  },
  body: {
    flex: 1,
    padding: 16
  }
});

export default PersonInfo;
