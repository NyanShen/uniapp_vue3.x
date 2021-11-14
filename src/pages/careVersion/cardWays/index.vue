<template>
  <view class="care-box">
    <view class="care-common-title">选择添加／办卡方式</view>
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
<style lang="stylus" scoped>
.ways-list {
  padding: 30rpx;

  .ways-item {
    display: flex;
    align-items: center;
    padding: 70rpx 40rpx;
    margin-top: 30rpx;
    border-radius: 30rpx;
    background-color: #fff;

    .icon {
      width: 120rpx;
      height: 120rpx;
      margin-right: 30rpx;

      .img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      flex: 1;
      font-weight: 600;
    }

    .flex-right {
      width: 17rpx;
      height: 28rpx;
      background: url('/static/arrow_right41.png') no-repeat center;
      background-size: 17rpx 28rpx;
    }
  }
}
</style>

