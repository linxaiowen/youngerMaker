<template>
    <div class="content">
        <div class="ic_ceshi">
            <img src="../../assets/images/ic_ceshi07@2x.png">
        </div>
        <div class="bg_ceshi">
            <img src="../../assets/images/bg_ceshi02@2x.png">
        </div>
        <div class="complete">
            <span>测试完成</span>
        </div>
        <div class="result">
            <span>测试结果生成中...</span>
        </div>
        <div class="progressContainer">
            <div class="progress" :style="{width:progress+'%'}"></div>
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
                else{
                    // this.$router.push({name: "BasicInformation"});
                    clearInterval(clearInt); 
                } 
            }, 20) 

        } 
    }
}
</script>
<style lang="scss" scoped>
.content{
    text-align: center;
}
.ic_ceshi{
    margin-top: 75px;
    margin-bottom: 18px;
    img{
        width: 136px;
        height: 177px;
    }
}
.bg_ceshi{
    img{
        width: 142px;
        height: 49px;
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
.result{
    span{
        color: #726D95;
        font-size: 14px;
        letter-spacing: 3.73px;
    }
}
.progressContainer{
    height: 8px;
    width: 100px;
    border-radius: 6px;
    background-color: #161449;
    margin-top: 45px;
    margin-left: 50%;
    transform: translateX(-50%);
    .progress{
        background-color: #43FFF3;
        border-radius: 6px;
        height: 8px;
    }
}
</style>
