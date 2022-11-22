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
    components: {
        MensagemSucessoVue
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
    <div style="display: flex; justify-content: center; margin-top: 4em;" >
        <div v-if="!salvo">
            <h2 class="mt-4 mb-4">Cadastrar novo Usuário</h2>
            <div class="border p-2 rounded row-1 " style="max-width: 24rem; ">
                <form class="row g-3 needs-validation" @submit.prevent="salvar" novalidate>

                    <div class="col-12">
                        <label for="username" class="form-label">Username: </label>
                        <input type="Text" class="form-control" id="username" required v-model="authRequest.username">
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email:</label>
                        <div class="has-validation">
                            <input type="email" class="form-control" id="email" v-model="authRequest.email" required>

                        </div>
                    </div>
                    <div class="col-12">
                        <label for="senha" class="form-label">Senha: </label>

                        <input type="password" class="form-control" id="senha" required v-model="authRequest.password">

                    </div>


                    <div>
                        <button id="liveToastBtn" type="submit" class="btn btn-danger row-1">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-else>
            <MensagemSucessoVue @cadastro="novo" urlListagem="pokemon-lista">
                <span>Usuário {{authRequest.username}} foi cadastrado com sucesso!</span>
            </MensagemSucessoVue>
        </div>
    </div>
</template>