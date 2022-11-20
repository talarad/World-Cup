class ServerMethods {
    getData() {
        return fetch('/site', {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json());
    }

    getUser(username, password) {
        return fetch('/site', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(result => result.json());
    }

    signOut(token) {
        return fetch('/site/signout', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        })
    }

    loginWithToken(token) {
        return fetch('/site/loginWithToken', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token })
        }).then(result => result.json());
    }

    bet(user, matchID, awayTeamScore, homeTeamScore) {
        return fetch('/site/bet', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, matchID, homeTeamScore, awayTeamScore })
        }).then(result => result.json());
    }

    addToGroup(user, friendUsername, groupID) {
        return fetch('/site/addToGroup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, friendUsername, groupID })
        }).then(result => result.json());
    }

    createGroup(user, groupName) {
        return fetch('/site/createGroup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, groupName })
        }).then(result => result.json());
    }

    leaveGroup(user, groupID) {
        return fetch('/site/leaveGroup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, groupID })
        }).then(result => result.json());
    }

    register(username, password, firstName, lastName) {
        return fetch('/site/register', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, firstName, lastName })
        }).then(result => result.json());
    }

    placeScore(user, game, awayTeamScore, homeTeamScore) {
        return fetch('/site/placeScore', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user, game, homeTeamScore, awayTeamScore })
        }).then(result => result.json());
    }

    // getGames() {
    //     return fetch('/site/games', {
    //         credentials: 'include',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(result => result.json());
    // }
}

export default new ServerMethods();