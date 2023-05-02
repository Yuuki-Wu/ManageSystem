import request from '../utils/request';

export const getContactCount = () => {
    return request({
        url: '/uploadInfo/count',
        method: 'get'
    });
};
