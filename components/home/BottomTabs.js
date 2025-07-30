import React, { useState } from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home', active: 'https://img.icons8.com/?size=48&id=2797&format=png&color=000000',
        inactive: 'https://img.icons8.com/?size=48&id=83326&format=png&color=000000'
    },
    {
        name: 'Search', active: 'https://img.icons8.com/?size=48&id=7695&format=png&color=000000',
        inactive: 'https://img.icons8.com/?size=48&id=59878&format=png&color=000000'
    },
    {
        name: 'Reels', active: 'https://img.icons8.com/?size=48&id=YoIaSvIehcuI&format=png&color=000000',
        inactive: 'https://img.icons8.com/?size=48&id=PxI9IPCyBAOD&format=png&color=000000'
    },
    {
        name: 'Shop', active: 'https://img.icons8.com/?size=48&id=8287&format=png&color=000000',
        inactive: 'https://img.icons8.com/?size=48&id=489&format=png&color=000000'
    },
    {
        name: 'Profile', active: 'https://img.icons8.com/ios-filled/48/user-male-circle.png',
        inactive: 'https://img.icons8.com/ios/48/user-male-circle.png'
    },
]

const BottomTabs = () => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)} style={styles.iconContainer}>
            <Image
                source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
                style={[
                    styles.icon,
                    icon.name === 'Profile' && {
                        borderRadius: 50,
                        borderWidth: activeTab === 'Profile' ? 2 : 0,
                        borderColor: '#fff',
                        backgroundColor: '#000',
                    },
                ]}
            />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation="horizontal" color="#333" style={{ width: '100%' }} />
            <View style={styles.container}>
                {bottomTabIcons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        backgroundColor: '#000',
        zIndex: 999,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        width: '100%',
    },
    iconContainer: {
        padding: 8,
    },
    icon: {
        width: 30,
        height: 30,
    },
})

export default BottomTabs

