<template>
  <div class="content content-company">
    <ul>
      <li class="list-item" v-for="item in companyList" :key="item.name">
        <div class="item-icon">
          <i class="fa fa-graduation-cap"></i>
        </div>
        <div class="item-body">
          <h2 class="item-title">
            <span>{{ item.duration }}</span>
            <span>{{ item.name }}</span>
          </h2>
          <div class="item-content">
            <p>工作内容有：</p>
            <ul>
              <li v-for="(i, key) in item.descriptions" :key="i">
                <p>{{ key + 1 }}.{{ i }}</p>
              </li>
            </ul>
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
      'companyList'
    ])
  },
  created () {
    this.showCompany()
  },
  methods: {
    ...mapActions([
      'showCompany'
    ])
  }
}
</script>
