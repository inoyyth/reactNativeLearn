import React, {FunctionComponent, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';

type Item = {
  key: number;
  item: string;
};

const FlatlistSectionList: FunctionComponent = () => {
  const [items, setItems] = useState<Item[]>([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 9, item: 'Item 9'},
    {key: 10, item: 'Item 10'},
    {key: 11, item: 'Item 11'},
    {key: 12, item: 'Item 12'},
  ]);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh: Function = () => {
    setRefreshing(true);
    setItems([
      ...items,
      {key: items.length + 1, item: 'Item ' + (items.length + 1)},
    ]);
    setRefreshing(false);
  };

  const renderItem: Function = (item: Item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.item}</Text>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item: Item, index: number) => `${index}`}
      data={items}
      renderItem={({item}: {item: Item}) => renderItem(item)}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => onRefresh()}
          colors={['#ff00ff']}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default FlatlistSectionList;
