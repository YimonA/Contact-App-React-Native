import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

const ContactItem = ({ item, removeContactHandler }) => {
  const deleteHandler = () => {
    removeContactHandler(item.id);
  };
  return (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>name - {item.name} </Text>
      <Text style={styles.contactNumber}>phone - {item.phone}</Text>
      <Button title="Delete" color="#fa3118" onPress={deleteHandler} />
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  contactItem: {
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#2196f3",
    borderRadius: 8,
  },
  contactName: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
  },
  contactNumber: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 8,
  },
});
