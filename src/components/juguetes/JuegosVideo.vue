<template>
    <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Tienda de juguetes",
                    href: "/#/juguetes-home",
                    name: "inicio"
                },
                {
                    text: "Electronicos",
                    href: "/#/electronicos",
                    name: "electronicos",

                },
                {
                    text: "Juegos de video",
                    href: "/#/juegosdevideo",
                    name: "juegosdevideo",
                    active: "true"
                },
            ],
        };
    },
};
</script>

<style></style>