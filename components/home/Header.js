import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                {/* <Text style={{ color: 'white' }}>Header</Text> */}
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
            </TouchableOpacity>
            <View style={styles.iconsConatainer}>
                <TouchableOpacity>
                    {/* <Text style={{ color: 'white' }}>Header</Text> */}
                    <Image style={styles.icon} source={require('../../assets/iconadd.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    {/* <Text style={{ color: 'white' }}>Header</Text> */}
                    <Image style={styles.icon} source={require('../../assets/likeicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image style={styles.icon} source={require('../../assets/messageicon.png')} />
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexdirection: 'row',
        marginHorizontal: 20,
    },
    iconsConatainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // width: 100,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
    },
    unreadBadge: {
        backgroundColor: 'red',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25
    },
    unreadBadgeText: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
    },
});

export default Header;