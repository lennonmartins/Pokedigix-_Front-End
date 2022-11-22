<script >
import { RouterLink } from 'vue-router';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
export default {
    data() {
        return {
            nomeTreinador: ""
        }
    },
    mounted() {
        this.nomeTreinador = cookies.get('treinador_nome');
    }
}
</script>


<template>
    <header>
        <nav class=" sticky-top navbar navbar-dark navbar-expand-lg bg-dark warning ">

            <div class="container-md">

                <span>
                    <a class="navbar-brand" href="#">Pokédigix</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </span>
                <span>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link active" aria-current="page">Home </RouterLink>
                            </li>
                            <li class="nav-item ">
                                <RouterLink to="/pokemons-selvagens" class="nav-link">Pokemons Selvagens
                                </RouterLink>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Ataques
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <RouterLink class="dropdown-item" to="/ataques/novo">Cadastrar</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink class="dropdown-item" to="/ataques/lista">Lista</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Tipos
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <RouterLink class="dropdown-item" to="/tipos/novo">Cadastrar</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink class="dropdown-item" to="/tipos/lista">Lista</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Pokemons
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <RouterLink class="dropdown-item" to="/pokemons/novo">Cadastrar</RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink class="dropdown-item" to="/pokemons/lista">Lista</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Treinadores
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <RouterLink class="dropdown-item" to="/treinadores/novo">Cadastrar
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink class="dropdown-item" to="/treinadores/lista">Lista</RouterLink>
                                    </li>
                                </ul>
                            </li>
                            <div class=" d-flex" v-if="nomeTreinador">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        {{ nomeTreinador }}
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <RouterLink class="dropdown-item" to="/treinadores/lista">Trocar
                                                Treinador
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </div>
                </span>

            </div>
            <div class="me-4">
                <button class="btn btn-danger me-2">
                    <RouterLink class="dropdown-item" to="/usuarios/novo">Login</RouterLink>
                </button>
                
            </div>
        </nav>
    </header>
</template>