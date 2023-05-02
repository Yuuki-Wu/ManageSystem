import request from '../utils/request';

export const getUserInfo = () => {
    return request({
        url: '/userinfo/getUserAllInfo',
        method: 'get'
    });
};
