<template>
  <div class="content content-experience">
    <ul>
      <li class="list-item" v-for="item in experiences" :key="item.name">
        <div class="item-icon">
          <i class="fa fa-black-tie"></i>
        </div>
        <div class="item-body">
          <h2 class="item-title">{{ item.name }}</h2>
          <div class="item-content">
            <p>{{ item.description }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'experiences'
    ])
  },
  created () {
    this.showExperience()
  },
  methods: {
    ...mapActions([
      'showExperience'
    ])
  }
}
</script>
