import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppLogo = () => {
    return (
        <View>
            <Image
                source={require('../assets/Logo.png')}
            />
        </View>
    )
}

export default AppLogo

const styles = StyleSheet.create({})