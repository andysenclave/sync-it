<template>
  <main id="wrapper" class="animated slideInRight fast">
    <div class="center-content">
      <h2>{{ fms.setup.header }}</h2>
      <p class="subtitle">{{ fms.setup.subtitle }}</p>
      <div class="btn-wrapper first">
        <div class="btn-icon-wrapper" @click="setDownloadPath">
          <button type="button" class="btn-rounded primary">
            <span class="icon icon-download"></span>
          </button>
          <span class="file-path">{{ filePath.download }}</span>
        </div>
        <div class="btn-icon-wrapper" @click="setBackupPath">
          <button type="button" class="btn-rounded primary">
            <span class="icon icon-backup"></span>
          </button>
          <span class="file-path">{{ filePath.backup }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  const fs = require('fs')
  const remote = require('electron').remote

  export default {
    name: 'setup',
    data: function () {
      return {
        fms: {
          setup: {
            header: `Let's set it up`,
            subtitle: 'Choose the endpoints',
            btnText: 'Choose Home'
          }
        },
        navigator: {
          nextPage: '/landing-page'
        },
        filePath: {
          download: '...',
          backup: '...'
        }
      }
    },
    methods: {
      createDialogue () {
        const dialog = remote.require('electron').dialog
        const selectedPath = dialog.showOpenDialog({
          properties: ['openDirectory']
        })
        return selectedPath
      },
      cleanPath (path) {
        if (typeof path === 'undefined') {
          return '...'
        } else {
          let editedPath = `${path.substr(1, 25)}`
          if (path.length > 26) {
            editedPath = `${editedPath}...`
          }
          return editedPath.toLowerCase()
        }
      },
      setDownloadPath () {
        const selectedPath = this.createDialogue()[0]
        const cleanPath = this.cleanPath(selectedPath)
        let filesObj = []
        this.filePath.download = cleanPath
        fs.readdirSync(selectedPath).forEach(function (file) {
          filesObj.push(file)
        }, this, filesObj)
        console.log(filesObj)
      },
      setBackupPath () {
        const selectedPath = this.createDialogue()[0]
        const cleanPath = this.cleanPath(selectedPath)
        this.filePath.download = cleanPath
      }
    }
  }
</script>
