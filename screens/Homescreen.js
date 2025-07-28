import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import Header from '../components/home/Header'
import Stories from '../components/home/stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/postdata'
import BottomTabs from '../components/home/BottomTabs' // Pfad ggf. anpassen

const Homescreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <Header />
                <Stories />
                <ScrollView>
                    {POSTS.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </ScrollView>
            </View>
            <View style={{ position: 'absolute', bottom: 0 }}>
                <BottomTabs />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})

export default Homescreen


