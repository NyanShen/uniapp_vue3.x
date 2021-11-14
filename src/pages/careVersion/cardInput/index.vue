<template>
  <view class="care-box">
    <view class="care-common-title">手动录入</view>
    <view class="form-wrap">
      <view class="form-content">
        <view class="form-item">
          <view class="label">姓名</view>
          <input
          class="input"
            v-model="name"
            type="text"
            placeholder="请输入姓名"
            placeholder-style="color: #989EA7;"
          />
        </view>
        <view class="form-item">
          <view class="label">身份证</view>
          <input
          class="input"
            v-model="idCard"
            type="text"
            placeholder="请输入身份证号"
            placeholder-style="color: #989EA7;"
          />
        </view>
      </view>
    </view>
    <view class="form-btn">
      <view class="btn btn-primary">下一步</view>
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
.form-wrap {
  padding: 0 30rpx;

  .form-content {
    .form-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 120rpx;
      line-height: 120rpx;
      font-size: 46rpx;
      padding: 0 30rpx;
      background-color: #fff;
      color: #274B7A;
      
      &:first-child {
        border-radius: 30rpx 30rpx 0 0;
      }
      &:last-child {
        margin-top: 1rpx;
        border-radius: 0 0 30rpx 30rpx;
      }

      .label {
        width: 150rpx;
      }

      .input {
        flex: 1;
        text-align: right;
      }
    }
  }
}

.form-btn {
  padding: 30rpx;
  margin-top: 60rpx;

  .btn {
    font-size: 46rpx;
    height: 100rpx;
    line-height: 100rpx;
    border-radius: 50rpx;
  }
}
</style>

