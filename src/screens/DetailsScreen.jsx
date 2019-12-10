import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Image
} from "react-native";
import { Appbar, Paragraph, Title, Divider } from "react-native-paper";
import Swiper from "react-native-swiper";

import { loadRecord, resetDetails } from "../store/actions/details";
import Spinner from "../components/Spinner";
import FavoriteFab from "../components/FavoriteFab";
import Link from "../components/Link";

const CustomDivider = () => <Divider style={styles.divider} />;

const DetailsScreen = ({
  navigation,
  record,
  loading,
  error,
  resetDetails,
  loadRecord
}) => {
  const id = navigation.getParam("id", "");
  const title = navigation.getParam("title", "Missing title");
  const division = navigation.getParam("division", "");
  const century = navigation.getParam("century", "");
  const primaryimageurl = navigation.getParam("primaryimageurl", "");

  useEffect(() => {
    loadRecord(id);
    return () => resetDetails();
  }, []);

  return (
    <View style={styles.root}>
      <Appbar.Header style={styles.header}>
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
                  <Image key={uri} source={{ uri }} style={[styles.image]} />
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
              <CustomDivider />
              <Title>Title</Title>
              <Paragraph>{title}</Paragraph>
              <CustomDivider />
              {record.people && (
                <React.Fragment>
                  <Title>People</Title>
                  {record.people.map(p => (
                    <Paragraph key={p}>{p}</Paragraph>
                  ))}
                  <CustomDivider />
                </React.Fragment>
              )}
              {record.labeltext && (
                <React.Fragment>
                  <Title>Gallery Text</Title>
                  <Paragraph>{record.labeltext}</Paragraph>
                  <CustomDivider />
                </React.Fragment>
              )}
              <CustomDivider />
              <Title>Century</Title>
              <Paragraph>{century}</Paragraph>
              <CustomDivider />
              <Title>Dated</Title>
              <Paragraph>{record.dated}</Paragraph>
              <CustomDivider />
              <Title>Culture</Title>
              <Paragraph>{record.culture}</Paragraph>
              <CustomDivider />
              <Title>Accesion year</Title>
              <Paragraph>{record.accessionyear}</Paragraph>
              <CustomDivider />
              <Title>Accesion method</Title>
              <Paragraph>{record.accessionmethod}</Paragraph>
              <CustomDivider />
              <Title>Total page views</Title>
              <Paragraph>{record.totalpageviews}</Paragraph>
              <CustomDivider />
              <Link Component={Paragraph} url={record.url}>
                Open on Harvard Art Museum
              </Link>
            </View>
          </React.Fragment>
        )}
      </ScrollView>
    </View>
  );
};

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
  divider: {
    marginTop: 8,
    marginBottom: 8
  }
});

const mapStateToProps = state => ({
  ...state.details
});

export default connect(mapStateToProps, { loadRecord, resetDetails })(
  DetailsScreen
);
