import React, { useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import { database } from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";

const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const saveNewUser = async () => {
    if (state.name === "" || state.email === "" || state.phone === "") {
      Alert.alert("Error", "Por favor, completa todos los campos");
    } else {
      setLoading(true);
      try {
        await addDoc(collection(database, "usuarios"), state);
        setLoading(false);
        props.navigation.navigate("UsersList");
      } catch (error) {
        setLoading(false);
        Alert.alert("Error", "Hubo un problema al guardar el usuario");
      }
    }
  };

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre del Usuario"
          onChangeText={(value) => handleChangeText("name", value)}
          value={state.name}
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email del Usuario"
          onChangeText={(value) => handleChangeText("email", value)}
          value={state.email}
          keyboardType="email-address"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Teléfono del Usuario"
          onChangeText={(value) => handleChangeText("phone", value)}
          value={state.phone}
          keyboardType="phone-pad"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={saveNewUser}>
        <Text style={styles.buttonText}>Guardar Usuario</Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#1e90ff"
          style={styles.loading}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#f4f6f9",
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loading: {
    marginTop: 20,
  },
});

export default CreateUserScreen;
