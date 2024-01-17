<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-button href="/#/electronicos">Electronicos</b-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Tienda de juguetes",
                    href: "/juguetes-home",
                    name: "juguetes-home"
                },
            ],
        };
    },
};
</script>

<style></style>