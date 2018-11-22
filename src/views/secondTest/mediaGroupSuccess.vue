<template>
    <div class="registerSuccess">
        <div class="img_quan">
            <img src="../../assets/images/img_quan@2x.png">
        </div>
        <div class="img_chengg">
            <img src="../../assets/images/img_chengg@2x.png">
        </div>
        <div class="complete">
            <span>提交成功</span>
        </div>
        <div class="autoLogin">
            <span>媒体作品已经提交成功啦</span>
        </div>    
        <div class="button" @click="doJump">
            <img src="../../assets/images/bt_01@2x.png">
            <span>查看审核进度</span>
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
        doJump(){
            this.$router.push({name: "WaitForResult"});
        }
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
    margin-top: 37px;
    margin-bottom: 10px;
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
    margin-top: 15px;
    letter-spacing: 3.73px;
    span{
        color: #726D95;
        font-size: 14px;
    }
}
.button{
    width: 170px;
    height: 56px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 69px;
    img{
        width: 170px;
        height: 56px;
    }
    span{
        color: white;
        font-size: 16px;
        display: block;
        margin-top: -40px;
    }
}
</style>
