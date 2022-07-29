import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types'
import { useDispatch } from 'react-redux';
import Button from '../components/UI/Button';
import { logout } from '../store/slices/auth';
import { AppDispatch } from '../store';

type Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const ProfileScreen: React.FC<Props> = (props) => {
  const { navigation } = props
  const dispatch = useDispatch<AppDispatch>()

  return (
    <View style={styles.screen}>
      <Button onPress={() => dispatch(logout())}>Logout</Button> 
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default ProfileScreen;