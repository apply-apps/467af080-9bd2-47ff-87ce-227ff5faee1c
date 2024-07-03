// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={stylesHome.container}>
      <Text style={stylesHome.title}>Welcome to Tale App</Text>
      <Button title="Read Tale 1" onPress={() => navigation.navigate('Tale1')} />
      <Button title="Read Tale 2" onPress={() => navigation.navigate('Tale2')} />
      <Button title="Read Tale 3" onPress={() => navigation.navigate('Tale3')} />
    </SafeAreaView>
  );
}

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

function Tale1Screen() {
  return (
    <SafeAreaView style={stylesTale.container}>
      <ScrollView contentContainerStyle={stylesTale.scrollView}>
        <Text style={stylesTale.title}>Tale 1: The Little Red Hen</Text>
        <Text style={stylesTale.text}>
          Once upon a time, there was a little red hen who lived on a farm.
          {...mock tale content...}
          And they all lived happily ever after.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Tale2Screen() {
  return (
    <SafeAreaView style={stylesTale.container}>
      <ScrollView contentContainerStyle={stylesTale.scrollView}>
        <Text style={stylesTale.title}>Tale 2: The Three Little Pigs</Text>
        <Text style={stylesTale.text}>
          Once upon a time, there were three little pigs who wanted to build their own houses.
          {...mock tale content...}
          And they all lived happily ever after.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

function Tale3Screen() {
  return (
    <SafeAreaView style={stylesTale.container}>
      <ScrollView contentContainerStyle={stylesTale.scrollView}>
        <Text style={stylesTale.title}>Tale 3: Goldilocks and the Three Bears</Text>
        <Text style={stylesTale.text}>
          Once upon a time, there was a little girl named Goldilocks.
          {...mock tale content...}
          And they all lived happily ever after.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const stylesTale = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tale1" component={Tale1Screen} />
        <Stack.Screen name="Tale2" component={Tale2Screen} />
        <Stack.Screen name="Tale3" component={Tale3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}