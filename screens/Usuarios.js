import * as React from "react";
import * as RN from "react-native";
import { database } from "firebase/database";
import { doc } from "firebase/firestore";

export default function Usuarios({ id, email, name, phone }) {
  return (
    <RN.View>
      <RN.Text>{email}</RN.Text>
      <RN.Text>{name}</RN.Text>
      <RN.Text>{phone}</RN.Text>
    </RN.View>
  );
}
