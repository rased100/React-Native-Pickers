import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

const Login = () => {
    return (
        <View>
            <Text style={styles.loginTxt}><FontAwesomeIcon icon={faMugSaucer} style={styles.icon} /> Log in</Text>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    loginTxt: {
        backgroundColor: '#001E6C',
        padding: 7,
        color: 'white',
        textAlign: 'center'
    },
    loginPage: {
        // alignItems: 'center',
    },
    icon: {
        color: 'white'
    }
})