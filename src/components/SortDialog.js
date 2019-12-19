import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { Portal, Dialog, Paragraph, Button } from "react-native-paper";

const SortDialog = memo(({ visible, onDismiss, buttons }) => (
  <Portal>
    <Dialog visible={visible} onDismiss={onDismiss}>
      <Dialog.Title>Sort by</Dialog.Title>
      <Dialog.Content>
        {buttons.map(b => (
          <Button
            testID={`sort-dialog-button-${b.title}`}
            key={b.title}
            style={styles.button}
            onPress={() => {
              onDismiss();
              b.onPress();
            }}
          >
            {b.title}
          </Button>
        ))}
      </Dialog.Content>
      <Dialog.Actions>
        <Button testID="sort-dialog-cancel" onPress={onDismiss}>
          Cancel
        </Button>
      </Dialog.Actions>
    </Dialog>
  </Portal>
));

SortDialog.defaultProps = {
  onDismiss: () => {},
  visible: false,
  buttons: [
    { title: "Title (A-Z)", onPress: () => {} },
    { title: "Title (Z-A)", onPress: () => {} },
    { title: "Recent page views", onPress: () => {} },
    { title: "Older page views", onPress: () => {} },
    { title: "More total views", onPress: () => {} },
    { title: "Less total views", onPress: () => {} }
  ]
};

SortDialog.propTypes = {
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onPress: PropTypes.func.isRequired
    })
  )
};

const styles = StyleSheet.create({
  button: {
    padding: 8
  }
});

export default SortDialog;
