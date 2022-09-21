<script >
import PokemonDataService from "../services/PokemonDataService";

export default {
  name: "lista-pokemons",
  data() {
    return { pokemons: [] };
  },
  methods: {
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
      <h2 class = " mb-4 mt-4">Lista de Pokemons</h2>
      <div class="container  ">
        <div class="row row-cols-1 row-cols-md-3 g-4 mt-1">
          <div class="card  text-bg-light m-2  " style="max-width: 400px;" v-for="pokemon in pokemons" :key="pokemon.id">
            <div class="row g-1 ">
              <div class="col-xl-4 center text-center justify-content">
                <img style="width: 250px;" class="img-fluid rounded-start "
                  :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/' + pokemon.numeroPokedex + '.png'" />
                <button type="button" class="btn btn-outline-dark btn-sm mt-0.5"
                  style="--bs-btn-padding-y: .15rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">Shiny</button>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title m-0">{{pokemon.nome}} - <img style="width: 35px;" class="img-fluid rounded-start "
                  :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.numeroPokedex + '.png'" /></h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item  text-bg-light"></li>
                    <li class="list-group-item  text-bg-light">Numero pokedéx: {{pokemon.numeroPokedex}}</li>
                    <li class="list-group-item  text-bg-light">Nivel: {{pokemon.nivel}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>
