export default class EnderecoRequest {
    constructor() {
        this.id = null;
        this.cidade = null;
        this.regiao = null;
        
    }

    populate(obj) {
        this.id = obj.id;
        this.cidade = obj.cidade;
        this.regiao = obj.regiao;
       
    }

    toJson() {
        return {
            id: this.id,
            cidade: this.cidade,
            regiao: this.regiao,
            
        };
    }
}