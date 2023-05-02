import request from '../utils/request';

export const getUserCount = () => {
    return request({
        url: '/user/count',
        method: 'get'
    });
};
