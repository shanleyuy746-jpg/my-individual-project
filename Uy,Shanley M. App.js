import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';

// --- MOCK DATA (Updated with Shanley's Peso Data) ---
const portfolioSummary = {
  totalBalance: '₱2,450,150.00',
  dayProfit: '+₱71,280.50 (3.01%)',
  assetsCount: '8 Assets',
  topPerformer: 'Solana (+8.4%)',
};

const initialMarketData = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', price: '₱3,695,400.00', change: '1.45%', changeType: 'up', color: '#F7931A' },
  { id: '2', name: 'Ethereum', symbol: 'ETH', price: '₱200,115.00', change: '-0.82%', changeType: 'down', color: '#627EEA' },
  { id: '3', name: 'Solana', symbol: 'SOL', price: '₱8,380.50', change: '8.42%', changeType: 'up', color: '#14F195' },
  { id: '4', name: 'Cardano', symbol: 'ADA', price: '₱27.60', change: '-2.15%', changeType: 'down', color: '#0033AD' },
  { id: '5', name: 'Ripple', symbol: 'XRP', price: '₱33.90', change: '0.12%', changeType: 'up', color: '#23292F' },
];

const watchListData = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', price: '₱3,695,400.00', change: '1.45%', changeType: 'up', color: '#F7931A' },
  { id: '3', name: 'Solana', symbol: 'SOL', price: '₱8,380.50', change: '8.42%', changeType: 'up', color: '#14F195' },
];

// --- MAIN UI COMPONENT ---
export default function App() {
  const [activeTab, setActiveTab] = useState('All');
  const marketList = activeTab === 'All' ? initialMarketData : watchListData;

  const renderMarketItem = ({ item }) => {
    const isPositive = item.changeType === 'up';
    return (
      <View style={styles.cryptoCard}>
        <View style={styles.cryptoLeft}>
          <View style={[styles.cryptoIconPlaceholder, { backgroundColor: item.color }]}>
            <Text style={styles.cryptoIconText}>{item.symbol.substring(0, 2)}</Text>
          </View>
          <View style={styles.cryptoMeta}>
            <Text style={styles.cryptoName}>{item.name}</Text>
            <Text style={styles.cryptoSymbol}>{item.symbol}</Text>
          </View>
        </View>
        <View style={styles.cryptoRight}>
          <Text style={styles.cryptoPrice}>{item.price}</Text>
          <Text style={[styles.cryptoChange, { color: isPositive ? '#4CD964' : '#FF3B30' }]}>
            {isPositive ? '+' : ''}{item.change}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.username}>Shanley Uy</Text>
        </View>
        <TouchableOpacity style={styles.notificationBadge}>
          <View style={styles.dot} />
          <Text style={styles.bellText}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>{portfolioSummary.totalBalance}</Text>
          <View style={styles.portfolioPerformance}>
            <Text style={styles.performanceProfit}>{portfolioSummary.dayProfit}</Text>
            <Text style={styles.performanceTime}> (Today)</Text>
          </View>

          {/* Actions */}
          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>💳 Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.actionButtonOutline]}>
              <Text style={[styles.actionButtonText, styles.actionOutlineText]}>📤 Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Stats */}
        <Text style={styles.sectionTitle}>Portfolio Insights</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Assets Held</Text>
            <Text style={styles.statValue}>{portfolioSummary.assetsCount}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Best Performer</Text>
            <Text style={[styles.statValue, { color: '#4CD964' }]}>{portfolioSummary.topPerformer}</Text>
          </View>
        </View>

        {/* Toggles */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'All' && styles.activeTab]}
            onPress={() => setActiveTab('All')}
          >
            <Text style={[styles.tabText, activeTab === 'All' && styles.activeTabText]}>All Markets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Watchlist' && styles.activeTab]}
            onPress={() => setActiveTab('Watchlist')}
          >
            <Text style={[styles.tabText, activeTab === 'Watchlist' && styles.activeTabText]}>Watchlist</Text>
          </TouchableOpacity>
        </View>

        {/* Crypto List */}
        <FlatList
          data={marketList}
          renderItem={renderMarketItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// --- STYLING ---
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0E1A' },
  scrollContent: { paddingBottom: 30 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 15, paddingBottom: 20 },
  greeting: { color: '#8F92A1', fontSize: 14 },
  username: { color: '#FFFFFF', fontSize: 22, fontWeight: '700', marginTop: 2 },
  notificationBadge: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#161C2C', justifyContent: 'center', alignItems: 'center', position: 'relative' },
  dot: { position: 'absolute', top: 10, right: 10, width: 8, height: 8, borderRadius: 4, backgroundColor: '#FF3B30', zIndex: 1 },
  bellText: { fontSize: 18 },
  balanceCard: { backgroundColor: '#1E2942', borderRadius: 24, padding: 24, marginHorizontal: 20, marginBottom: 25 },
  balanceLabel: { color: '#8F92A1', fontSize: 14, fontWeight: '500' },
  balanceAmount: { color: '#FFFFFF', fontSize: 34, fontWeight: '700', marginVertical: 8 },
  portfolioPerformance: { flexDirection: 'row', alignItems: 'center' },
  performanceProfit: { color: '#4CD964', fontSize: 14, fontWeight: '600' },
  performanceTime: { color: '#8F92A1', fontSize: 14 },
  actionRow: { flexDirection: 'row', marginTop: 24, justifyContent: 'space-between' },
  actionButton: { flex: 0.48, backgroundColor: '#3875F6', height: 46, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  actionButtonOutline: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: '#3875F6' },
  actionButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  actionOutlineText: { color: '#3875F6' },
  sectionTitle: { color: '#FFFFFF', fontSize: 18, fontWeight: '700', marginHorizontal: 20, marginBottom: 15 },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 25 },
  statBox: { backgroundColor: '#161C2C', flex: 0.48, borderRadius: 16, padding: 16 },
  statLabel: { color: '#8F92A1', fontSize: 12, marginBottom: 6 },
  statValue: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  tabContainer: { flexDirection: 'row', marginHorizontal: 20, marginBottom: 15, backgroundColor: '#161C2C', borderRadius: 12, padding: 4 },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  activeTab: { backgroundColor: '#1E2942' },
  tabText: { color: '#8F92A1', fontWeight: '600', fontSize: 14 },
  activeTabText: { color: '#FFFFFF' },
  listContainer: { paddingHorizontal: 20 },
  cryptoCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#161C2C', padding: 16, borderRadius: 16, marginBottom: 12 },
  cryptoLeft: { flexDirection: 'row', alignItems: 'center' },
  cryptoIconPlaceholder: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
  cryptoIconText: { color: '#FFFFFF', fontWeight: '700', fontSize: 14 },
  cryptoMeta: { marginLeft: 12 },
  cryptoName: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  cryptoSymbol: { color: '#8F92A1', fontSize: 13, marginTop: 2 },
  cryptoRight: { alignItems: 'flex-end' },
  cryptoPrice: { color: '#FFFFFF', fontSize: 16, fontWeight: '600', textAlign: 'right' },
  cryptoChange: { fontSize: 13, fontWeight: '500', marginTop: 2, textAlign: 'right' },
});