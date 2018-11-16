<template>
    <div class="reviewList">
        <x-header title="志愿者考验"></x-header>
        <div class="reviewTitle">
            <span>已完成志愿者报名申请</span>
        </div>
        <div class="reviewText">
            <span>审核通过后您将成为一名合格的志愿者</span>
        </div>
        <div class="reviewMessage">
            <span>内容提示后台配置</span>
        </div>
        <div class="reviewImg">
            <span>后台配置是否有图片及图片内容</span>
        </div>
        <div class="reviewFooter">
            <button @click="jump">返回首页</button>
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
.reviewList{
    text-align: center;
    padding-left: 18px;
    padding-right: 18px;
}
.reviewTitle{
    color: #6B6B6B;
    font-size: 20px;
    margin-top: 68px;
}
.reviewText{
    font-size: 13px;
    color: #AEAEAE;
    width: 100%;
    height: 36px;
    span{
        line-height: 36px;
    }
}
.reviewMessage{
    width: 100%;
    height: 229px;
    span{
        line-height: 229px;
        font-size: 13px;
        color: #AEAEAE;
    }
}
.reviewImg{
    width: 140px;
    height: 140px;
    background-color: #F2F2F2;
    margin: auto;
    span{
        color: #949494;
        font-size: 13px;
        display: block;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
}
.reviewFooter{
    margin-top: 86px;
    text-align: center;
    button{
        width: 260px;
        height: 40px;
        background-color: #6B6B6B;
        color: white;
        outline: none;
        border-radius: 10px;
    }
}
</style>
