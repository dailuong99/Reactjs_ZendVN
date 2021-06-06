const keyToken = 'MEME_TOKEN';

const Storage = {
    setToken(token) {
        localStorage.setItem(keyToken, token)
    },
    getToken(token){
        return localStorage.getItem(keyToken);
    }
}

export default Storage;