import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';

export default function CartScreen() {
  const { items, removeItem, clearCart } = useContext(CartContext);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <View style={styles.box}>
      <Text style={styles.header}>Cart</Text>

      {items.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text>{item.name} x{item.qty} (${item.price * item.qty})</Text>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${total}</Text>
            <TouchableOpacity style={styles.clearBtn} onPress={clearCart}>
              <Text style={styles.btnText}>Clear</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  empty: { color: '#666', marginTop: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' },
  remove: { color: '#dc2626', fontWeight: '600' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTopWidth: 1, borderColor: '#ddd' },
  total: { fontSize: 18, fontWeight: 'bold' },
  clearBtn: { backgroundColor: '#dc2626', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 6 },
  btnText: { color: '#fff', fontWeight: '600' },
});