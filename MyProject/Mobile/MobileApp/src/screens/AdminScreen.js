import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AdminScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin</Text>
      <Text style={styles.text}>This page is protected and only for admins.</Text>
      <Button title="Sign out" onPress={() => navigation.navigate('Landing')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 12 },
  text: { fontSize: 16, marginBottom: 20 },
});
