import React, {FunctionComponent, useState} from 'react';
import {
  RefreshControl,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Item = {
  title: string;
  data: string[];
};

const SectionListComp: FunctionComponent = () => {
  const [data, setData] = useState<Item[]>([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh: Function = () => {
    setRefreshing(true);
    setData([
      ...data,
      {
        title: 'Title ' + (data.length + 1),
        data: [
          'Item ' + (data.length + 1) + '-1',
          'Item ' + (data.length + 1) + '-2',
        ],
      },
    ]);
    setRefreshing(false);
  };

  const renderItem: Function = (item: Item) => {
    return (
      // <View style={styles.item}>
      <Text style={styles.text}>{item}</Text>
      // </View>
    );
  };

  const renderHeader: Function = (item: Item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SectionList
      keyExtractor={(item, index) => item + index}
      sections={data}
      renderItem={({item}) => renderItem(item)}
      renderSectionHeader={({section}) => renderHeader(section)}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => onRefresh()}
          colors={['#ff00ff']}
        />
      }
    />
    // <FlatList
    //   keyExtractor={(item: Item, index: number) => `${index}`}
    //   data={items}
    //   renderItem={({item}: {item: Item}) => renderItem(item)}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={refreshing}
    //       onRefresh={() => onRefresh()}
    //       colors={['#ff00ff']}
    //     />
    //   }
    // />
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

export default SectionListComp;
