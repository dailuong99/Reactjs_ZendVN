import { apilogin } from './apilogin';

export const userService = {
    getUserById({ userid }) {
        return apilogin
            .callWithAuth()
            .get(`/member/member.php?userid=${userid}`);
    },
    updateProfile(formData){
        return apilogin
            .callWithAuth({'accept' :'multipart/form-data'})
            .post('/member/update.php',formData);
    }
}

