<script>
export default {
    name: 'mensagme-sucesso',
    props: {
        urlListagem: String,
    },
    methods: {
        voltar() {
            this.$router.push({ name: this.urlListagem })
        },
        novo() {
            this.$emit('cadastro');
        }

    }
}
</script>

<template>
    <div>
        <div class="row">
            <div class="alert alert-success mt-3" role="alert">
                <slot></slot>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <button @click="novo" class="btn btn-dark mt-2">Novo</button>
            </div>
            <div class="col-6">
                <button @click="voltar" class="btn btn-dark mt-2">Voltar</button>
            </div>
        </div>
    </div>
</template>