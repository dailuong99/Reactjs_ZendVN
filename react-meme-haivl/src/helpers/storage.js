import parseJwt from "./parse.jwt";

const keyToken = 'MEME_TOKEN';

const Storage = {
    setToken(token) {
        localStorage.setItem(keyToken, token)
    },
    getToken() {
        const token = localStorage.getItem(keyToken);
        try {
            const parseObj = parseJwt(token)
            if (parseObj && parseObj.id) {
                return token
            }
            return '';
        } catch (error) {
            return '';
        }
    },
    removeToken() {
        localStorage.setItem(keyToken, "");
    }
}

export default Storage;