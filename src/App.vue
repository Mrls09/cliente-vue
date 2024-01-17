<template>
  <div id="app">
    <div class="navbar">
      <p>Navbar</p>
    </div>
    <div class="container">
      <div class="sidebar">
        <p>Sidebar</p>
        <b-nav-item><b-link :to="{ name: 'juguetes-home' }">
            Tienda de juguetes 
          </b-link>
        </b-nav-item>

        <b-nav-item><b-link :to="{ name: 'electrodomesticos-home' }">Tienda de electrodomesticos</b-link>
        </b-nav-item>

        <b-nav-item><b-link :to="{ name: 'producto' }">Tienda de productos para el hogar</b-link>
        </b-nav-item>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #3498db;
  padding: 10px;
  height: 60px;
  color: #fff;
}

.sidebar {
  width: 200px;
  height: 100%;
  background-color: #2c3e50;
  color: #fff;
  position: fixed;
  left: 0;
  top: 60px;
  /* Ajusta según el tamaño de tu navbar */
  overflow-y: auto;
}

.content {
  flex: 1;
  padding: 20px;
  margin-left: 150px;
}
</style>
