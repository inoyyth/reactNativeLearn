import React, {FunctionComponent, useState} from 'react';
import {
  // Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ImageAndBackground: FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [submited, setSubmited] = useState<boolean>(false);
  const [showWarning, setShowWarning] = useState<boolean>(false);

  const submitHandler: Function = () => {
    if (name.length > 3) {
      setSubmited(!submited);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      source={{
        uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png',
      }}>
      <Modal
        visible={showWarning}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowWarning(false)}>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text>WARNING!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text>The name must be longer than 3 characther</Text>
            </View>
            <Pressable
              onPress={() => setShowWarning(false)}
              style={styles.warning_button}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Please Write your name:</Text>
      <TextInput
        style={{...styles.input, textAlign: 'left'}}
        placeholder="input your name"
        onChangeText={(value: string) => setName(value)}
        autoFocus={true}
        keyboardType="default"
      />
      <Button title="Submit" onPress={() => submitHandler()} />

      <View style={styles.body}>
        {submited ? (
          <View>
            <Text>Your Name is {name}</Text>
            <Image
              style={styles.image}
              source={require('../../assets/checked.png')}
              resizeMode="stretch"
            />
          </View>
        ) : (
          <Image
            style={styles.image}
            source={require('../../assets/warning.png')}
            resizeMode="stretch"
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textAlign: 'center',
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
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 50,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default ImageAndBackground;
