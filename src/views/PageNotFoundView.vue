<template>
    <div class="container text-center">
        <div>
            <h1 class="m-4"> Essa página não existe !</h1>
        </div>
        <div class="">
            <img src="../assets//stat-snorlax.png" class="m-4 img-fluid w-75" alt=""
            style="max-width: 350px;">
            <h3 class="display-4">ZzZzZ..</h3>
        </div>
        <p class="mt-4">Voltar para <RouterLink to="/">página inicial</RouterLink></p>
    </div>
</template>

<script setup>
import {RouterLink} from 'vue-router';
</script>