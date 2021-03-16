import {rerenderEntireTree} from "./render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi!", likesCount:1},
            {id: 2, message: "How are u?", likesCount:5},
            {id: 3, message: "Amazing!!", likesCount:4},
            {id: 4, message: "Happy codding!", likesCount:1},
            {id: 5, message: "Simple is better than complex!", likesCount:4},
        ],
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Sasha"},
            {id: 2, name: "Sveta"},
            {id: 3, name: "Misha"},
            {id: 4, name: "Lexa"},
        ],

        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How are u?"},
            {id: 3, message: "Amazing!!"},
            {id: 4, message: "Happy codding!"},
            {id: 5, message: "Simple is better than complex!"},
        ],
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 4,
    }

    state.profilePage.posts.push(newPost)

    rerenderEntireTree(state)

}


export default state;
