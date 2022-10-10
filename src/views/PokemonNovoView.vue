<script>
import PokemonDataService from '../services/PokemonDataService';
import PokemonRequest from '../models/PokemonRequest';
import TipoDataService from '../services/TipoDataService';
import PokemonResponse from '../models/AtaqueResponse';
import AtaqueDataService from '../services/AtaqueDataService';
import MensagemSucesso from '../components/MensagemSucesso.vue';

export default {
    name: "pokemons-novo",
    data() {
        return {
            pokemonRequest: new PokemonRequest(),
            pokemonResponse: new PokemonResponse(),
            tipos: [],
            salvo: false,
            ataques: [],
            ataquesSelecionados: [],
            ataqueSeleciado: {},
        };
    },
    methods: {
        carregarTipos() {
            TipoDataService.buscarTodos()
                .then(resposta => {
                    this.tipos = resposta;
                })
                .catch(erro => {
                    console.log(erro);
                });
        },
        carregarAtaques() {
            AtaqueDataService.buscarTodos()
                .then(resposta => {
                    this.ataques = resposta;
                })
                .catch(erro => {
                    console.log(erro);
                });
        },
        salvar() {
            const listaFiltradaTipos = this.pokemonRequest.tiposIds.filter(tipo => tipo != "");
            this.pokemonRequest.tiposIds =
                [...new Set(listaFiltradaTipos)];
            this.pokemonRequest.ataquesIds =
                this.ataquesSelecionados.map(ataque => ataque.id);
            PokemonDataService.criar(this.pokemonRequest)
                .then(() => {
                    this.salvo = true;
                })
                .catch(erro => {
                    console.log(erro);
                    console.log(this.pokemonResponse);
                });
        },
        inicializarTipo() {
            return {
                id: null
            };
        },
        novo() {
            this.pokemonRequest = new PokemonRequest();
            this.salvo = false;
        },
        selecionarAtaque() {
            if (this.ataquesSelecionados.length < 4) {
                this.ataquesSelecionados.push(this.ataqueSeleciado);
                this.ataquesSelecionados = [...new Set(this.ataquesSelecionados)];
            }
        },
        removerAtaque(indice) {
            this.ataquesSelecionados.splice(indice, 1);
        }
    },
    mounted() {
        this.carregarTipos();
        this.carregarAtaques();
    },
    components: { MensagemSucesso }
}

</script>

<template>
    <div v-if="!salvo" class="col" style="display: inline;">
        <h2 class=" mb-4 mt-4">Cadastrar novo Pokemon</h2>

        <div class="col-12" style="display: inline;">
            <div class="border p-2 rounded row-1 center" style="max-width: 72rem;">
                <form class="row g-3 mt-1 ">
                    <div class="row mt-1">
                        <div class="col-md-8">
                            <label for="nome" class="form-label">Nome</label>
                            <input v-model="pokemonRequest.nome" type="name" class="form-control" id="nome"
                                aria-label="Nome" required>
                        </div>
                        <div class="col-md-4">
                            <label for="pokedex" class="form-label">Nº Pokedéx</label>
                            <input required v-model="pokemonRequest.numeroPokedex" type="number" class="form-control"
                                id="pokedex" aria-label="Numero-da-Pokedéx">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-4">
                            <label for="peso" class="form-label">Peso</label>
                            <input v-model="pokemonRequest.peso" type="number" class="form-control" id="peso"
                                aria-label="Peso" required>
                        </div>
                        <div class="col-4">
                            <label for="altura" class="form-label">Altura</label>
                            <input required v-model="pokemonRequest.altura" type="number" class="form-control"
                                id="altura" aria-label="Peso">
                        </div>
                        <div class="col-4">
                            <label for="felicidade" class="form-label">Felicidade</label>
                            <input required v-model="pokemonRequest.felicidade" type="number" class="form-control"
                                id="felicidade" aria-label="Felicidade">
                        </div>
                    </div>
                    <div class="row mt-2 ">
                        <div class="col-9">
                            <label required for="genero" class="form-label">Genero:</label>
                            <div class="border rounded p-2">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="generos" id="macho"
                                        value="MASCULINO" v-model="pokemonRequest.genero">
                                    <label class="form-check-label" for="macho">M <svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                                        </svg></label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="generos" id="feminino"
                                        value="FEMININO" v-model="pokemonRequest.genero">
                                    <label class="form-check-label" for="femea">F <svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z" />
                                        </svg></label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="generos" id="indefinido"
                                        value="INDEFINIDO" v-model="pokemonRequest.genero">
                                    <label class="form-check-label" for="indefinido">Indefinido</label>
                                </div>
                            </div>
                        </div>

                        <div class="col-3">
                            <label for="nivel" class="form-label">Nível</label>
                            <input v-model="pokemonRequest.nivel" type="number" class="form-control" id="nivel"
                                aria-label="Nível" required>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <label for="tipo1" class="form-label"> Tipo 1</label>
                            <select id="tipo1" class="form-select " aria-label=".form-select-lg example "
                                v-model="pokemonRequest.tiposIds[0]">
                                <option value="">Nenhum</option>
                                <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">
                                    {{tipo.nome}}
                                </option>

                            </select>
                        </div>

                        <div class="col-md-6">
                            <label for="tipo2" class="form-label"> Tipo 2</label>
                            <select id="tipo2" class="form-select" aria-label=".form-select-lg example"
                                v-model="pokemonRequest.tiposIds[1]">
                                <option value="" selected>Nenhum</option>
                                <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">
                                    {{tipo.nome}}
                                </option>

                            </select>
                        </div>

                    </div>
                    <div class="row mt-2">
                        <div>
                            <label for="ataque1" class="form-label"> Ataque 1</label>
                            <select id="ataque1" class="form-select" aria-label=".form-select-lg example"
                                v-model="ataqueSeleciado" @change="selecionarAtaque">
                                <option v-for="ataque in ataques" :key="ataque.id" :value="ataque">
                                    {{ataque.nome}} | Força: {{ataque.forca}} | Tipo: {{ataque.tipo.nome}} | Categoria:
                                    {{ataque.categoria}}
                                </option>

                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3 mt-3" style="min-width: rem;" v-for="(ataque, indice) in ataquesSelecionados"
                            :key="ataque.id">
                            <div class="card h-100">
                                <div class="card-header">
                                    <div class="container">
                                        <div class="row align-items-center">
                                            <div class="col-9">
                                                {{ataque.nome}}
                                            </div>
                                            <div class="col-3">
                                                <button class=" btn" @click.prevent="removerAtaque(indice)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                        fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                        <path
                                                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <ul class="list-group list-group">
                                        <li class="list-group-item  text-bg">Tipo: {{ataque.tipo.nome}}</li>
                                        <li class="list-group-item  text-bg">Forca: {{ataque.forca}}</li>
                                        <li class="list-group-item  text-bg">Acurácia: {{ataque.acuracia}}</li>
                                        <li class="list-group-item  text-bg">Categoria: {{ataque.categoria}}</li>
                                        <li class="list-group-item  text-bg">Descrição: {{ataque.descricao}}</li>
                                    </ul>



                                </div>
                            </div>
                        </div>
                    </div>



                </form>
                <div class="row">
                    <div class="col-6">
                        <button @click.prevent="salvar" class="mt-3 btn btn-danger row-1">Cadastrar</button>
                    </div>
                </div>


            </div>
        </div>

    </div>
    <div v-else>
        <MensagemSucesso  urlListagem="pokemons-lista" @casdastro="novo">
            <span>
                Pokemon cadastrado: {{pokemonResponse.nome}}
            </span>
        </MensagemSucesso>
    </div>
</template>