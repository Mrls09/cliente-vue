<template>
  <h1>HOLA</h1>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "/inicio",
          name:"inicio"
        },
        {
          text: "Electronicos",
          href: "/#/profile",
          name:"profile",
          active:"true"
        },
        {
          text: "Juegos de video",
          href: "/#/producto",
          name:"producto",
        },
      ],
    };
  },
};
</script>

<style>

</style>