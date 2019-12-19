import React, { useEffect } from "react";
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
import { useNavigation, useNavigationParam } from "react-navigation-hooks";

import useDetailsReducer from "../store/hooks/details";
import Spinner from "../components/Spinner";
import FavoriteFab from "../components/FavoriteFab";
import Link from "../components/Link";
import Divider from "../components/Divider";

const DetailsScreen = () => {
  const id = useNavigationParam("id");
  const title = useNavigationParam("title");
  const division = useNavigationParam("division");
  const century = useNavigationParam("century");
  const primaryimageurl = useNavigationParam("primaryimageurl");

  const { goBack, push } = useNavigation();

  const { state, actions } = useDetailsReducer(id);

  useEffect(() => {
    actions.loadRecord();
  }, []);

  return (
    <View style={styles.root} testID="details-screen">
      <Appbar.Header>
        <Appbar.BackAction
          testID="go-back-details-screen"
          onPress={() => goBack()}
        />
        <Appbar.Content title={title} subtitle={division} />
      </Appbar.Header>
      <ScrollView style={styles.content}>
        {state.loading ? (
          <Spinner />
        ) : state.error ? (
          <Text style={styles.body}>{state.error}</Text>
        ) : (
          <React.Fragment>
            <View style={styles.image}>
              <Swiper>
                {state.record.images.map(uri => (
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

              <Title>People</Title>
              {state.record.people ? (
                state.record.people.map(p => (
                  <TouchableOpacity
                    testID="push-details-screen"
                    key={p.personid + p.role}
                    onPress={() => push("Person", { ...p })}
                  >
                    <Paragraph>
                      <Paragraph style={styles.link}>{p.name}</Paragraph> (
                      {p.role})
                    </Paragraph>
                  </TouchableOpacity>
                ))
              ) : (
                <Text>-</Text>
              )}
              <Divider />

              <Title>Gallery Text</Title>
              <Paragraph>{state.record.labeltext || <Text>-</Text>}</Paragraph>
              <Divider />

              <Title>Century</Title>
              <Paragraph>{state.record.century || <Text>-</Text>}</Paragraph>
              <Divider />

              <Title>Dated</Title>
              <Paragraph>{state.record.dated || <Text>-</Text>}</Paragraph>
              <Divider />

              <Title>Culture</Title>
              <Paragraph>{state.record.culture || <Text>-</Text>}</Paragraph>
              <Divider />

              <Title>Accesion year</Title>
              <Paragraph>
                {state.record.accessionyear || <Text>-</Text>}
              </Paragraph>
              <Divider />

              <Title>Accesion method</Title>
              <Paragraph>
                {state.record.accessionmethod || <Text>-</Text>}
              </Paragraph>
              <Divider />

              <Title>Total page views</Title>
              <Paragraph>
                {state.record.totalpageviews || <Text>-</Text>}
              </Paragraph>
              <Divider />

              <Link Component={Paragraph} url={state.record.url}>
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
  link: {
    color: "#2e78b7"
  }
});

export default DetailsScreen;
