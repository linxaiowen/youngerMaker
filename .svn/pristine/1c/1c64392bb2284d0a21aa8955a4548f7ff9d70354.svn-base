<template>
    <div class="content">
        <div class="bg_img">
            <img src="../../assets/images/img_guiz@2x.png">
        </div>
        <div class="rules">
            <span>复试说明</span>
        </div>
        <div class="description">
            <span>能造能拍的媒体大佬，请在48小时内将你引以为傲的作品上传至百度云，并将链接填写在下方空格处。复试结果将在提交后72小时内公布，登陆该系统查看。</span>
        </div>
        <div class="weibo_account">
            <input placeholder="www.baiduyun.com/XXX" v-model="weibo"></input>
            <img v-if="show == true" src="../../assets/images/ic_gou1@2x.png">
        </div>
        <div class="button" @click="doJump">
            <img src="../../assets/images/bt_01@2x.png">
            <span>提交</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            weibo: "",
            show: false
        }
    },
    watch: {
        weibo: function() {
            if(this.weibo != ""){
                this.show = true;
            }
        }
    },
    methods: {
        doJump(){
            this.$router.push({name: "MediaGroupSuccess"});
        }
    }
}
</script>
<style lang="scss" scoped>
.content{
    height: 100%;
    margin: 15px 20px 0 20px;
    border-radius: 8px;
    background: -webkit-linear-gradient(#221F54, #100D3E); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#221F54, #100D3E); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#221F54, #100D3E); /* Firefox 3.6 - 15 */
    background: linear-gradient(#221F54, #100D3E);
}
.bg_img{
    text-align: center;
    img{
        width: 191.9px;
        height: 42.8px;
    }
}
.rules{
    text-align: center;
    margin-top: 10.2px;
    margin-bottom: 15px;
    span{
        color: #3C3A67;
        font-size: 30px;
    }
}
.description{
    margin-left: 15px;
    margin-right: 15px;
    background-color: #231f5b;
    border-radius: 8px;
    padding: 13px 18px 9px 19px;
    span{
        color: #726D95;
        font-size: 14px;
        letter-spacing: 2px;
    }
}
.weibo_account{
    margin: 31px 15px 151px 15px;
    padding-left: 20px;
    padding-right: 20px;
    border:0.5px solid #464468;
    border-radius: 4px;
    background-color: #16143F;
    height: 112px;
    line-height: 36px;
    position: relative;
    input{
        color: white;
        font-size: 14px;
        border: none;
        background-color: transparent;
        outline: none;
        width: 100%;
    }
    img{
        width: 25px;
        height: 17.7px;
        position: absolute;
        right: 11.2px;
        bottom: 10.2px;
    }
}
.button{
    width: 170px;
    height: 56px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    img{
        width: 170px;
        height: 56px;
    }
    span{
        color: white;
        font-size: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>
