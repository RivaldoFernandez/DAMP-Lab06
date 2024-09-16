import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../database/firebase";

function EditUserScreen({ route, navigation }) {
  const { user } = route.params;
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSave = async () => {
    try {
      const userRef = doc(database, "usuarios", user.id);
      await updateDoc(userRef, {
        name,
        email,
        phone,
      });
      Alert.alert(
        "Usuario actualizado",
        "Los datos del usuario han sido actualizados exitosamente."
      );
      navigation.goBack();
    } catch (error) {
      Alert.alert(
        "Error",
        "Hubo un problema al actualizar los datos del usuario."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text style={styles.label}>Phone</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} />
      <Button title="Guardar cambios" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default EditUserScreen;
