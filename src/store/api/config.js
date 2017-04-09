export default {
    makePath: (path) => `http://localhost:8000/${path}`,
    paths: {
        login : `login`,
        userActions:  `user`,
        categoryList: `categories`,
        userDetails: (user_name) => `${this.paths.userActions}/${user_name}`,
        channelsByCategory: (category) => `category/${category}`,
        channelDetails: (channel_name) => `channel/${channel_name}`,
        channelStream: (channel_name) => `channel/${channel_name}/stream`
    }
}