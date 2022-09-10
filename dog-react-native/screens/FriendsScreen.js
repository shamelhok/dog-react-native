import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FriendsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends</Text>
    </View>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6d186",
    alignItems: "center",
    justifyContent: "center",
  },
});
