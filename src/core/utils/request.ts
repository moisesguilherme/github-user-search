import axios, { Method } from 'axios';

type RequestParams = {
    method?: Method;
    url: string;
}

export const makeRequest = ({ method = 'GET', url}:RequestParams) => {
    return axios({
        method,
        url,
    });
}