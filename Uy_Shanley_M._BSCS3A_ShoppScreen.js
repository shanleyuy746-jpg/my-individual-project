import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';

const ITEMS = [
  { id: '1', name: 'Notebook', price: 5 },
  { id: '2', name: 'Pen Pack', price: 3 },
  { id: '3', name: 'Backpack', price: 25 },
  { id: '4', name: 'Water Bottle', price: 12 },
];

export default function ShopScreen() {
  const { items, saving, addItem } = useContext(CartContext);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <View style={styles.box}>
      <Text style={styles.header}>Shop (In Cart: {count})</Text>
      {saving && <Text style={styles.saving}>Saving...</Text>}

      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.name} - ${item.price}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => addItem(item)} disabled={saving}>
              <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  saving: { color: '#2563eb', fontWeight: '600', marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' },
  btn: { backgroundColor: '#2563eb', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 6 },
  btnText: { color: '#fff', fontWeight: '600' },
});