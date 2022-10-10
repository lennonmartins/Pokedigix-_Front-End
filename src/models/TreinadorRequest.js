export default class TreinadorRequest {
    constructor() {
        
        this.idPrimeiroPokemon = null;
        this.nome = null;
        this.idEndereco = null;
        
    }

    populate(obj) {
        this .nome = obj.nome;
        this.idEndereco = obj.idEndereco;
        this .idPrimeiroPokemon = obj.idPrimeiroPokemon;
       
    }

    toJson() {
        return {
            nome: this.nome,
            idEndereco: this.idEndereco,
            idPrimeiroPokemon: this.idPrimeiroPokemon,
            
        }
    }
}