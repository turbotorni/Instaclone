import { USERS } from "./users";

export const POSTS = [
    {
        imageurl: 'https://reactnative.dev/img/tiny_logo.png',
        user: USERS[0].user,
        likes: 7890,
        caption: 'Train Ride to Hogwarts.',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'lololol',
                comment: 'Wow this looks amazing'
            },
            {
                user: 'lololol2',
                comment: 'Wow this looks amazing'
            },
        ],
    },
    {
        imageurl: 'https://reactnative.dev/img/tiny_logo.png',
        user: USERS[1].user,
        likes: 7891,
        caption: 'Train Ride to Hogwarts.',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'lololol',
                comment: 'Wow this looks amazing'
            },
        ],
    },
    {
        imageurl: 'https://reactnative.dev/img/tiny_logo.png',
        user: USERS[2].user,
        likes: 7891,
        caption: 'Train Ride to Hogwarts.',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'lololol',
                comment: 'Wow this looks amazing'
            },
            {
                user: 'lololol2',
                comment: 'Wow this looks amazing'
            },
        ],
    },
]