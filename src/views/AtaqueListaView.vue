<script>
import AtaqueDataService from '../services/AtaqueDataService';

export default {
    name: "ataques-lista",
    deletar: false,
    data() {
        return { ataques: [] };
    },
    methods: {
        buscarAtaques() {
            AtaqueDataService.buscarTodos()
                .then(resposta => {
                    this.ataques = resposta
                })
                .catch(erro => {
                    console.log(erro);
                })
        },
        editarAtaque(id) {
            console.log(id);
            this.$router.push({ name: 'ataques-edit', params: { id: id } });
        },
        async removerAtaque(id) {
            if (deletar){
                await AtaqueDataService.remover(id)
            this.buscarAtaques();
        }else{
            this.buscarAtaques();
        }
    },

    mounted() {
        this.buscarAtaques();
    }
}
</script>

<template>
    <main>
        <div>
            <h2 class=" mb-4 mt-4">Lista de Ataques</h2>
            <div class="container  ">
                <table class="table ">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">Id</th>
                            <th scope="col" class="text-center">Ataque</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Força</th>
                            <th scope="col">Acurácia%</th>
                            <th scope="col">PP</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Deletar</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider text-center">
                        <tr v-for="ataque in ataques" :key="ataque.id">
                            <th scope="row">{{ataque.id}}</th>
                            <td class="text-center">{{ataque.nome}}</td>
                            <td>{{ataque.tipo.nome}}</td>
                            <td class="text-center">{{ataque.categoria}}</td>
                            <td class="text-center">{{ataque.forca}}</td>
                            <td class="text-center">{{ataque.acuracia}}</td>
                            <td class="text-center">{{ataque.pontosDePoder}}</td>
                            <td>
                                <button type="button" class="btn" @click="editarAtaque(ataque.id)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path
                                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd"
                                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </button>
                            </td>
                            <td>
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Mas espera aí?</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                Você tem certeza que deseja excluir este ataque?
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-danger"
                                                    @click="removerAtaque(ataque.id) ">Deletar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>