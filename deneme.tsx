import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const courses = [
    { name: 'Angular', id: 1 },
    { name: 'React Js', id: 2 },
    { name: 'C#', id: 3 },
    { name: 'Bootstrap', id: 4 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <Text style={styles.content}>{item.name}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    
    fontSize: 40, 
    backgroundColor:'yellow',
    marginVertical:10,
    padding:20,
  },
});
