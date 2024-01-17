<template>
  <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-button href="/#/electrodomesticos-estufa">Estufas</b-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: "Tienda de electrodomesticos",
                    href: "/electrodomesticos-home",
                    name: "electrodomesticos-home"
                },
                {
                    text: "Cocina",
                    href: "/electrodomesticos-cocina",
                    name: "electrodomesticos-cocina"
                },
            ],
        };
    },
};
</script>

<style>

</style>