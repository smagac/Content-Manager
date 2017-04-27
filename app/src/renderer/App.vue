<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <toast-container></toast-container>
  </div>
</template>

<script>
  import Navbar from 'components/navbar';
  import ToastContainer from 'components/ToastContainer';
  export default {
    components: {
      Navbar,
      ToastContainer
    }
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/pure/0.6.2/base-min.css);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/pure/0.6.2/pure.css);

  @font-face {
    font-family: "Alagard";
    src: url('assets/alagard.ttf');
  }
  @font-face {
    font-family: "Munro";
    src: url('assets/Munro.ttf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body { height: 100%; }
  body {
    align-items: flex-start;
    background: white;
    display: flex;
    font-family: "Munro", Helvetica, sans-serif;
    justify-content: flex-start;
    padding-left: 96px;
  }

  #app {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    overflow: auto;
  }

  .panel {
    font-size: 1rem;
    width: 300px;
    height: 100%;
    overflow-y: auto;
    display: inline-block;
    box-sizing: border-box;
    background: white;
    color: black;
  }

  .panel .heading {
    font-size: 1.25em;
    padding: 4px 8px;
    text-decoration: none;
    color: black;
    border-bottom: 1px solid rgba(0,0,0,.4);
    margin-bottom: 4px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    font-family: "Alagard", Helvetica, sans-serif;
  }

  .panel ul {
    margin: 0;
    width: 100%;
  }

  .panel ul li {
    margin: 0;
    width: 100%;
    padding: 0;
  }

  .panel ul li a {
    padding: 8px 18px;
    display: block;
  }

  .panel a {
    display: block;
    width: 100%;
    color: black;
    background: transparent;
    text-decoration: none;
  }

  .panel a:hover, .panel a.router-link-active {
    background: black;
    color: white;
  }

  .edit {
      font-size: 1rem;
      width: calc(100% - 300px);
      height: 100%;
      overflow-y: auto;
      display: inline-block;
      box-sizing: border-box;
      padding: .5rem;
      background: black;
      color: white;
  }

  .edit legend {
    font-size: 1.2em;
  }

  .edit .heading {
    font-size: 2em;
    font-weight: normal;
  }

  .edit label {
    margin-top: .5em;
    margin-bottom: .25em;
    display: block;
    font-family: "Alagard", Helvetica, sans-serif;
    font-weight: normal;
    font-size: 1.25em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Alagard", Helvetica, sans-serif;
    font-weight: normal;
  }

  button, input, textarea, select {
    background: transparent;
    border: 2px solid white;
    border-radius: 0;
    padding: 8px;
    box-shadow: none;
    margin-bottom: .5em;
    color: white;
    font-family: "Munro", Helvetica, sans-serif !important;
  }

  option {
    background: black;
    padding: 8px;
    color: white;
    font-family: "Munro", Helvetica, sans-serif !important;
  }

  input, textarea {
    display: block;
    width: 98%;
    box-sizing: border-box;
    max-width: 100%;
  }

  textarea {
    resize: vertical; 
  }

  button {
    min-width: 100px;
  }
</style>
