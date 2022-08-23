import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import React, {Component} from 'react';
import CoinsItem from './CoinsItem';
import Http from '../../libs/http';
import Colors from '../../res/Colors';

class CoinsScreen extends Component {
  state = {
    coins: [],
    loading: false,
  };
  componentDidMount = async () => {
    this.setState({loading: true});
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    this.setState({coins: res.data, loading: false});
  };

  handlePress = coin => {
    this.props.navigation.navigate('CoinDetail', {coin});
  };

  render() {
    const {coins, loading} = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator style={styles.loader} color="gray" size="large" />
        ) : null}
        <FlatList
          data={coins}
          renderItem={({item}) => (
            <CoinsItem item={item} onPress={() => this.handlePress(item)} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
    justifyContent: 'center',
  },
  button: {
    margin: 15,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
