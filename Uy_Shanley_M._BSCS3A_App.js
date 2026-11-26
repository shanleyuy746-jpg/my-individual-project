import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartProvider, CartContext } from './CartContext';
import ShopScreen from './ShopScreen';
import CartScreen from './CartScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  const { items } = useContext(CartContext);
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarBadge: count > 0 ? count : undefined }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </CartProvider>
  );
}