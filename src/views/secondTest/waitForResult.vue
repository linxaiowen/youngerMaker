<template>
    <div class="registerSuccess">
        <div class="img_quan">
            <img src="../../assets/images/img_quan@2x.png">
        </div>
        <div class="img_chengg">
            <img src="../../assets/images/img_wait@2x.png">
        </div>
        <div class="complete">
            <span>等待审核</span>
        </div>
        <div class="autoLogin">
            <span>热情的青火种，你的复试内容已提交，结果将在72小时内反馈，登录该系统方可查看成绩。感谢你的真心，期待你的好运。</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            progress: 0,
        } 
    },
    created(){ 
         
    },
    methods: { 
        
    } 
}
</script>
<style lang="scss" scoped>
.registerSuccess{
    text-align: center;
}
.img_quan{
    img{
        width: 191px;
        height: 97px;
    }
}
.img_chengg{
    margin-top: 53px;
    img{
        width: 185px;
        height: 187px;
    }
}
.complete{
    margin-top: 29px;
    margin-bottom: 27px;
    span{
        font-size: 30px;
        letter-spacing: 8px;
        background: -webkit-linear-gradient(#40778C, #131052); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#40778C, #131052); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#40778C, #131052); /* Firefox 3.6 - 15 */
        background: linear-gradient(#40778C, #131052);
        -webkit-background-clip: text;
        color: transparent;
        font-weight: bold;
    }
}
.autoLogin{
    margin: 15px 65px 0 67px;
    letter-spacing: 3.73px;
    text-align: left;
    span{
        color: #726D95;
        font-size: 14px;
    }
}
</style>
