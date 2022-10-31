<script >
import TreinadorRequest from '../models/TreinadorRequest';
import EnderecoRequest from '../models/EnderecoRequest';
import PokemonDataService from '../services/PokemonDataService';
import EnderecoDataService from '../services/EnderecoDataService';
import MensagemSucessoVue from '../components/MensagemSucesso.vue';
import TreinadorDataService from '../services/TreinadorDataService';
export default {

  name: 'treinadores-novo',
  data() {
    return {
      treinadorRequest: new TreinadorRequest(),
      endereco: new EnderecoRequest(),
      salvo: false,
      pokemons: [],
      enderecos: [],
    }
  },
  components: {
    MensagemSucessoVue
  },
  methods: {
    carregarPokemons() {
      PokemonDataService.buscarTodos()
        .then(resposta => {
          this.pokemons = resposta.pokemons
        })
        .catch(erro => {
          console.log(erro);
        });
    },
    carregarEnderecos() {
      EnderecoDataService.buscarTodos()
        .then(resposta => {
          this.enderecos = resposta
        })
        .catch(erro => {
          console.log(erro);
        })
    },
    salvarEndereco() {
      EnderecoDataService.criar(this.endereco)
        .then(respota => {
          this.enderecos.push(respota);
          this.endereco = new EnderecoRequest();
        })
        .catch(erro => {
          console.log(erro);
        })
    },
    cancelar() {
      this.endereco = new EnderecoRequest();
    },
    salvar() {
      TreinadorDataService.criar(this.treinadorRequest)
        .then(respota => {
          this.treinadorRequest = respota;
          this.salvo = true;
        })
        .catch(erro => {
          this.salvo = false;
          console.log(erro);
        })
    },
    novo() {
      this.salvo = false;
      this.treinadorRequest = new TreinadorRequest();
    },
  },
  mounted() {
    this.carregarPokemons();
    this.carregarEnderecos();
  },
}
</script>


<template>
  <div v-if="!salvo">
    <h2 class="mt-4">Cadastrar um novo treinador</h2>
    <form>

      <div class="border p-2 rounded row-1 " style="max-width: 62rem; align-items: center;">
        <label for="nome" class="fomr-label">Nome do Treinador</label>
        <input type="text" id="nome" required class="form-control" v-model="treinadorRequest.nome" />
        <label for="pokemon" class="form-label mt-3">Pokemon Inicial</label>
        <select id="pokemon" class="form-select" aria-label=".form-select-lg example"
          v-model="treinadorRequest.idPrimeiroPokemon">
          <option v-for="pokemon in pokemons" :key="pokemon.id" :value="pokemon.id">
            {{pokemon.nome}} | {{pokemon.nivel}}
          </option>
        </select>
        <div class="row">
          <div class="col-4 mt-3" v-for="endereco in enderecos" :key="endereco.id">
            <div class="card">
              <div class="card-body">
                <div class="card-body">
                  <p class="card-text">Cidade: {{endereco.cidade}}</p>
                  <p class="card-text">Regiao: {{endereco.regiao}}</p>
                </div>
              </div>
              <div class="card-footer text-center">
                <input type="radio" :value="endereco.id" class="form-check-input" name="radioEndereco"
                  v-model="treinadorRequest.idEndereco" />
              </div>
            </div>
          </div>
        </div>
        <div class="col mt-3">
          <div class="card h-100 text-center">
            <button type="button " data-bs-toggle="modal" data-bs-target="#enderecoModal"
              class="btn btn-outline-dark h-100 w-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-plus-lg"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button @click.prevent="salvar" class="btn btn-success mt-2">Salvar</button>
    </form>
    <div class="modal fade" id="enderecoModal" tabindex="-1" aria-labelledby="enderecoModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="enderecoModalLabel">Cadastro de Endereco</h1>
            <button type="button" @click="cancelar" class="btn-close" data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <form>
            <div class="modal-body">
              <label for="cidade" class="form-label">Cidade</label>
              <input type="text" required class="form-control" v-model="endereco.cidade" id="cidade" />
              <label for="regiao" class="form-label">Regiao</label>
              <input type="text" id="regiao" class="form-control" required v-model="endereco.regiao" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click.prevent="cancelar"
                data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" @click.prevent="salvarEndereco"
                data-bs-dismiss="modal">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <MensagemSucessoVue urlListagem="treinadores-lista" @cadastro="novo">
      <span>O treinador {{ treinadorRequest.nome }} foi salvo com sucesso!</span>
    </MensagemSucessoVue>

  </div>
</template>