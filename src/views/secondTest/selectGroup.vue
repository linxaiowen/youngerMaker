<template>
    <div class="content">
        <img class="bgImg" src="../../assets/images/xinlijishibeij02@2x.jpg">
        <div class="text">
            <img src="../../assets/images/ic_zhongzi@2x.png">
            <span>我是青火种，我要加入</span>
        </div>
        <div>
            <div class="lightGroup" @click="changeClass1" :class="{group: isActive==1 }">
                <span>秘书组</span>
                <img src="../../assets/images/ic_gou2@2x.png">
                <img v-if="isActive==1" src="../../assets/images/ic_gou1@2x.png">
            </div>
            <div class="lightGroup" @click="changeClass2" :class="{group: isActive==2 }">
                <span>会务组</span>
                <img src="../../assets/images/ic_gou2@2x.png">        
                <img v-if="isActive==2" src="../../assets/images/ic_gou1@2x.png">
            </div>
            <div class="lightGroup" @click="changeClass3" :class="{group: isActive==3 }">
                <span>媒体组</span>
                <img src="../../assets/images/ic_gou2@2x.png">
                <img v-if="isActive==3" src="../../assets/images/ic_gou1@2x.png">
            </div>
        </div>
        <div class="button" @click="doJump">
            <img src="../../assets/images/bt_01@2x.png">
            <span>确定</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isActive: 1
        }
    },
    mounted(){
        var lImg = document.getElementsByClassName("bgImg");
        var screenWidth = window.screen.width;
        lImg[0].style.width = screenWidth+"px";
    },
    methods: {
        changeClass1(){
            this.isActive = 1;
        },
        changeClass2(){
            this.isActive = 2;
        },
        changeClass3(){
            this.isActive = 3;
        },
        doJump(){
            this.$router.push({name: "MediaGroup"});
        }
    }
}
</script>
<style lang="scss" scoped>
.content{
    text-align: center;
}
.bgImg{
    width: 100%;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.text{
    position: relative;
    z-index: 100;
    margin-top: 148px;
    margin-bottom: 46px;
    img{
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    span{
        color: #D2CFE3;
        font-size: 16px;
    }
}
.group{
    width: 244px;
    height: 44px;
    line-height: 44px;
    z-index: 100;
    background-color: #16143F;
    border: 0.5px solid #43FFF3 !important;
    border-radius: 22px;
    position: relative;
    margin: 20px 20% 0 20%;
    span{
        color: #43FFF3 !important;
        font-size: 16px;
    }
    img{
        width: 22px;
        height: 16px;
        position: absolute;
        right: 11.2px;
        top: 50%;
        transform: translateY(-50%);
    }
}
.lightGroup{
    width: 244px;
    height: 44px;
    line-height: 44px;
    z-index: 100;
    background-color: #16143F;
    border: 0.5px solid #464468;
    border-radius: 22px;
    position: relative;
    margin: 20px 20% 0 20%;
    span{
        color: white;
        font-size: 16px;
    }
    img{
        width: 22px;
        height: 16px;
        position: absolute;
        right: 11.2px;
        top: 50%;
        transform: translateY(-50%);
    }
}
.button{
    width: 170px;
    height: 56px;
    // margin-left: 25%;
    // margin-right: 25%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    margin-top: 109px;
    img{
        width: 170px;
        height: 56px;
    }
    span{
        color: white;
        font-size: 16px;
        background: -webkit-linear-gradient(#FFFFFF, #99E0ED); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#FFFFFF, #99E0ED); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#FFFFFF, #99E0ED); /* Firefox 3.6 - 15 */
        background: linear-gradient(#FFFFFF, #99E0ED);
        -webkit-background-clip: text;
        color: transparent;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>
