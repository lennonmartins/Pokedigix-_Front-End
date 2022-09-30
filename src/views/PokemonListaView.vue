<script >
import PokemonDataService from "../services/PokemonDataService";
import TipoDataService from "../services/TipoDataService";

export default {
  name: "lista-pokemons",
  data() {
    return {
      pokemons: [],
      tipos: [],
    };
  },
  methods: {
    buscarTipos() {
      TipoDataService.buscarTodos()
        .then(resposta => {
          this.tipos = resposta
        })
        .catch(erro => {
          console.log(erro);
        })
    },
    buscarPokemons() {
      PokemonDataService.buscarTodos()
        .then(resposta => {
          this.pokemons = resposta
          console.log(this.pokemons);
        })
        .catch(erro => {
          console.log(erro);
        })
    }
  },
  mounted() {
    this.buscarPokemons();
  }
}
</script>

<template>
  <main>
    <div>
      <h2 class=" mb-4 mt-4">Lista de Pokemons</h2>
      <div class="container  ">
        <div>

        
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-1">
          <div class="card  text-bg-light m-2  " style="max-width: 400px;" v-for="pokemon in pokemons"
            :key="pokemon.id">
            <div class="card-header bg-transparent border- m-0 p-0">
              <h5 class="mb-0">
                {{pokemon.nome}} <img  style="width: 45px;" 
                  :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.numeroPokedex + '.png'" />
              </h5>
            </div>
            <div class="row g-1 ">

              <div class="col-xl-4 center text-center justify-content">
                <img style="width: 250px;" class="img-fluid rounded-start "
                  :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + pokemon.numeroPokedex + '.png'" />
                <button type="button" class="btn btn-outline-dark btn-sm mt-0.5"
                  style="--bs-btn-padding-y: .15rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Shiny</button>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <ul class="list-group list-group">
                    <li class="list-group-item  text-bg">Nivel: {{pokemon.nivel}}</li>
                    <li class="list-group-item  text-bg">Numero pokedéx: {{pokemon.numeroPokedex}}</li>
                    <li  v-for="tipo in pokemon.tipos" :key="tipo.id" class="list-group-item  text-bg">Tipo: {{tipo.nome}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

  </main>
</template>
