import { apilogin } from './apilogin';

export const authService = {
    login({email,password}) {
        return apilogin
        .call()
        .post('/member/login.php', {
        email,
        password
    });
    }
}

