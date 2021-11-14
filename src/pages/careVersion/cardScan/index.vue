<template>
  <view class="care-box">
    <view class="care-common-title">扫身份证</view>
    <view class="card-content">
      <view class="card-content-inner">
        <view class="icon">
          <image class="img" src="/static/scan02.png" />
        </view>
        <view class="p1">扫描身份证办卡</view>
        <view class="p2">请扫描身份证人像面办卡</view>
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

<style lang="stylus" scoped>
.card-content {
  padding: 0 30rpx;
}

.card-content-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 690rpx;
  height: 380rpx;
  border-radius: 30rpx;
  background-color: #2279ea;
  color: #fff;

  .icon {
    width: 100rpx;
    height: 100rpx;
    margin-top: 70rpx;

    .img {
      width: 100%;
      height: 100%;
    }
  }

  .p1 {
    font-size: 46rpx;
    margin-top: 30rpx;
  }

  .p2 {
    font-size: 40rpx;
    margin-top: 20rpx;
  }
}
</style>

