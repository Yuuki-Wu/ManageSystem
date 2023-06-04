import request from '../utils/request';

export const editContact = (index: any) => {
    return request({
        url: '/uploadInfo/edit?index=' + index,
        method: 'get'
    });
};
