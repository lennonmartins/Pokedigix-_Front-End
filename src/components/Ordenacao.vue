<script>
export default {
    name: 'ordenacao',
    props: {
        ordenacao: Object,
        opcoes: Array
    }, 
    methods:{
        filtrar() {
            this.$emit('ordenar');
        }
    }
}
</script>

<template>
    <div class="col-2 text-end" >
        Componente: {{ordenacao}}
        <select @change="filtrar" v-model="ordenacao" class=" form-select"  aria-label="Default select example">
            <option selected disabled>Filtrar</option>
            <option v-for="opcao in opcoes"  :key="opcao.titulo" :value="opcao">{{opcao.titulo}}</option>

        </select>
    </div>
</template>