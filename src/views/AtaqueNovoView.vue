<script>
import AtaqueDataService from '../services/AtaqueDataService';
import AtaqueRequest from '..//models/Ataque'

export default {
    name: 'ataques-novo',
    data() {
        return {
            ataqueRequest: new AtaqueRequest(),
            salvo: false,
            categorias: [
                {
                    indice: 1,
                    nome: "Físico",
                    nomeBanco: "FISICO"
                },{
                    indice: 2,
                    nome: "Especial",
                    nomeBanco: "ESPECIAL"
                },{
                    indice: 3,
                    nome: "Efeito",
                    nomeBanco: "EFEITO"
                }
            ]
        }
    },
    methods: {

    }
}
</script>

<template>
    <h2 class="mt-4 mb-4">Cadastrar um novo Ataque</h2>
    <div class="border p-2 rounded row-1 col-6 ">
        <div v-if="!salvo">
            <form class="row g-3">
                <div class="col-12">
                    <label for="nome" class="form-label">Nome do Ataque: </label>
                    <input type="Text" class="form-control" v-model="ataqueRequest.nome" id="nome"
                        placeholder="ex. Choque do trovão" required>
                </div>
                <div class="col-6">
                    <label for="forca" class="form-label">Força:</label>
                    <input type="Text" class="form-control" v-model="ataqueRequest.forca" id="forca"
                        placeholder="0 - 50" required>
                </div>
                <div class="col-6">
                    <label for="acuracia" class="form-label">Acurácia: </label>
                    <input type="Text" class="form-control" v-model="ataqueRequest.acuracia" id="acuracia"
                        placeholder="0 - 100" required>
                </div>
                <div class="col-9">
                    <label for="categoria" class="form-label">Categoria: </label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected disabled>Escolha a categoria do seu ataque</option>
                        <option v-for="categoria in categorias" :key="categoria.indice">{{categoria.nome}}</option>
                    </select>
                </div>
                <div class="col-3">
                    <label for="pp" class="form-label">PP: </label>
                    <input type="number" class="form-control" v-model="ataqueRequest.pontosDePoder" id="pp"
                         required>
                </div>

                <div>
                    <button @click.prevent="salvar" class="btn btn-danger row-1">Cadastrar</button>
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