<template>
  <div>
    <div>document</div>
    <div>{{ doc.name }}</div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default{
  computed: {
    ...mapState({
      doc: state => state.document
    })
  },
  created () {
    this.showDocument()
  },
  methods: {
    ...mapActions([
      'showDocument'
    ])
  }
}
</script>
