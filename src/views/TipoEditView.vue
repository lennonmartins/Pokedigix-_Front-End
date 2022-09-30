<script >
import TipoDataService from '../services/TipoDataService';
import Tipo from '../models/Tipo'
import Loading from "vue-loading-overlay";

export default {

    name: 'tipos-novo',
    data() {
        return {
            isLoading: false,
            tipo: new Tipo(),
            salvo: false
        }
    },
    components: {
        Loading
    },
    methods: {
        salvar() {
            this.isLoading = true;
            TipoDataService.atualizar(this.tipo.id, this.tipo)
                .then(resposta => {
                    this.tipo.id = resposta.id;
                    this.salvo = true;
                    this.isLoading = false;
                })
                .catch(erro => {
                    console.log(erro);
                    this.salvo = false;
                    this.isLoading = false;
                })
        },

        voltar() {
            this.$router.push({ name: 'tipos-lista' });
        },

        carregarTipo(id) {
            this.isLoading = true;
            TipoDataService.buscarPeloId(id)
                .then(resposta => {
                    this.tipo = resposta;
                    this.isLoading = false;
                })
                .catch(erro => {
                    console.log(erro);
                    this.isLoading = false;
                })
        }
    },
    mounted() {
        this.carregarTipo(this.$route.params.id)
    }
}
</script>


<template>
    
        <h2 class="mt-4">Editar tipo </h2>
        <div class="border p-2 rounded row-1 col-6 " style="max-width: 450px;">
            <div v-if="!salvo">
                <loading
                    v-model:active="isLoading"
                    is-full-page="false"
                />
                <form class="row">
                    <div class="mb-3 ">
                        <label for="nome" class="form-label">Nome do Tipo a ser editado</label>
                        <input type="Text" class="form-control" v-model="tipo.nome" id="nome" placeholder="ex. Água"
                            required>
                    </div>
                    <div>
                        <button @click.prevent="salvar" class="btn btn-dark row-1">Salvar</button>
                    </div>
                </form>
            </div>
            <div v-else>
                <div class="row">
                    <h4 class="mt-2">Tipo atualizado com sucesso!</h4>
                    <span>Tipo id: {{tipo.id}}</span>
                </div>
                <div class="row-sm">
                    <button @click="voltar" class="btn btn-dark mt-2">Voltar</button>
                </div>
            </div>
        </div>
    
</template>