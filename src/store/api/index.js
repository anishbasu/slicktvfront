import fetch from 'isomorphic-fetch'
import api from './config'

const makeHeaders = (authToken, otherHeaders = {}) => ({
    ...otherHeaders,
    "Content-Type": "application/json",
    "X-Auth-Token": authToken
})

export const register = (username, password, email) => {
    return fetch(
        api.makePath(api.paths.userActions),
        {
            method: "PUT",
            body: JSON.stringify(
                    {username, password, email}
                ),
            headers: {"Content-Type": "application/json"}
        }).then(response => response.json(), error => console.log(error))
}

export const login = (username, password) => {
    return fetch(
            api.makePath(api.paths.login),
            {
                method: "POST",
                body: JSON.stringify(
                        {username, password}
                    ),
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response => response.json(), error => console.log(error))
}

export const userDetails = (auth, username) => {
    return fetch(
            api.makePath(api.paths.userDetails(username)),
            {
                method: "GET",
                headers: makeHeaders(auth)
            })
        .then(response => response.json(), error => console.log(error))
}

export const categoryList = (auth) => {
    return fetch(
            api.makePath(api.paths.categoryList),
            {
                headers: makeHeaders(auth)
            })
        .then(response => response.json(), error => console.log(error))
}

export const channelsByCategory = (auth, category_name) => {
    return fetch(
            api.makePath(api.paths.channelsByCategory(category_name)),
            {
                headers: makeHeaders(auth)
            })
        .then(response => response.json(), error => console.log(error))
}

export const channelDetails = (auth, channel_name) => {
    return fetch(
            api.makePath(api.paths.channelDetails(channel_name)),
            {
                headers: makeHeaders(auth)
            })
        .then(response => response.json(), error => console.log(error))
}

export const channelStream = (auth, channel_name) => {
    return fetch(
            api.makePath(api.paths.channelStream(channel_name)),
            {
                headers: makeHeaders(auth)
            })
        .then(response => response.json(), error => console.log(error))
}

export const events = (auth) => {
    return fetch(
            api.makePath(api.paths.events()),
            {
                headers: makeHeaders(auth)
            })
        .then(response => response.json(), error => console.log(error))
}