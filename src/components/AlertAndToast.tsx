import React, {FunctionComponent, useState} from 'react';
import {
  // Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';

const AlertAndToast: FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [submited, setSubmited] = useState<boolean>(false);

  const submitHandler: Function = () => {
    if (name.length > 3) {
      setSubmited(!submited);
    } else {
      //   Alert.alert(
      //     'Warning',
      //     'Name must be at least 3 characters long',
      //     [
      //       {
      //         text: 'Do Not Show Again',
      //         onPress: () => console.warn('Do Not Show Pressed'),
      //         style: 'destructive',
      //       },
      //       {
      //         text: 'Cancel',
      //         onPress: () => console.warn('Cancel Pressed'),
      //         style: 'destructive',
      //       },
      //       {
      //         text: 'OK',
      //         onPress: () => console.warn('OK Pressed'),
      //         style: 'destructive',
      //       },
      //     ],
      //     {cancelable: true, onDismiss: () => console.warn('Alert Dismissed')},
      //   );
      ToastAndroid.showWithGravityAndOffset(
        'Name must be at least 3 characters long',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        0,
        0,
      );
    }
  };

  return (
    <ScrollView style={{height: '100%'}}>
      <View style={styles.body}>
        <Text style={styles.text}>Please Write your name:</Text>
        <TextInput
          style={{...styles.input, textAlign: 'left'}}
          placeholder="input your name"
          onChangeText={(value: string) => setName(value)}
          autoFocus={true}
          keyboardType="default"
        />
        <Button title="Submit" onPress={() => submitHandler()} />
      </View>
      <View>{submited && <Text>Your Name is {name}</Text>}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 15,
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    marginTop: 10,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});

export default AlertAndToast;
