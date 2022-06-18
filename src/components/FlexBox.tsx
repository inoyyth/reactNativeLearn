import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlexBox: FunctionComponent = () => {
  return (
    <View style={styles.body}>
      {/* <Text style={styles.text}>FlexBox</Text> */}
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderTopWidth: 1,
    marginTop: 30,
    flexDirection: 'column',
  },
  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
  },
});
