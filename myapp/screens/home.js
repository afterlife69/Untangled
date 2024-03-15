import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Home({navigation}){
  return (
    <View style={styles.cloudStorageContainer}>
      <Text style={styles.title}>Hello, Linda Smith!</Text>
      <Text style={styles.subtitle}>Let's manage your cloud storage.</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
      />
      <View style={styles.categoriesContainer}>
        <View style={styles.category}>
          <View style={[styles.categoryIcon, styles.photos]}></View>
          <View style={styles.categoryDetails}>
            <Text style={styles.categoryName}>Photos</Text>
            <Text style={styles.itemCount}>2,451</Text>
          </View>
        </View>
        <View style={styles.category}>
          <View style={[styles.categoryIcon, styles.songs]}></View>
          <View style={styles.categoryDetails}>
            <Text style={styles.categoryName}>Songs</Text>
            <Text style={styles.itemCount}>245</Text>
          </View>
        </View>
        <View style={styles.category}>
          <View style={[styles.categoryIcon, styles.videos]}></View>
          <View style={styles.categoryDetails}>
            <Text style={styles.categoryName}>Videos</Text>
            <Text style={styles.itemCount}>54</Text>
          </View>
        </View>
        <View style={styles.category}>
          <View style={[styles.categoryIcon, styles.documents]}></View>
          <View style={styles.categoryDetails}>
            <Text style={styles.categoryName}>Documents</Text>
            <Text style={styles.itemCount}>841</Text>
          </View>
        </View>
      </View>
      <View style={styles.updateInfo}>
        <Text style={styles.lastUpdate}>Last update: 2 de ago</Text>
        <Text style={styles.lastUpdate}>Last update: day ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cloudStorageContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent : 'center',
    alignItems : 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  category: {
    flex: 1,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  photos: {
    backgroundColor: 'blue', // Change to appropriate color/image
  },
  songs: {
    backgroundColor: 'green', // Change to appropriate color/image
  },
  videos: {
    backgroundColor: 'red', // Change to appropriate color/image
  },
  documents: {
    backgroundColor: 'orange', // Change to appropriate color/image
  },
  categoryDetails: {
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemCount: {
    fontSize: 14,
    color: '#666666',
  },
  updateInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lastUpdate: {
    fontSize: 12,
    color: '#999999',
  },
});