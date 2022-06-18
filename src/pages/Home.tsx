import React, {FunctionComponent, useEffect, useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import SQLite from 'react-native-sqlite-storage';
import {useSelector} from 'react-redux';

type Props = {
  navigation: any;
  route: any;
};

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  (error: any) => {
    console.log(error);
  },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ScreenA: FunctionComponent<Props> = props => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [id, setId] = useState<number>(0);
  const params: any = useSelector((state: any) => state.user);

  const getStorage: Function = async () => {
    console.log('PRRM', params);
    try {
      await db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM users ORDER BY ID DESC LIMIT 1',
          [],
          (trx: any, results: any) => {
            console.log(results);
            const len = results.rows.length;
            if (len > 0) {
              setName(results.rows.item(0).Name);
              setAge(results.rows.item(0).Age);
              setEmail(results.rows.item(0).email);
              setId(results.rows.item(0).ID);
            }
          },
          (error: any) => {
            console.log(error);
          },
        );
      });
      // await AsyncStorage.getItem('name').then(value => {
      //   if (value !== null) {
      //     setName(value);
      //   }
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate: Function = async () => {
    try {
      await db.transaction(tx => {
        tx.executeSql(
          'UPDATE users SET Name = ?, Age = ?, email = ? WHERE ID = ?',
          [name, age, email, id],
          () => {
            Alert.alert('Success', 'Update success');
          },
          (error: any) => {
            console.log(error);
          },
        );
      });
      // await AsyncStorage.getItem('name').then(value => {
      //   if (value !== null) {
      //     setName(value);
      //   }
      // });
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemove: Function = async () => {
    try {
      // await AsyncStorage.removeItem('name');
      props.navigation.navigate('Login');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.body}>
      <View>
        <Text style={styles.text}>
          Welcome {name} your Age is {age} and Your Email is {email} !
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          onChangeText={value => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          onChangeText={value => setAge(parseInt(value, 10))}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Update" color="#1eb900" onPress={() => handleUpdate()} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Remove" color="#1eb900" onPress={() => handleRemove()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  buttonWrapper: {
    marginTop: 20,
  },
});

export default ScreenA;
