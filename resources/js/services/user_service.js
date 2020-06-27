import {http, httpFile} from './http_service';

export function createUser(data){
    return httpFile().post('/users',data)
}