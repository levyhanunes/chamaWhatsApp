import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo = () => {
    return (
        <Image
        source={require('../../src/logoWhats.png')}
        style={styles.logo}
        />
    )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150
    }
});
