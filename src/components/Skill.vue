<template>
  <div class="content content-skill">
    <ul>
      <li v-for="item in skills" :key="item.name" class="skill-item">
        <h5>{{ item.name }}</h5>
        <b-progress :value="item.score" show-value variant="success" striped animated class="mb-2"></b-progress>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Vue from 'vue'
import bProgress from 'bootstrap-vue/es/components/progress/progress'
Vue.component('b-progress', bProgress)
export default {
  computed: {
    ...mapState([
      'skills'
    ])
  },
  created () {
    this.showSkill()
  },
  methods: {
    ...mapActions([
      'showSkill'
    ])
  }
}
</script>
