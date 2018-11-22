<template>
    <div class="content">
        <div class="bg_img">
            <img src="../../assets/images/img_guiz@2x.png">
        </div>
        <div class="rules">
            <span>微博打卡规则</span>
        </div>
        <div class="description">
            <span>欢迎来到青春合伙人打卡7天乐，请在要求处填写你的新浪微博链接，按照要求完成打卡。打卡规则：2018年12月11日——17日每晚20:00，新浪微博ID：皇家大白将在微博主页发布当天的打卡话题，请在新浪微博超话#亚布力青春合伙人#中就每日话题发表你的见解，并@皇家大白、@亚布力青春合伙人。完成7天打卡视为合格，打卡截止日期为2018年12月28日24:00。</span>
        </div>
        <div class="weibo_account">
            <input placeholder="请填写微博账号" v-model="weibo"></input>
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
            this.$router.push({name: "SelectGroup"});
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
    height: 287px;
    margin-left: 15px;
    margin-right: 15px;
    padding: 10px 18px 14px 19px;
    background-color: #0C0A35;
    border-radius: 8px;
    span{
        color: #726D95;
        font-size: 14px;
    }
}
.weibo_account{
    margin: 20px 15px 29px 15px;
    padding-left: 20px;
    padding-right: 20px;
    border:0.5px solid #464468;
    border-radius: 4px;
    background-color: #16143F;
    height: 36px;
    line-height: 36px;
    position: relative;
    input{
        color: white;
        font-size: 14px;
        border: none;
        background-color: transparent;
        outline: none;
        width: 80%;
    }
    img{
        width: 25px;
        height: 17.7px;
        right: 18.2px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

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
