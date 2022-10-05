import { createRouter, createWebHistory } from 'vue-router'
import PokemonListaView from '../views/PokemonListaView.vue'
import TipoNovoView from '../views/TipoNovoView.vue'
import TipoEditView from '../views/TipoEditView.vue'
import TipoListaView from '../views/TipoListaView.vue'
import AtaqueNovoView from '../views/AtaqueNovoView.vue'
import AtaqueListaView from '../views/AtaqueListaView.vue'
import AtaqueEditView  from '../views/AtaqueEditView.vue'
import PokemonNovoView from '../views/PokemonNovoView.vue'
import TreinadorListaView from '../views/TreinadorListaView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonListaView
    },{
      path: '/pokemons/lista',
      name: 'pokemons-lista',
      component: PokemonListaView
    },{
      path: '/pokemons/novo',
      name: 'pokemons-novo',
      component: PokemonNovoView
    },{
      path: '/tipos/novo',
      name: 'tipos-novo',
      component: TipoNovoView
    },{
      path: '/tipos/lista',
      name: 'tipos-lista',
      component: TipoListaView
    },{
      path: '/tipos/edit/:id',
      name: 'tipos-edit',
      component: TipoEditView
    },{
      path: '/ataques/novo',
      name: 'ataques-novo',
      component: AtaqueNovoView
    },{
      path: '/ataques/edit/:id',
      name: 'ataques-edit',
      component: AtaqueEditView
    },{
      path: '/ataques/lista',
      name: 'ataques-lista',
      component: AtaqueListaView
    },{
      path: '/treinadores/lista',
      name: 'treinadores-lista',
      component: TreinadorListaView
    }
  ]
})

export default router
