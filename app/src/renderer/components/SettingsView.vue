<template>
  <div id="SettingsForm">
      <form class="pure-form pure-form-stacked">
        <fieldset>
            <label for="assets">Assets Folder</label>
            <button class='pure-button' @click="findAssetsDirectory">Locate Assets Folder</button>
            <span class="pure-form-message">{{assetsFolder}}</span>
        </fieldset>
    </form>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  const { dialog } = require('electron').remote;

  export default {
    components: {},
    name: 'SettingsView',
    computed: {
        ...mapGetters({
            assetsFolder: 'config/Assets'
        })
    },
    methods: {
        ...mapActions({
            setSources: 'ChangeAssets'
        }),
        findAssetsDirectory() {
            dialog.showOpenDialog({
                properties: ['openDirectory']
            }, (dirs) => {
                this.setSources(dirs[0]);
            })
        }
    }
  }
</script>

<style scoped>
    #SettingsForm {
        padding: 0;
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        vertical-align: middle;
        align-content: center;
        text-align: center;
        flex-direction: column;
    }
</style>
