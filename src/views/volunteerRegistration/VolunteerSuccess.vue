<template>
    <div class="volunteerSuccessList">
        <x-header title="志愿者考验"></x-header>
        <div class="volunteerSuccessTitle">
            <span>志愿者证书</span>
        </div>
        <div class="volunteerSuccessContent">
            <p>志愿者:林晓雯</p>
        </div>
        <div class="volunteerSuccessContent">
            <p>证书ID:1234567890</p>
        </div>
        <div class="volunteerSuccessMessage">
            <div class="volunteerSuccessMessageChild">文字描述后台配置</div>
            <div>背景图片后台配置</div>
        </div>
        <div class="volunteerSuccessFooter">
            <div id="left" @click="jumpI">
                <span>返回首页</span>
                <div id="hidden"></div>
            </div>
            <div id="right" @click="share">
                <span>炫耀一下</span>
                <div id="hidden"></div>
            </div>
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
        jumpI(){
            this.$router.push({name: "indexV"});
        },
        share(){
            // this.$router.push({name: "indexV"});
        }
    }
}
</script>
<style lang="scss" scoped>
.volunteerSuccessList{
    padding-left: 18px;
    padding-right: 18px;
    text-align: center;
}
.volunteerSuccessTitle{
    margin-top: 68px;
    width: 100%;
    height: 89px;
    span{
        font-size: 28px;
        color: #6B6B6B;
        line-height: 89px;
    }
}
.volunteerSuccessContent{
    p{
        color: #AEAEAE;
        font-size: 13px;
    }
}
.volunteerSuccessMessage{
    width: 100%;
    height: 179px;
    color: #AEAEAE;
    font-size: 13px;
    .volunteerSuccessMessageChild{
        padding-top: 75px;
    }
}
.volunteerSuccessFooter{
    overflow: hidden;
    div{
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
    background-color: transparent;
}
#left{
    float: left;
}
#right{
    float: right;
}
</style>
