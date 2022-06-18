import React, {FunctionComponent, useEffect} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {useSelector, connect} from 'react-redux';
import {setName, setAge, setEmail} from '../redux/action';
import {RootState} from '../redux/store';
import PushNotification from 'react-native-push-notification';

type Props = {
  navigation: any;
  setName: Function;
  setAge: Function;
  setEmail: Function;
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

const createTable: Function = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS ' +
        'users ' +
        '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age TEXT, email TEXT);',
      [],
      () => {
        console.log('create table success');
      },
      (error: any) => {
        console.log(error);
      },
    );
  });
};

const Login: FunctionComponent<Props> = (props: Props) => {
  const {name, age, email} = useSelector((state: RootState) => state.user);

  const handleLogin: Function = async () => {
    if (name === '') {
      Alert.alert('Warning', 'Please enter your name');
    } else {
      try {
        await db.transaction(tx => {
          tx.executeSql(
            'INSERT INTO users (Name, Age, email) VALUES (?, ?, ?)',
            [name, age, email],
            () => {
              console.log('insert success');
            },
            (error: any) => {
              console.log(error);
            },
          );
        });
        PushNotification.cancelAllLocalNotifications();
        PushNotification.localNotification({
          channelId: 'test-channel',
          title: 'Login Success' + name,
          message: 'Welcome ' + name,
          vibrate: true,
          vibration: 500,
          priority: 'high',
          playSound: true,
          actions: ['Yes', 'No'],
          bigText: 'Welcome ' + name + ' to our app',
        });
        // PushNotification.localNotificationSchedule({
        //   channelId: 'test-channel',
        //   title: 'Alaram',
        //   message: 'Hello ' + name,
        //   date: new Date(Date.now() + 5 * 1000),
        //   allowWhileIdle: true,
        // });
        props.navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const checkIsLogin: Function = async () => {
    try {
      await db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM users ORDER BY ID DESC LIMIT 1',
          [],
          (trx: any, results: any) => {
            console.log(results);
            const len = results.rows.length;
            if (len > 0) {
              props.navigation.navigate('Home');
            }
          },
          (error: any) => {
            console.log(error);
          },
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createChannels: Function = () => {
    PushNotification.createChannel(
      {
        channelId: 'test-channel',
        channelName: 'Test Channel',
      },
      () => {},
    );
  };

  useEffect(() => {
    createTable();
    checkIsLogin();
    createChannels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.body}>
      <Image style={styles.logo} source={require('../../assets/checked.png')} />
      <Text style={styles.text}>Async Storage</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={value => props.setName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={value => props.setAge(parseInt(value, 10))}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={value => props.setEmail(value)}
      />
      <Button title="Login" color="#1eb900" onPress={() => handleLogin()} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
  text: {
    fontSize: 30,
    color: '#fff',
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
});

export default connect(null, {
  setName,
  setAge,
  setEmail,
})(Login);
