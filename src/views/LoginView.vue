<script>
import AuthDataService from '../services/AuthDataService';
import LoginRequest from '../models/LoginRequest';

export default {
    name: "sign-up",
    data() {
        return {
            loginRequest: new LoginRequest(),
            salvo: false
        };

    },
    methods: {
        salvar() {
            console.log(this.loginRequest);
            AuthDataService.acessar(this.loginRequest)
                .then(resposta => {
                    this.username = resposta.uername;
                    this.salvo = true;
                })
                .catch(erro => {
                    console.log(erro);
                    this.salvo = false
                })
        },
        novo() {
            this.loginRequest = new LoginRequest();
            this.salvo = false;
        }
    },
    mounted() {

    }
}
</script>
<template>
    <div style="display: flex; align-items: center; flex-direction: column;margin-top: 10em;" >
        <div class="card" style="width: 24rem;">
            <div class="card-header">
                <h2 style="text-align: center;" class="center">Login</h2>
            </div>
            <div class=" p-4 rounded row-1 " style="max-width: 28rem; ">
                <form class=" mt-2 g-3 needs-validation" @submit.prevent="salvar" novalidate>

                    <div class="col-12 mt-2">
                        <label for="username" class="form-label">Username: </label>
                        <div class="input-group">
                            <div class="input-group-text">@</div>
                            <input type="Text" class="form-control" id="username" required
                                v-model="loginRequest.username">
                        </div>
                    </div>
                    <div class="col-12 mt-2">
                        <label for="senha" class="form-label">Senha: </label>
                        <div class="input-group">
                            <div class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                                </svg></div>
                            <input type="password" class="form-control" id="senha" required
                                v-model="loginRequest.password">
                        </div>
                    </div>
                    <div class="col-auto mt-2" style="display: flex; justify-content:space-between">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="autoSizingCheck">
                            <label class="form-check-label" for="autoSizingCheck">
                                Lembrar-me
                            </label>
                        </div>
                        <a href="#" class="stretched-link" style="text-decoration: none ;">Esqueci minha senha</a>
                    </div>


                    <div class="col-12 mt-4" style="display: flex; justify-content: space-between">
                        <button id="liveToastBtn" type="submit"
                            class="col-12 btn btn-success pe-4 ps-4">Acessar</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="d-flex mt-2">
            <p>Ainda não tem uma conta?
            </p>
            <a class="ms-2">
                <RouterLink class="dropdown-item" to="/usuarios/novo">Cadastrar-se</RouterLink>
            </a>
        </div>
    </div>
</template>