import http from '../http-commons';

class AuthDataService {

    async criar(login){
        let resposta = await http.post('/auth/signup', login)
        return resposta;
    }

    async acessar(login){
        let resposta = await http.post('/auth/signin', login)
        return resposta;
    }

}

export default new AuthDataService();