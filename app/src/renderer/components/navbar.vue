<template>
  <nav>
    <img class="logo" src="../assets/icon.png" width="64" height="64">
    <router-link :to="{name: 'settings'}">
      <i class="fa fa-cog"></i>
      <label>Settings</label>
    </router-link>
    <router-link :to="{name: 'items-list'}">
      <img src="../assets/drop.png" width="32" height="32">
      <label>Items</label>
    </router-link>
    <router-link :to="{name: 'monster-list'}">
      <img src="../assets/ogre.png" width="36" height="36">
      <label>Monsters</label>
    </router-link>
    <router-link :to="{name: 'modifiers-list'}">
      <i class="fa fa-id-card"></i>
      <label>Modifiers</label>
    </router-link>
    <router-link :to="{name: 'quests-list'}">
      <i class="fa fa-envelope"></i>
      <label>Quests</label>
    </router-link>
  </nav>
</template>

<script>
  export default {
    components: {},
    name: 'navbar',
  }
</script>

<style scoped>
  img {
    image-rendering: pixelated;
    display: block;
  }

  .logo {
      margin: auto;
  }

  nav {
    background: black;
    height: 100%;
    width: 96px;
    padding: 0;
    position: fixed;
    left: 0;
    top: 0;
    border-right: 1px solid white;
    text-align: center;
  }
  a {
    color: white;
    text-decoration: none;
    height: 96px;
    width: 96px;
    display: block;
    opacity: .5;
    position: relative;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  a.router-link-active {
      background: white;
      color: black;
      opacity: 1;
  }
  a img {
    margin: 4px auto;
  }

  .fa {
    font-size: 32px;
    margin: 4px auto;
    vertical-align: center;
    display: block;
  }
</style>
