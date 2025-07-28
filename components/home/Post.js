import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { post } from '../../data/postdata'

const PostFooterIcons = [
    {
        name: 'Like',
        imageurl: 'https://img.icons8.com/?size=100&id=L2sPz0nl-coE&format=png&color=000000',
    },
    {
        name: 'Liked',
        imageurl: 'https://img.icons8.com/?size=100&id=V6zmBDTUPL-g&format=png&color=000000',
    },
    {
        name: 'Comment',
        imageurl: 'https://img.icons8.com/?size=100&id=QxNDCQCA0COh&format=png&color=000000',
    },
    {
        name: 'Share',
        imageurl: 'https://img.icons8.com/?size=100&id=90284&format=png&color=000000',
    },
    {
        name: 'Save',
        imageurl: 'https://img.icons8.com/?size=100&id=JZWjJrPiI1K6&format=png&color=000000',
    }
]

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', margin: 5 }}>
        <Text style={{ fontWeight: '600' }}>{post.likes} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text>
            <Text style={{ fontSize: 14, fontweight: '600', marginLeft: 5 }}>{post.user} </Text>
            <Text style={{ fontSize: 14 }}>{post.caption}</Text>
        </Text>
    </View>
)

const CommentsSection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {post.comments?.length > 0 && (
            <Text style={{ color: 'gray' }}>
                View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}
                {post.comments.length > 1 ? ' comments' : ' comment'}
            </Text>
        )}
    </View >
)

const Comments = ({ post }) => (
    <>
        {post.comments?.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ fontSize: 14, color: 'gray' }}>{comment.user}</Text>
                <Text style={{ fontSize: 14 }}> {comment.comment}</Text>
            </View>
        ))}
    </>
)

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation="vertical" />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
            </View>
            <Likes post={post} />
            <Caption post={post} />
            <CommentsSection post={post} />
            <Comments post={post} />
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginleft: 5 }}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={{ color: 'black', marginleft: 5, fontweight: 'bold' }}>{post.user}</Text>
        </View>
        <Text style={{ color: 'black', fontweight: '900' }}>...</Text>
    </View>
)

const PostImage = ({ post }) => {
    return [
        <View style={{ width: '100%', height: 450 }}>
            <Image
                source={{ uri: post.imageurl }}
                style={{ height: '100%', resizeMode: 'cover' }} />
        </View>,
    ]
}

const PostFooter = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
            {/* Linke Icons */}
            <View style={styles.leftFooterIconsContainer}>
                <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[0].imageurl} />
                <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[2].imageurl} />
                <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[3].imageurl} />
            </View>

            {/* Rechtes Icon */}
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[4].imageurl} />
            </View>
        </View>
    );
};

const Icon = ({ imgStyle, imgUrl }) => {
    return (
        <TouchableOpacity>
            <Image style={imgStyle} source={{ uri: imgUrl }} />
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    story: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',
    },
    footerIcon: {
        width: 33,
        height: 33,
    },
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    }
})

export default Post