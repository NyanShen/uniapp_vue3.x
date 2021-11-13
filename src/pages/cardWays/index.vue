<template>
  <view class="care-box">
    <view class="ways-list">
      <view class="ways-item">
        <view class="icon">
          <image class="img" src="/static/ways01.png" />
        </view>
        <view class="content"> 扫描身份证</view>
        <view class="flex-right"> </view>
      </view>
      <view class="ways-item">
        <view class="icon">
          <image class="img" src="/static/ways02.png" />
        </view>
        <view class="content"> 手动录入</view>
        <view class="flex-right"> </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  setup() {
    return {
      title: "hello world",
    };
  },
  onLoad() {
    let self = this;
    self.$miniApp.setNavigationBarColor("#000000", "#ffffff");
  },

  methods: {},
};
</script>

