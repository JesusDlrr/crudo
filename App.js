
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormScreen from './components/New';
import ListScreen from './components/Books';
import EditScreen from './components/Update';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Libros" component={ListScreen} options={({ navigation, route }) => ({
          headerRight: () => (
            <Button title="Nuevo lirbo" onPress={() => { navigation.navigate("Nuevo") }} />
          )
        })} />
        <Stack.Screen name="Nuevo" component={FormScreen} />
        <Stack.Screen name="Modificar" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
