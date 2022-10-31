<script>

export default {
    name: 'mensage-erro',
    props: {
        mensagemDeErro: String,
        ativo: Boolean
    },

}
</script>
<template>
    <div class="toast-container position-absolute top-0 end-0 mt-5 p-5">
        <div id="liveToast" class="toast bg-danger text-white" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body">
                {{ mensagemDeErro }}
            </div>
        </div>
    </div>
</template>