import request from '~/utils/request';

export const userApi = {
  async getUserList(params) {
    const url = 'users/search';
    const res = await request.get(url, { params });
    return res;
  },
};
