<template>
    <div class="content">
        <div class="img_chengg">
            <img src="../../assets/images/img_chengg@2x.png">
        </div>
        <div class="testCount">
            <span>通过，答对8题</span>
        </div>
        <div class="textP">
            <p>春生夏长，秋收冬藏，恭喜你的付出让青火种展现锋芒。</p>
            <p>月异日新，踵事增华，下一站开启前</p>
        </div>
        <div class="textS">
            <span>你是否好奇在心灵市集，你会与哪位企业家匹配？</span>
        </div>
        <div class="button">
            <div class="button_left">
                <img src="../../assets/images/bt_02@2x.png">
                <span>不关心，跳过</span>
            </div>
            <div class="button_right">
                <img src="../../assets/images/bt_003@2x.png">
                <span>走进心灵市集</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            
        } 
    },
    created(){ 
        
    },
    methods: { 
    } 
}
</script>
<style lang="scss" scoped>
.content{
    text-align: center;
}
.img_chengg{
    margin-top: 30px;
    margin-bottom: 20px;
    img{
        width: 185px;
        height: 187px;
    }
}
.testCount{
    margin-bottom: 29px;
    span{
        background: -webkit-linear-gradient(#40778C, #131052); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#40778C, #131052); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#40778C, #131052); /* Firefox 3.6 - 15 */
        background: linear-gradient(#40778C, #131052);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 30px;
        font-weight: bold;
    }
    
}
.textP{
    text-align: left;
    padding-left: 43px;
    padding-right: 42px;
    p{
        color: #726D95;
        font-size: 14px;
    }
}
.textS{
    margin: 25px 40px 45px 41px;
    padding: 15px 44px 17px 44px;
    border-radius: 8px;
    background: -webkit-linear-gradient(to right,rgba(36,31,147,1), rgba(22,20,68,0.44)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(to right,rgba(36,31,147,1), rgba(22,20,68,0.44)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(to right,rgba(36,31,147,1), rgba(22,20,68,0.44)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right,rgba(36,31,147,1), rgba(22,20,68,0.44));
    span{
        color: white;
        font-size: 14px;
        letter-spacing: 3.73px;
    }
}
.button{
    margin-left: 36px;
    margin-right: 36px;
    position: relative;
    .button_left{
        
        img{
            width: 137px;
            height: 44px;
            position: absolute;
            left: 0;
        }
        span{
            color: white;
            font-size: 16px;
            background: -webkit-linear-gradient(#FFFFFF, #6B5BA9); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(#FFFFFF, #6B5BA9); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(#FFFFFF, #6B5BA9); /* Firefox 3.6 - 15 */
            background: linear-gradient(#FFFFFF, #6B5BA9);
            -webkit-background-clip: text;
            color: transparent;
            position: absolute;
            top: 9px;
            left: 20px;
        }
    }
    .button_right{
        
        img{
            width: 137px;
            height: 44px;
            position: absolute;
            right: 0;
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
            top: 9px;
            right: 20px;
        }
    }
}
</style>
