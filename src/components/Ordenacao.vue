<script>
export default {
    name: 'ordenacao-alfabetica',
    props: {

    }
}
</script>

<template>
    <div class="col-1 text-end">
        <select class=" form-select  " aria-label="Default select example">
            <option selected disabled>Filtrar</option>
            <option value="1">A - Z</option>
            <option value="2">Z - A </option>

        </select>
    </div>
</template>