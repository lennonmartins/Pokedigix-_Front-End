<script >
import TipoDataService from '../services/TipoDataService';
import Tipo from '../models/Tipo'
export default {

    name: 'tipos-novo',
    data() {
        return {
            tipo: new Tipo(),
            salvo: false
        }
    },
    methods: {
        salvar() {
            TipoDataService.criar(this.tipo)
                .then(resposta => {
                    this.tipo.id = resposta.id;
                    console.log(this.tipo);
                    this.salvo = true;
                })
                .catch(erro => {
                    console.log(erro);
                    this.salvo = false;
                })
        },

        novo() {
            this.tipo = new Tipo();
            this.salvo = false;
        }

    }
}
</script>


<template>
    <h2 class="mt-4">Cadastrar um novo tipo</h2>
    <div class="border p-2 rounded row-1 col-6 " style="max-width: 450px;">
        <div v-if="!salvo">
            <form class="row">
                <div class="mb-3 ">
                    <label for="nome" class="form-label">Nome do Tipo</label>
                    <input type="Text" class="form-control" v-model="tipo.nome" id="nome" placeholder="ex. Água"
                        required>
                </div>
                <div>
                    <button @click.prevent="salvar" class="btn btn-dark row-1">Cadastrar</button>
                </div>
            </form>
        </div>
        <div v-else>
            <div class="row">
                <h4 class="mt-2">Tipo cadastrado com sucesso!</h4>
                <span>Tipo id: {{tipo.id}}</span>
            </div>
            <div class="row-sm">
                <button @click="novo" class="btn btn-dark mt-2">Novo</button>
            </div>
        </div>
    </div>
</template>