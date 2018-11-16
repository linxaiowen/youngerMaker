<template>
    <div class="volunteerFailedList">
        <x-header title="志愿者考验"></x-header>
        <div class="volunteerFailedTitle">
            <span>未能成为志愿者</span>
        </div>
        <div class="volunteerFailedText">
            <span>您已超过了30%的人</span>
        </div>
        <div class="volunteerFailedMessage">
            <div class="volunteerFailedMessageChild">文字描述后台配置</div>
            <div>背景图后台配置</div>
        </div>
        <div class="failedFooter" @click="jump">
            <span>返回首页</span>
            <div id="hidden"></div>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header"
export default {
    components: {
        'x-header': Header,
    },
    methods: {
        jump(){
            this.$router.push({name: "indexV"});
        }
    }
}
</script>
<style lang="scss" scoped>
.volunteerFailedList{
    padding-left: 18px;
    padding-right: 18px;
    text-align: center;
}
.volunteerFailedTitle{
    margin-top: 68px;
    span{
        font-size: 36px;
        color: #6B6B6B;
    }
}
.volunteerFailedText{
    span{
        color: #6B6B6B;
        font-size: 20px;
    }
}
.volunteerFailedMessage{
    margin-top: 16px;
    width: 100%;
    height: 206px;
    .volunteerFailedMessageChild{
        padding-top: 90px;
    }
}

.failedFooter{
    position: relative;
    width: 140px;
    height: 40px;
    border: 1px solid #797979;
    text-align: center;
    margin: auto;
    margin-top: 172px;
    z-index: 100;
    background-color: #F2F2F2;
    span{
        line-height: 35px;
        font-size: 14px;
        color: #333333;
    }
}
#hidden{
    position: absolute;
    margin: 0;
    height:43px;
    width: 100%;
    top: 0;
    border: 1px solid #797979;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: -1;
    // background-color: #F2F2F2;
}
</style>
