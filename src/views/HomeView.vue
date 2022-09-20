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
      <h2>Lista de Pokemons</h2> 
      <div class="container " >
        <div class="row row-cols-3  mt-1">
          <div class="card m-2" style="max-width: 450px;" v-for="pokemon in pokemons"
            :key="pokemon.id">
            <div class="row g-1 ">
              <div class="col-md-4 center text-center">
                <img style="width: 160px;" class="img-fluid rounded-start "
                  :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.numeroPokedex + '.png'" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{pokemon.nome}}</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item"></li>
                    <li class="list-group-item">Numero pokedéx: {{pokemon.numeroPokedex}}</li>
                    <li class="list-group-item">Nivel: {{pokemon.nivel}}</li>
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
