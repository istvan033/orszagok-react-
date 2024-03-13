/*
* File: app.js
* Author: Pásztor István
* Copyright: 2024, Pásztor István
* Group: Szoft V
* Date: 2024-03-13
* Github: https://github.com/istvan033/
* Licenc: GNU GPL
*/


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const YourComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/orszagok');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      
      <Text style={styles.text}>{`Név: ${item.nev}`}</Text>
      <Text style={styles.text}>{`Terület: ${item.terulet}`}</Text>
      <Text style={styles.text}>{`Népesség: ${item.nepesseg}`}</Text>
      <Text style={styles.text}>{`Főváros: ${item.fovaros}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Országok</Text>
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#001f3f',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ffffff', // Fehér szövegszín
  },
  itemContainer: {
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  text: {
    color: '#ffffff', // Fehér szövegszín
  },
});

export default YourComponent;
