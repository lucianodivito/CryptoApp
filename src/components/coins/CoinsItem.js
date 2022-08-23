import {View, Text, StyleSheet, Platform, Pressable} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function CoinsItem({item, onPress}) {
  const getArrow = () => {
    if (item.percent_change_1h > 0) {
      return <Text style={styles.arrowUp}>↑</Text>;
    } else {
      return <Text style={styles.arrowDown}>↓</Text>;
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percentText}>{item.percent_change_1h}</Text>
        {getArrow()}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginLeft: Platform.OS == 'ios' ? 16 : 0,
    paddingLeft: Platform.OS == 'ios' ? 0 : 16,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 12,
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 16,
  },
  percentText: {
    color: '#fff',
    fontSize: 12,
    marginRight: 8,
  },
  priceText: {
    color: '#fff',
    fontSize: 14,
  },
  arrowUp: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
  },
  arrowDown: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: -20,
  },
});
