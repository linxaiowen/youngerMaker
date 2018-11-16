<template>
  <div class="header">
    <x-header :left-options='{backText:null}' :title="title">
        <!-- <div slot="right">
            <mt-button v-if="right">{{right}}</mt-button>
            <slot name="right"></slot>
        </div> -->
    </x-header>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  components: {
        XHeader,
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    icon: {},
    right: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.header{
  position: relative;
    .vux-header{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      background-color: white;
      border-bottom: 1px solid rgb(225, 225, 225);
    }
}
.vux-header /deep/ .vux-header-title {
  color: #6B6B6B;
}
</style>

