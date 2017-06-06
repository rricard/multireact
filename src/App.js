import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Components
const Card = ({ children }) => <View style={styles.card}>{children}</View>;
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />;

const App = () => (
  <Card>
    <Title>Hello</Title>
    <Photo uri="http://jesuisunechev.re/img/chevre_de_verzasca.jpg" />
  </Card>
);

// Styles
const styles = StyleSheet.create({
  card: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    height: 40,
    marginVertical: 10,
    width: 40
  }
});

export default App;
