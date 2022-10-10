<script>
import TreinadorDataService from '../services/TreinadorDataService';


export default {
    name: "treinadores-lista",
    data() {
        return {
            treinadores: [],
            // endereco: [],
        }
    },
    methods: {
        buscarTreinadores() {
            TreinadorDataService.buscarTodos()
                .then(resposta => {
                    this.treinadores = resposta;
                    console.log(this.treinadores);
                })
                .catch(erro => {
                    console.log(erro)
                })

        },
        editarTreinador(){
            
        }

    },
    mounted() {
        this.buscarTreinadores()
    }
}

</script>

<template>
    <div>
        <h2 class=" mb-4 mt-4">Lista de Treinadores</h2>
        <div class="row row-cols-1 row-cols-md-3  ">
           
                <div class="m-0 mt-2" v-for="treinador in treinadores" :key="treinador.id">
                    <div class="card">
                        <div class="card-header ">
                            <div class="row">
                            <h5 class=" text-bg col-7 mt-1"> {{treinador.nome}}</h5>
                                <div class=" col-5 p-0 text-end">
                                    <button class="m-1 btn btn-outline-dark"
                                        style="--bs-btn-padding-y: .15rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .95rem;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                    </button>

                                    <button type="button" class="m-1 btn btn-outline-danger" data-bs-toggle="modal"
                                        data-bs-target="#modalConfimacaoExclusao"
                                        style="--bs-btn-padding-y: .15rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .95rem;">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">

                            <ul class="list-group list-group">
                                <li class="list-group-item  text-bg">Cidade:
                                    {{treinador.endereco.cidade}}</li>
                                <li class="list-group-item  text-bg">Regiao:
                                    {{treinador.endereco.regiao}}</li>

                            </ul>
                        </div>
                        
                    </div>

                </div>
            </div>
        
    </div>


</template>