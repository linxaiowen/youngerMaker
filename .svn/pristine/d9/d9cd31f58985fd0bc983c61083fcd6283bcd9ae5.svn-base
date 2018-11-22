<template>
    <div class="content">
        <div>
            <div class="words">
                <img src="../../assets/images/bg_ceshijieguo01@2x.png">
                <div>
                    <span>我是个失败的创业者，因为我是劳模。</span>
                </div>
            </div>
            <div class="alike">
                <span>与企业家相似度</span>
            </div>
            <div class="percentage">
                <span class="big">95</span>
                <span class="small">%</span>
            </div>
            <div class="touxiang">
                <img src="../../assets/images/touxiang02@2x.png">
            </div>
            <img class="paint" src="../../assets/images/bg_ceshijieguo02@2x.png">
        </div>
        <div class="middle">
            <div class="picture">
                <img class="real_picture" src="../../assets/images/leijun.jpg">
                <div class="introduce">
                    <div class="name">企业家：雷军</div>
                    <div class="position">职位：董事长兼CEO</div>
                    <div class="company">公司：小米科技</div>
                </div>
                <img class="certification" src="../../assets/images/ig_yirenzheng@2x.png">
            </div>
            <div class="result">
                <img src="../../assets/images/ic_xingxing@2x.png">
                <span>结果分析</span>
                <img src="../../assets/images/ic_xingxing@2x.png">
            </div>
            <div class="Analysis">
                <span>你相信，努力工作，克制贪婪，是世界上最笨也最聪明的办法。</span>
            </div>
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
            <img src="../../assets/images/ic_chakan@2x.png">
            <span>点击查看复活进度</span>
        </div>
        <div class="button" @click="doJump">
            <img src="../../assets/images/bt_003@2x.png">
            <span>分享给好友</span>
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
            // this.$router.push({name: "TestQuestions"});
        }
    }
}
</script>
<style lang="scss" scoped>
.content{
    position: relative;
}
.words{
    position: relative;
    z-index: 100;
    margin-left: 18px;
    margin-top: 18px;
    img{
        width: 183px;
        height: 78px;
    }
    div{
        position: absolute;
        z-index: 100;
        top: 13px;
        left: 15px;
        width: 159px;
        height: 44px;
        span{
            color: #C2C0DD;
            font-size: 16px;
        }
    }
}
.alike{
    margin-left: 38px;
    margin-top: 11px;
    position: relative;
    z-index: 100;
    span{
        color: #43FFF3;
        font-size: 14px;
    }
}
.percentage{
    position: relative;
    margin-left: 31px;
    z-index: 50;
    .big{
        color: #43FFF3;
        font-size: 90px;
    }
    .small{
        color: #43FFF3;
        font-size: 20px;
    }
}
.touxiang{
    width: 150px;
    height: 230px;
    position: absolute;
    top: 20px;
    right: 0;
    z-index: 100;
    img{
        width: 150px;
        height: 230px;
    }
}
.paint{
    width: 375px;
    height: 107.3px;
    position: absolute;
    z-index: 0;
    top: 87px;
    left: 12px;
}
.middle{
    height: 186px;
    margin-left: 15px;
    margin-right: 15px;
    background: -webkit-linear-gradient(to right, #1B1762, #0B0934); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(to right, #1B1762, #0B0934); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(to right, #1B1762, #0B0934); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #1B1762, #0B0934);
    position: relative;
}
.picture{
    .real_picture{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-left: 20px;
        margin-top: 20px;
    }
    .introduce{
        position: absolute;
        top: 16px;
        left: 110px;
        overflow: hidden;
        .name{
            color: #C2C0DD;
            font-size: 20px;
        }
        .position{
            color: #7D7BAC;
            font-size: 14px;
            margin-top: 5.1px;
            margin-bottom: 5.1px;
        }
        .company{
            color: #7D7BAC;
            font-size: 14px;
        }
    }
    .certification{
        width: 98.9px;
        height: 100px;
        position: absolute;
        top: 0;
        right: -15px;
    }
}
.result{
    margin-left: 20px;
    margin-top: 13px;
    img{
        width: 15px;
        height: 15px;
    }
    span{
        font-size: 14px;
        color: #43FFF3;
    }
}
.Analysis{
    margin-left: 20px;
    span{
        font-size: 12px;
        color: #7D7BAC;
    }
}
.zhongzi{
    padding-left: 63px;
    padding-right: 63px;
    margin-top: 20px;
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
    background-color: #151169;
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
    text-align: center;
    img{
        width: 17px;
        height: 17px;
        vertical-align: middle;
    }
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
        left: 20%;
        top: 50%;
        transform: translate(0,-50%);
    }
}
</style>
