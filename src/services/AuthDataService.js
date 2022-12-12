import http from '../http-commons';

class AuthDataService {

    async criar(login){
        let resposta = await http.post('/auth/signup', login)
        return resposta.data;
    }

    async acessar(login){
        let resposta = await http.post('/auth/signin', login)
        return resposta.data;
    }

}

export default new AuthDataService();