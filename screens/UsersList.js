import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { database } from "../database/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import UserItem from "./UserItem";

const UsersList = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, "usuarios");
    const q = query(collectionRef, orderBy("name", "asc")); // Ordenar por nombre de forma ascendente

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          phone: doc.data().phone,
        }))
      );
    });
    return unsuscribe;
  }, []);

  const renderUserItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("UserDetail", { user: item })}
    >
      <UserItem {...item} />
      <View style={styles.detailsButtonContainer}>
        <Text style={styles.detailsButtonText}>Ver Detalles</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuarios</Text>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 15,
  },
  detailsButtonContainer: {
    marginTop: 10,
    backgroundColor: "#4A90E2",
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UsersList;
