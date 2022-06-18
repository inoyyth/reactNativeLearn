import React, {FunctionComponent, useState} from 'react';
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const TextInputAndKeyboard: FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [submited, setSubmited] = useState<boolean>(false);

  const submitHandler: Function = () => {
    setSubmited(!submited);
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
        <Text style={styles.text}>Please Write your age:</Text>
        <TextInput
          style={{...styles.input, textAlign: 'left'}}
          placeholder="input your age"
          onChangeText={(value: string) => setAge(value)}
          autoFocus={true}
          keyboardType="numeric"
          maxLength={12}
        />
        <Text style={styles.text}>Please Write your address:</Text>
        <TextInput
          multiline
          style={{
            ...styles.input,
            textAlignVertical: 'top',
            textAlign: 'left',
            marginBottom: 10,
          }}
          numberOfLines={4}
          placeholder="input your address"
          onChangeText={(value: string) => setAddress(value)}
        />
        <Button
          title={submited ? 'Clear' : 'Submit'}
          onPress={() => submitHandler()}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => submitHandler()}
          activeOpacity={0.3}>
          <Text style={styles.text}>{submited ? 'Clear' : 'Submit'}</Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={styles.button}
          onPress={() => submitHandler()}
          underlayColor="#dddddd"
          activeOpacity={0.3}>
          <Text style={styles.text}>{submited ? 'Clear' : 'Submit'}</Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback
          style={styles.button}
          onPress={() => submitHandler()}>
          <Text style={styles.text}>{submited ? 'Clear' : 'Submit'}</Text>
        </TouchableWithoutFeedback>
        <Pressable
          onLongPress={() => {
            submitHandler();
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
            ,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>
        {submited && (
          <View>
            <Text style={styles.text}>Your name is: {name}</Text>
            <Text style={styles.text}>Your address is: {address}</Text>
            <Text style={styles.text}>Your age is: {age}</Text>
          </View>
        )}
      </View>
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

export default TextInputAndKeyboard;
