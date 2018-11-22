<template>
    <div class="content">
        <div class="resurrection">
            <img src="../../assets/images/resurrectionInvitation@2x.jpg">
        </div>
        <div class="zhongzi">
            <span class="value">复活值</span>
            <img src="../../assets/images/ic_da01@2x.png">
            <span class="number">8/20</span>
        </div>
        <div class="progressContainer">
            <div class="progress" :style="{width:progress+'%'}"></div>
        </div>
        <div class="description">
            <span>邀请20位好友点亮青火果，翻盘开启复活之门</span>
        </div>
        <div class="button" @click="doJump">
            <img src="../../assets/images/bt_003@2x.png">
            <span>邀请</span>
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
        this.change(); 
    },
    methods: { 
        change() { 
            let clearInt = setInterval(() => { 
                if(this.progress < 100){
                    this.progress++; 
                }
                else { 
                    clearInterval(clearInt); 
                } 
            }, 20) 

        },
        doJump(){
            this.$router.push({name: "TestQuestions"});
        }
    }
}
</script>
<style lang="scss" scoped>
.content{
    text-align: center;
    position: relative;
}
.resurrection{
    width: 100%;
    margin-bottom: 39px;
    img{
        width: 100%;
        height: 396px;
    }
}
.zhongzi{
    padding-left: 63px;
    padding-right: 63px;
    .value{
        color: #43FFF3;
        font-size: 12px;
        margin-right: 33px;
    }
    img{
        width: 13px;
        height: 14px;
        margin-right: 2px;
        vertical-align: middle;
    }
    .number{
        color: #43FFF3;
        font-size: 12px;
    }
}
.progressContainer{
    height: 16px;
    width: 255px;
    border-radius: 6px;
    background-color: #2a2296;
    margin-top: 9px;
    margin-left: 50%;
    transform: translateX(-50%);
    position: relative;
    .progress{
        background: -webkit-linear-gradient(to left,#78FFFA, #4A00DA); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(to left,#78FFFA, #4A00DA); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(to left,#78FFFA, #4A00DA); /* Firefox 3.6 - 15 */
        background: linear-gradient(to left,#78FFFA, #4A00DA);
        border-radius: 6px;
        height: 8px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
.description{
    margin-top: 23px;
    margin-bottom: 27px;
    span{
        color: #7D7BAC;
        font-size: 12px;
    }
}
.button{
    width: 136.6px;
    height: 44px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    img{
        width: 136.6px;
        height: 44px;
    }
    span{
        font-size: 16px;
        background: -webkit-linear-gradient(#FFFFFF, #99E0ED); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#FFFFFF, #99E0ED); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#FFFFFF, #99E0ED); /* Firefox 3.6 - 15 */
        background: linear-gradient(#FFFFFF, #99E0ED);
        -webkit-background-clip: text;
        color: transparent;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>
