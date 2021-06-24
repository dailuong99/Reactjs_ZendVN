import { api } from './apilogin';

export const userService = {
    getUserById({ userid }) {
        return api
            .callWithAuth()
            .get(`/member/member.php?userid=${userid}`);
    },
    updateProfile(formData){
        return api
            .callWithAuth({'accept' :'multipart/form-data'})
            .post('/member/update.php',formData);
    }
}

