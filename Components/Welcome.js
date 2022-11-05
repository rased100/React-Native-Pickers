import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const welcome = () => {
    return (
        <View style={styles.welPage}>

            <View style={styles.topLogo}></View>
            <Image
                style={styles.gitl}
                source={require('../assets/Girl_with_luggage.png')}
            />
            <Text style={styles.welText}>Welcome To Pickrs</Text>
            <Text style={styles.welSmText}>There are many variations of passages of Lorem Ipsum available of passages of Lorem Ipsum available of.</Text>
            <View style={styles.LoginButton}>
                <Pressable style={styles.lBtn}>
                    <Text style={styles.lBtnText}>Log in</Text>
                </Pressable>
                <Pressable style={styles.sBtn}>
                    <Text style={styles.sBtnText}>Sign up</Text>
                </Pressable>
            </View>
            <Text style={styles.btmText}>Take tour as a guest</Text>
        </View>
    )
}

export default welcome

const styles = StyleSheet.create({
    topLogo: {
        position: 'absolute',
        height: 245,
        width: 129,
        transform: [{ rotate: '-45deg' }],
        left: -8,
        top: -55,
        backgroundColor: '#001E6C',
        borderBottomRightRadius: 120,
        borderBottomLeftRadius: 120,

    },
    gitl: {
        top: 20
    },
    welPage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    welSmText: {
        fontSize: 11,
    },
    LoginButton: {
        flexDirection: 'row',
        padding: 20,
    },
    lBtn: {
        backgroundColor: '#001E6C',
        borderRadius: 10,
        paddingTop: 7,
        paddingRight: 36,
        paddingBottom: 7,
        paddingLeft: 36,
        margin: 5
    },
    lBtnText: {
        color: 'white',
    },
    sBtn: {
        backgroundColor: '#e3dfdf',
        borderRadius: 10,
        paddingTop: 7,
        paddingRight: 36,
        paddingBottom: 7,
        paddingLeft: 36,
        margin: 5
    },
    sBtnText: {
        color: 'black',
    },
    btmText: {
        fontSize: 13,
        color: '#307575',
        textDecorationLine: 'underline'
    }
})