import React, { memo } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";

import Spinner from "./Spinner";

const ListFooter = memo(({ loading, error }) => (
  <View style={[styles.root, styles.height]}>
    {loading && <Spinner />}
    {error && (
      <View style={[styles.root, styles.error]}>
        <Paragraph>{error}</Paragraph>
      </View>
    )}
  </View>
));

ListFooter.defaultProps = {
  loading: false,
  error: null
};

ListFooter.propTypes = {
  loading: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center"
  },
  height: {
    height: 120
  },
  error: {
    padding: 16
  }
});

export default ListFooter;
