class ServerMethods {

    getUser(username, password) {
        return fetch('/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(result => result.json());
    }
}

export default new ServerMethods();