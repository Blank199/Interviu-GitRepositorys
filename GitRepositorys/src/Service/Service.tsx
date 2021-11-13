import axios from 'axios';

const url = 'https://api.github.com';


const config = () => ({
    headers: {
        'Content-Type': 'application/json'
    }
});


export class Service{
    static getUser(user:string){
        return axios.get(`${url}/users/${user}/gists`, config()).then(res =>{
            return Promise.resolve(res.data);
        });
    }

    static getForked(id:string){
        return axios.get(`${url}/gists/${id}/forks`, config()).then(res =>{
            return Promise.resolve(res.data);
        });
    }
}