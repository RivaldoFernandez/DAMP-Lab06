import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import UsersList from "./screens/UsersList";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import EditUserScreen from "./screens/EditUserScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CreateUserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function UsersListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditUserScreen"
        component={EditUserScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Crear Usuario"
        component={CreateUserStack}
        options={{
          tabBarLabel: "Crear Usuario",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lista de Usuarios"
        component={UsersListStack}
        options={{
          tabBarLabel: "Lista de Usuarios",
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
