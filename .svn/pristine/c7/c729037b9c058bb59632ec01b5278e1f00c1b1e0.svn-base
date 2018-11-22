<template>
    <div class="login">
        <div class="title_img">
            <img src="../../assets/images/ic_tishi@2x.png">
            <span>请仔细阅读复试答题规则，按要求完成</span>
        </div>
        <div id="content">
            <div class="img_semicircle">
                <img src="../../assets/images/img_guiz@2x.png">
            </div>       
            <div class="rules">
                <span>答题规则</span>    
            </div>  
            <div class="ic_guiz">
                <img src="../../assets/images/ic_guiz@2x.png">                
            </div>  
            <div class="listInformation">
                <ol>
                    <li>参加复试者要心怀梦想；</li>
                    <li>不仅脑洞大，而且动手能力强；</li>
                    <li>复试部分共3道主观题，答题时间48小时；</li>
                    <li>点击开始答题后计时开始；</li>
                    <li>复试结果将在试卷提交后72小时内公布，登录该系统查看。</li>
                    <li>复试通道关闭时间为12月23日24:00</li>
                    <span>时间和头脑全部就位，那就开始吧！</span>
                </ol>    
            </div>  
            <div class="login_button" @click="jump_to_questionList">
                <img src="../../assets/images/bt_003@2x.png">
                <span>开始答题</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        var divHeight = document.getElementById("content");
        var screenHeight = window.screen.height;
        divHeight.style.height = screenHeight*0.677+"px";
  },
  methods: {
      jump_to_basicInformation(){
          this.$router.push({name: "BasicInformation"});
      },
      jump_to_questionList(){
          this.$router.push({name: "QuestionList"});
      }
  }
}
</script>
<style lang="scss" scoped>
.login{
    padding: 20px 20px 0 20px;
    text-align: center;
}
.title_img{
    border: 0.5px solid #444261;
    border-radius: 18.5px;
    padding: 9px 16px 9px 16px;
    margin-left: 5%;
    margin-right: 5%;
    img{
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    span{
        font-size: 14px;
        color: #B3B0C9;
    }
}
#content{
    background: -webkit-linear-gradient(#221F54, #0C0A38); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#221F54, #0C0A38); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#221F54, #0C0A38); /* Firefox 3.6 - 15 */
    background: linear-gradient(#221F54, #0C0A38);
    text-align: center;
    margin-top: 20px;
}
.img_semicircle{
    margin-bottom: 10.2px;
   img{
        width: 191.9px;
        height: 42.8px;
   }
}
.rules{
    letter-spacing: 8px;
    margin-bottom: 5px;
    span{
        color: #3C3A67;
        font-size: 30px;
    }
}
.ic_guiz{
    img{
        width: 42px;
        height: 27px;
    }
}
.listInformation{
    color: #726D95;
    font-size: 14px;
    text-align: left;
    margin: 10px 15px 55px 15px;
    height: 254px;
    background-color: #0C0A35;
    border: 0.5px solid #1A1749;
    border-radius: 8px;
    overflow: scroll;
    ol{
        letter-spacing: 2px;
        li{
            margin-bottom: 4px;
        }
    }
}
.login_button{
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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
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
