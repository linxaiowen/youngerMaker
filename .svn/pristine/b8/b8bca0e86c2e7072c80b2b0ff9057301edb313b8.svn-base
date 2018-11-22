<template>
    <div>
        <div class="top">
            <span class="label">{{highLight}}/6</span>
            <div class="littlePoint">
                <div class="highLight" v-for="item in highLight"></div>
                <div class="gray" v-for="item in 6-highLight"></div>
            </div>
        </div>
        <div class="middle">
            <img class="bg_ceshi" src="../../assets/images/bg_ceshi01@2x.png">
            <img class="ic_ceshi" :src="'static/ic_ceshi0'+highLight+'@2x.png'">
        </div>
        <div class="bottom">
            <div class="question_content">
                <div class="left_arrow">
                    <img src="../../assets/images/ic_shang@2x.png"> 
                </div>
                <div class="middle_span">
                    <span>睡前会刷多久手机？</span>
                </div>
                <div class="right_arrow">
                    <img src="../../assets/images/ic_xia@2x.png"> 
                </div>
            </div>
            <div class="options">
                <div @click="changeClass1()" class="four_choices" v-bind:class="{'four_choices_change': isActive==1 }">
                    <div class="choice_style">
                        <span>A</span>
                    </div>
                    <span class="question_span">小刷一会儿</span>
                </div>
                <div @click="changeClass2()" class="four_choices" v-bind:class="{'four_choices_change': isActive==2 }">
                    <div class="choice_style">
                        <span>B</span>
                    </div>
                    <span class="question_span">至少30分钟</span>
                </div>
            </div>
            <div class="login_button" @click="doJump()">
                <img src="../../assets/images/bt_003@2x.png">
                <span>下一题</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            highLight: 1,
            isActive: -1
        }
    },
    methods: {
        changeClass1(){
            this.isActive = 1;
        },
        changeClass2(){
            this.isActive = 2;
        },
        doJump(){
            if(this.highLight < 6){
                this.highLight++;
            }
            else{
                this.$router.push({name: "TestCompleted"});
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.top{
    position: relative;
    margin-top: 18px;
    padding-left: 19px;
    .label{
        font-size: 30px;
        color: #FFFFFF;
    }
    .littlePoint{
        overflow: hidden;
        position: absolute;
        top: 18px;
        left: 90px;
        .highLight{
            width: 4px;
            height: 4px;
            background-color: #62F2FB;
            margin-left: 2px;
            float: left;
        }   
        .gray{
            width: 4px;
            height: 4px;
            background-color: #2D2A5D;
            margin-left: 2px;
            float: left;
        }    
    }
    zoom: 1;
}
.middle{
    text-align: center;
    margin-top: 35px;
    position: absolute;
    width: 185px;
    height: 187px;
    left: 50%;
    transform: translateX(-50%);
    .bg_ceshi{
        width: 185px;
        height: 187px;
    }
    .ic_ceshi{
        width: 74px;
        height: 106px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
.bottom{
    position: absolute;
    bottom: 0;
    left: 14px;
    right: 14px;
    height: 277px;
    background: -webkit-linear-gradient(#221f54, #0C0A38); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#221F54, #0C0A38); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#221F54, #0C0A38); /* Firefox 3.6 - 15 */
    background: linear-gradient(#221F54, #0C0A38);
}
.question_content{
    margin: 15px 8px 36px 8px;
    .left_arrow{
        text-align: left;
        height: 16px;
        img{
            width: 16px;
            height: 16px;
        }
    }
    .middle_span{
        text-align: center;
        span{
            font-size: 14px;
            color: #847FA6;
        }
    }
    .right_arrow{
        height: 16px;
        text-align: right;
        img{
            width: 16px;
            height: 16px;
        }
    }
}
.options{
    color: #ABA6CC;
    font-size: 14px;
    .four_choices{
        position: relative;
        margin: 13px 15px 0 25px;
        padding: 2px 6px 6px 33px;
        background: -webkit-linear-gradient(left, #1E1B56 , #161444); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #1E1B56, #161444); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #1E1B56, #161444); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #1E1B56 , #161444); /* 标准的语法 */
        .choice_style{
            width: 30px;
            height: 30px;
            background-color: #121044;
            border: 0.5px solid #393677;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            position: absolute;
            margin-left: -13%;
            margin-top: -2%;
            span{
                color: #A09BC2;
            }
        }
    }
    .four_choices_change{
        position: relative;
        margin: 13px 15px 0 25px;
        padding: 2px 6px 6px 33px;
        background: -webkit-linear-gradient(left, #241F93 , #161444); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #241F93, #161444); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #241F93, #161444); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #241F93 , #161444); /* 标准的语法 */
        .choice_style{
            width: 30px;
            height: 30px;
            background-color: #121044;
            border: 0.5px solid #42FAEF;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            position: absolute;
            margin-left: -13%;
            margin-top: -2%;
            span{
                color: #42FAEF;
            }
        }
    }
}
.login_button{
    position: absolute;
    margin-top: 30px;
    text-align: center;
    width: 136.6px;
    left: 50%;
    transform: translate(-50%);
    img{
        width: 136.6px;
        height: 44px;
    }
    span{
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 18px;
        background: -webkit-linear-gradient(#FFFFFF, #99E0ED); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#FFFFFF, #99E0ED); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#FFFFFF, #99E0ED); /* Firefox 3.6 - 15 */
        background: linear-gradient(#FFFFFF, #99E0ED); 
        -webkit-background-clip: text;
        color: transparent;
    }
}
</style>
