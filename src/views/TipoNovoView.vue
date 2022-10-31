<script >
import TipoDataService from '../services/TipoDataService';
import Tipo from '../models/Tipo'
import MensagemSucessoVue from '../components/MensagemSucesso.vue';
export default {

    name: 'tipos-novo',
    data() {
        return {
            tipo: new Tipo(),
            salvo: false
        }
    },
    components:{
        MensagemSucessoVue
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
    <div v-if="!salvo">
    <div class="border p-2 rounded row-1 col-6 " style="max-width: 450px;">
            <form class="row">
                <div class="mb-3 ">
                    <label for="nome" class="form-label">Nome do Tipo</label>
                    <input type="Text" class="form-control" v-model="tipo.nome" id="nome" placeholder=" "
                        required>
                </div>
                <div>
                    <button @click.prevent="salvar" class="btn btn-dark row-1">Cadastrar</button>
                </div>
            </form>
        </div>
    </div>
    <div v-else>
       <MensagemSucessoVue @cadastro="novo" urlListagem="tipos-lista" >
            <span>O tipo {{tipo.nome}} foi cadastrado com sucesso!</span>
       </MensagemSucessoVue>
    </div>
</template>