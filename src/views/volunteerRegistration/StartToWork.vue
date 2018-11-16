<template>
    <div class="questionList">
        <x-header title="志愿者考验"></x-header>
        <div class="questionTitle">
            <span>终极考验:脑力全开</span>
        </div>
        <div class="questionContent">
            <span>答题提示内容</span>
        </div>
        <div class="questionButton">
            <button @click="jump">开始答题</button>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header"
export default {
    components: {
        'x-header':Header,
    },
    methods: {
        jump(){
            this.$router.push({name: "questionList"});
        }
    }
}
</script>
<style lang="scss" scoped>
.questionList{
    text-align: center;
    padding-left: 18px;
    padding-right: 18px;
    .questionTitle{
        margin-top: 68px;
        height: 37px;
        font-size: 20px;
        color: #6B6B6B;
    }
}
.questionContent{
    width: 100%;
    height: 280px;
    span{
        line-height: 280px;
        color: #AEAEAE;
        font-size: 13px;
    }
}
.questionButton {
    margin-top: 189px;
    button{
        width: 260px;
        height: 40px;
        background-color: #6B6B6B;
        color: white;
        border-radius: 10px;
        outline: none;
    }
}
</style>
