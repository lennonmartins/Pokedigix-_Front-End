<script>
export default {
    name: 'paginacao-numerada',
    props: {
        urlListagem: String,
    }
}
</script>

<template>
    <div>

        <ul class="mt-3 pagination justify-content-end">
            <li class="page-item disabled">
                <a class="page-link">Previous</a>
            </li>
            <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
            <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
            <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link text-dark" href="#">Next</a>
            </li>
        </ul>

    </div>
</template>
