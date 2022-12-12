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
                    this.username = resposta.username;
                    this.salvo = true;
                })
                .catch(erro => {
                    console.log(erro);
                    this.salvo = false
                })
        },
        novo() {
            this.authRequest = new AuthRequest();
            this.salvo = false;
        }
    },
    mounted() {

    }
}
</script>
<template>
    <div style="display: flex; justify-content: center; margin-top: 10em;">
        <div v-if="!salvo" class="card" style="width: 24rem;">
            <div class="card-header">
                <h2 class="mb-2 mt-2">Cadastrar novo Usuário</h2>
            </div>
            <div class="p-4 rounded row-1 " style="max-width: 24rem; ">
                <form class="row g-3 needs-validation" @submit.prevent="salvar" novalidate>

                    <div class="col-12">
                        <label for="username" class="form-label">Username: </label>
                        <div class="input-group">
                            <div class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg></div>
                            <input type="Text" class="form-control" id="username" required
                                v-model="authRequest.username">
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email:</label>
                        <div class="has-validation">
                            <div class="input-group">
                                <div class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                    </svg></div>
                                <input type="email" class="form-control" id="email" v-model="authRequest.email"
                                    required>
                            </div>

                        </div>
                    </div>
                    <div class="col-12">
                        <label for="senha" class="form-label">Senha: </label>

                        <div class="input-group">
                            <div class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg></div>
                            <input type="password" class="form-control" id="senha" required
                                v-model="authRequest.password">
                        </div>
                    </div>

                    <div>
                        <button id="liveToastBtn" type="submit"
                            class=" mt-4 my-2 col-12  btn btn-outline-success p-2">Cadastrar</button>
                    </div>
                </form>
                <a class="" style="text-decoration: none; text-align: center;">
                    <RouterLink class="dropdown-item" to="/usuarios/login">Já tenho cadastro</RouterLink>
                </a>
            </div>
        </div>
        <div v-else>
            <MensagemSucessoVue @cadastro="novo" urlListagem="sign-in">
                <span>Usuário {{ authRequest.username }} foi cadastrado com sucesso!</span>
            </MensagemSucessoVue>
        </div>
    </div>
</template>