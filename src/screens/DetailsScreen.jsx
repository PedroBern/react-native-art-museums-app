import React, { useEffect, memo } from "react";
import { connect } from "react-redux";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { Appbar, Paragraph, Title } from "react-native-paper";
import Swiper from "react-native-swiper";

import { loadRecord, resetDetails } from "../store/actions/details";
import Spinner from "../components/Spinner";
import FavoriteFab from "../components/FavoriteFab";
import Link from "../components/Link";
import Divider from "../components/Divider";

const areEqual = (prevProps, nextProps) => {
  if (prevProps.done) {
    return true;
  }
  return false;
};

const DetailsScreen = memo(
  ({ navigation, record, loading, error, resetDetails, loadRecord, done }) => {
    const id = navigation.getParam("id", "");
    const title = navigation.getParam("title", "Missing title");
    const division = navigation.getParam("division", "");
    const century = navigation.getParam("century", "");
    const primaryimageurl = navigation.getParam("primaryimageurl", "");

    useEffect(() => {
      loadRecord(id);
    }, []);

    useEffect(() => {
      resetDetails();
    }, [done]);

    return (
      <View style={styles.root}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title={title} subtitle={division} />
        </Appbar.Header>
        <ScrollView style={styles.content}>
          {loading ? (
            <Spinner />
          ) : error ? (
            <Text style={styles.body}>{error}</Text>
          ) : (
            <React.Fragment>
              <View style={styles.image}>
                <Swiper>
                  {record.images.map(uri => (
                    <Image key={uri} source={{ uri }} style={styles.image} />
                  ))}
                </Swiper>
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
              </View>
              <View style={styles.body}>
                <Title>Object number</Title>
                <Paragraph>{id}</Paragraph>
                <Divider />

                <Title>Title</Title>
                <Paragraph>{title}</Paragraph>
                <Divider />

                {record.people && (
                  <React.Fragment>
                    <Title>People</Title>
                    {record.people.map(p => (
                      <TouchableOpacity
                        key={p.personid}
                        onPress={() => navigation.push("Person", { ...p })}
                      >
                        <Paragraph>
                          <Paragraph style={styles.link}>{p.name}</Paragraph> (
                          {p.role})
                        </Paragraph>
                      </TouchableOpacity>
                    ))}
                    <Divider />
                  </React.Fragment>
                )}

                {record.labeltext && (
                  <React.Fragment>
                    <Title>Gallery Text</Title>
                    <Paragraph>{record.labeltext}</Paragraph>
                    <Divider />
                  </React.Fragment>
                )}

                <Title>Century</Title>
                <Paragraph>{century}</Paragraph>
                <Divider />

                <Title>Dated</Title>
                <Paragraph>{record.dated}</Paragraph>
                <Divider />

                <Title>Culture</Title>
                <Paragraph>{record.culture}</Paragraph>
                <Divider />

                <Title>Accesion year</Title>
                <Paragraph>{record.accessionyear}</Paragraph>
                <Divider />

                <Title>Accesion method</Title>
                <Paragraph>{record.accessionmethod}</Paragraph>
                <Divider />

                <Title>Total page views</Title>
                <Paragraph>{record.totalpageviews}</Paragraph>
                <Divider />

                <Link Component={Paragraph} url={record.url}>
                  Open on Harvard Art Museum
                </Link>
              </View>
            </React.Fragment>
          )}
        </ScrollView>
      </View>
    );
  },
  areEqual
);

const width = Dimensions.get("window").width;

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
  image: {
    width: width,
    height: width * 1.5,
    resizeMode: "contain"
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  },
  link: {
    color: "#2e78b7"
  }
});

const mapStateToProps = state => ({
  ...state.details
});

export default connect(mapStateToProps, {
  loadRecord,
  resetDetails
})(DetailsScreen);
