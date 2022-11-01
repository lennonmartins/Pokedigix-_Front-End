<script>
import AtaqueDataService from '../services/AtaqueDataService';
import AtaqueRequest from '../models/AtaqueRequest'
import TipoDataService from '../services/TipoDataService';
import AtaqueResponse from '../models/AtaqueResponse';
import MensagemErroDTO from '../models/MensagemErroDTO';
import MensagemSucesso from '../components/MensagemSucesso.vue';
import { Toast } from 'bootstrap';
import MensagemErro from '../components/icons/MensagemErro.vue';

export default {
    name: "ataques-novo",
    data() {
        return {
            ataqueRequest: new AtaqueRequest(),
            ataqueResponse: new AtaqueResponse(),
            salvo: false,
            categorias: [
                {
                    indice: 1,
                    nome: "Físico",
                    nomeBanco: "FISICO"
                },
                {
                    indice: 2,
                    nome: "Especial",
                    nomeBanco: "ESPECIAL"
                },
                {
                    indice: 3,
                    nome: "Efeito",
                    nomeBanco: "EFEITO"
                }
            ],
            tipos: [],
            desabilitarForca: false,
            mensagemErroDTO: new MensagemErroDTO()
        };
    },
    methods: {
        carregarTipos() {
            TipoDataService.buscarTodos()
                .then(resposta => {
                    this.tipos = resposta.tipos;
                })
                .catch(erro => {
                    console.log(erro);
                });
        },
        salvar() {
            AtaqueDataService.criar(this.ataqueRequest)
                .then(resposta => {
                    this.ataqueResponse = resposta;
                    console.log(this.ataqueResponse);
                    this.salvo = true;
                })
                .catch(erro => {
                    console.log(erro);
                    this.mensagemErroDTO.tipo = erro.response.data.type;
                    this.mensagemErroDTO.status = erro.response.data.status;
                    const campoAcuracia = document.getElementById("acuracia");
                    const campoForca = document.getElementById("forca");
                    campoAcuracia.setCustomValidity("");
                    campoForca.setCustomValidity("");
                    if (this.mensagemErroDTO.tipo == "DataIntegrityViolationException" ||this.mensagemErroDTO.tipo == "InvalidDataAccessApiUsageException") {
                        this.mensagemErroDTO.mensagemDeErro = "Preencha todos os campos obrigatorios."
                    } else if (this.mensagemErroDTO.tipo == "AcuraciaInvalidaException") {
                        this.mensagemErroDTO.mensagemDeErro = erro.response.data.errors[0];
                        campoAcuracia.setCustomValidity(this.mensagemErroDTO.mensagemDeErro)
                    } else if (this.mensagemErroDTO.tipo == "ForcaInvalidaParaCategoriaException") {
                        this.mensagemErroDTO.mensagemDeErro = erro.response.data.errors[0];
                        campoForca.setCustomValidity(this.mensagemErroDTO.mensagemDeErro)
                    }
                    const toastLiveExample = document.getElementById('liveToast');
                    const toast = new Toast(toastLiveExample);
                    toast.show();
                    console.log(this.ataqueRequest);
                    this.salvo = false;
                });
        },
        novo() {
            this.salvo = false;
            this.ataqueRequest = new AtaqueRequest();
            this.ataqueResponse = new AtaqueResponse();
            this.ataqueRequest.categoria = this.categorias[1].nomeBanco;
        },
        escolherCategoria() {
            if (this.ataqueRequest.categoria == "EFEITO") {
                this.desabilitarForca = true;
            }
            else {
                this.desabilitarForca = false;
            }
        },
    },
    mounted() {
        this.carregarTipos();
        this.novo();
        const form = document.querySelector('.needs-validation')
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    },
    components: { MensagemErro, MensagemSucesso }
}
</script>

<template>
    <h2 class="mt-4 mb-4">Cadastrar um novo Ataque</h2>
    <div v-if="!salvo">
        <div class="border p-2 rounded row-1 " style="max-width: 32rem; align-items: center;">
            <form class="row g-3 needs-validation" @submit.prevent="salvar" novalidate>

                <div class="col-12">
                    <label for="nome" class="form-label">Nome do Ataque: </label>
                    <input type="Text" class="form-control" v-model="ataqueRequest.nome" id="nome"
                        placeholder="ex. Choque do trovão" required>
                </div>
                <div class="col-6">
                    <label for="forca" class="form-label">Força:</label>
                    <div class="has-validation">
                        <input 
                            type="Text" 
                            :disabled="desabilitarForca" 
                            class="form-control"
                            v-model="ataqueRequest.forca" 
                            id="forca" 
                            placeholder="0 - 100" 
                            required>
                        <div v-if="this.mensagemErroDTO.tipo == 'ForcaInvalidaParaCategoriaException'"
                            class="invalid-feedback">
                            {{ mensagemErroDTO.mensagemDeErro }}
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <label for="acuracia" class="form-label">Acurácia: </label>
                    <div class="has-validation">
                        <input 
                            type="Text" 
                            class="form-control" 
                            v-model="ataqueRequest.acuracia" 
                            id="acuracia"
                            placeholder="0 - 100" required>
                        <div v-if="this.mensagemErroDTO.tipo == 'AcuraciaInvalidaException'" class="invalid-feedback">
                            {{ mensagemErroDTO.mensagemDeErro }}
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <label for="categoria" class="form-label">Categoria: </label>
                    <select id="categoria" v-on:change="escolherCategoria" class="form-select"
                        v-model="ataqueRequest.categoria">
                        <option v-for="categoria in categorias" :key="categoria.indice" :value="categoria.nomeBanco">
                            {{ categoria.nome }}</option>
                    </select>
                </div>
                <div class="col-3">
                    <label for="pp" class="form-label">PP: </label>
                    <input type="number" class="form-control" v-model="ataqueRequest.pontosDePoder" id="pp" required>
                </div>
                <div class="col-12">
                    <label for="categoria" class="form-label">Tipo do ataque: </label>
                    <select id="tipo" class="form-select" v-model="ataqueRequest.tipoId">
                        <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">
                            {{ tipo.nome }}
                        </option>
                    </select>
                </div>
                <div class="col-12">
                    <label for="descricao" class="form-label">Descrição do Ataque: </label>
                    <textarea class="form-control" id="descricao" v-model="ataqueRequest.descricao" rows="3"></textarea>
                </div>

                <div>
                    <button id="liveToastBtn" type="submit" class="btn btn-danger row-1">Cadastrar</button>
                </div>
            </form>
            <MensagemErro v-if="this.mensagemErroDTO.tipo == 
            'DataIntegrityViolationException' || this.mensagemErroDTO.tipo == 'InvalidDataAccessApiUsageException'" 
            :mensagemErroDTO="mensagemErroDTO" ></MensagemErro>

        </div>
    </div>
    <div v-else>
        <MensagemSucesso urlListagem="ataques-lista" @cadastro="novo">
            <span> Ataque cadastrado: {{ ataqueResponse.nome }}</span>
        </MensagemSucesso>
    </div>
</template>