import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const UserItem = ({ name, email, phone }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesome name="user" size={28} color="#4A90E2" />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome name="envelope" size={24} color="#7B8D93" />
        <Text style={styles.text}>{email}</Text>
      </View>
      <View style={styles.row}>
        <FontAwesome name="phone" size={24} color="#34C759" />
        <Text style={styles.text}>{phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});

export default UserItem;
