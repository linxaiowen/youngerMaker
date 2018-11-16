<template>
    <div class="login">
        <div class="title_img">
            <img src="../../assets/images/ic_tishi@2x.png">
            <span>请仔细阅读初试答题规则，按要求完成</span>
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
                    <li>参加初试者要年满18岁；</li>
                    <li>除了有帅气的脸庞，还要会撒娇；</li>
                    <li>初试部分共10道客观题，答题时间30分钟；</li>
                    <li>答对8题及以上者成功进入下一轮；</li>
                    <li>打错2题及以上者将遗憾淘汰；</li>
                    <li>淘汰前可获得一次复活机会。</li>
                    <span>准备好了就开心答题吧。</span>
                </ol>    
            </div>  
            <div class="login_button" @click="jump_to_questionList">
                <img src="../../assets/images/bt_01@2x.png">
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
    margin: 10px 15px 0 15px;
    height: 254px;
    background-color: #0C0A35;
    border: 0.5px solid #1A1749;
    border-radius: 8px;
    overflow: scroll;
    ol{
        letter-spacing: 2px;
    }
}
.login_button{
    position: relative;
    margin-top: 40px;
    text-align: center;
    img{
        width: 170px;
        height: 56px;
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
