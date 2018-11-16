<template>
    <div class="rulesList">
        <x-header title="志愿者考验"></x-header>
        <div class="rulesTitle">
            <span>打卡规则</span>
        </div>
        <div class="rulesContent">
            <span>内容提示后台配置</span>
        </div>
        <div class="rulesInput">
            <label>微博:</label>
            <input placeholder="请输入微博名称" required />
        </div>
        <div class="clockFooter">
            <button @click="jump">下一步</button>
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
            this.$router.push({name: "waitForReview"});
        }
    }
}
</script>
<style lang="scss" scoped>
.rulesList{
    padding-left: 18px;
    padding-right: 18px;
    margin-top: 68px;
}
.rulesTitle{
    text-align: center;
    width: 100%;
    height: 37px;
    span{
        color: #6B6B6B;
        font-size: 20px;
        line-height: 37px;
    }
}
.rulesContent{
    width: 100%;
    height: 205px;
    text-align: center;
    margin-bottom: 37px;
    span{
        line-height: 205px;
        font-size: 13px;
        color: #AEAEAE;
    }
}
.rulesInput{
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 1px solid #797979;
    label{
        line-height: 40px;
        font-size: 13px;
        color: #868686;
    }
    input{
        border: none;
        outline: none;
        flex: 1;
        text-align: right;
        font-size: 13px;
        color: #CFCFD2;
    }
}
.clockFooter{
    margin-top: 187px;
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
