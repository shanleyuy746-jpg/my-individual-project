import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrap: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  rowInput: { flexDirection: 'row', marginBottom: 14 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 8, marginRight: 8 },
  btn: { backgroundColor: '#2563eb', justifyContent: 'center', paddingHorizontal: 14, borderRadius: 6 },
  btnTxt: { color: '#fff', fontWeight: '600' },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#eee' },
  noteText: { flex: 1, fontSize: 15, marginRight: 8 },
  actions: { flexDirection: 'row' },
  edit: { color: '#2563eb', fontWeight: '600', marginRight: 12 },
  del: { color: '#dc2626', fontWeight: '600' },
  empty: { color: '#777', marginTop: 20, textAlign: 'center' },
});