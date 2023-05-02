import request from '../utils/request';

export const adminLogin = (id: any, password: any) =>  request({
        url: '/admin/login',
        params: {
            id,
            password
        },
        method: 'get'
    });
