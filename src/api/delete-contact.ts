import request from '../utils/request';

export const deleteContact = (index: any) => {
    return request({
        url: '/uploadInfo/delete?index=' + index,
        method: 'delete'
    });
};
