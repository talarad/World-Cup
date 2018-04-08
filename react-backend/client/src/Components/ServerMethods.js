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

    bet(user, matchID, homeTeamScore, awayTeamScore) {
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
}

export default new ServerMethods();