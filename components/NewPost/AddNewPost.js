import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FormikUploader from './FormikUploader'

const AddNewPost = () => {
    return (
        <View style={styles.container}>
            <Header />
            <FormikUploader />
        </View>
    )
}

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image
                    source={{ uri: 'https://img.icons8.com/?size=100&id=40217&format=png&color=000000' }}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            <Text style={styles.headertext}>New Post</Text>
            <Text></Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    headerContent: {
        flexDirection: 'row', // <-- jetzt nebeneinander
        alignItems: 'center',
    },
    headertext: {
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 25,
    },
})



export default AddNewPost