<script>
import AuthDataService from '../services/AuthDataService';
import AuthRequest from '../models/AuthRequest';
import MensagemSucessoVue from '../components/MensagemSucesso.vue';

export default {
    name: "sign-up",
    data() {
        return {
            authRequest: new AuthRequest(),
            salvo: false
        };

    },
    methods: {
        salvar() {
            AuthDataService.criar(this.authRequest)
                .then(resposta => {
                    this.username = resposta.uername;
                    this.salvo= true;
                })
                .catch(erro => {
                    console.log(erro);
                    this.salvo = false
                })
        },
        novo(){
            this.authRequest = new AuthRequest();
            this.salvo = false;
        }
    },
    mounted() {

    }
}
</script>
<template>
    <div >
        <h2 class="mt-4 mb-4">Cadastrar novo Usuário</h2>
            <div class="border p-2 rounded row-1 " style="max-width: 24rem; ">
                <form class="row g-3 needs-validation" @submit.prevent="salvar" novalidate>

                    <div class="col-12">
                        <label for="username" class="form-label">Username: </label>
                        <input type="Text" class="form-control" id="username" required v-model="authRequest.username">
                    </div>
                    <div class="col-12">
                        <label for="senha" class="form-label">Senha: </label>

                        <input type="password" class="form-control" id="senha" required v-model="authRequest.password">

                    </div>


                    <div>
                        <button id="liveToastBtn" type="submit" class="btn btn-danger row-1">Acessar</button>
                    </div>
                </form>
            </div>
        
    </div>
</template>