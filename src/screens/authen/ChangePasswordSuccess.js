import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import styles from '../../styles/screens/changpasswordStyle'

const ChangePasswordSuccess = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/successmark.jpg')} />
      <Text style={styles.textChang}> Password Changed!</Text>
      <Text style={styles.textSub}>Your password has been changed successfully.</Text>
      <View style={styles.containerButton}>
        <CustomButton
          style={{ marginTop: 35 }}
          title={'Back to Login'}
        />
      </View>

    </View>

  )
}

export default ChangePasswordSuccess;