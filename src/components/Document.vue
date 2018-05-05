<template>
  <div class="content content-document">
    <div class="head-img">
      <img src="../common/images/head_img.jpeg" />
    </div>
    <h1>{{ document.name }}</h1>
    <h2><i class="fa fa-birthday-cake"></i>{{ document.birthday }}</h2>
    <p>{{ document.introduction }}</p>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'document'
    ])
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
<style scoped>
  .head-img{
    text-align: center;
  }
  .head-img img{
    width: 140px;
    height: 140px;
    border-radius: 50%;
  }
  h1{
    font-size: 36px;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 30px;
  }
  h2{
    text-align: center;
    font-size: 14px;
    margin-bottom: 30px;
  }
  p{
    font-size: 16px;
  }
</style>
