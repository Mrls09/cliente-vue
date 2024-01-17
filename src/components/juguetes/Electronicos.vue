<template>
    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-button href="/#/juegosdevideo">Juegos de video</b-button>
    </div>
</template>

<script>
export default {
    props: {
    },
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
                    href: "/#/profile",
                    name: "profile",
                    active: "true"
                },
            ],
        };
    },
};
</script>

<style></style>