<template>
    <div class="questionList">
        <div class="questionOptions">
            <div v-for="option in data">
                <span>{{option.options}} {{option.content}}</span>
                <div id="hidden"></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Header from "@/components/Header"
export default {
    components: {
        'x-header': Header,
    },
    props: ["data"],
}
</script>
<style lang="scss" scoped>
.questionList{
    padding-left: 18px;
    padding-right: 18px;
}
.questionOptions{
    div{
        position: relative;
        width: 100%;
        height: 35px;
        border: 1px solid #797979;
        margin-top: 20px;
        text-align: center;
        z-index: 100;
        // background-color: #D7D7D7;
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
    height:37px;
    width: 100%;
    top: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: -1;
    background-color: transparent;
}
</style>
