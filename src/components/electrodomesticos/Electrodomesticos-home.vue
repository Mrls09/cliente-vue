<template>
  <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
        <b-button href="/#/electrodomesticos-cocina">Cocina</b-button>
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
            ],
        };
    },
};
</script>

<style>

</style>