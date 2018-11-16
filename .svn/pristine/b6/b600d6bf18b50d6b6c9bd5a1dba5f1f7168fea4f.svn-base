<template>
    <div class="questionList">
        <x-header title="志愿者考验"></x-header>
        <div class="countDown">
            <span>剩余时间{{minutes}}分{{seconds}}秒</span>
        </div>
        <div class="questionContent">
            <div>
                <span>{{this.choiceIndex +1}}/{{allQuestionLength}}</span>
            </div>
            <img src="../../assets/images/answerBox.png">
            <div class="questionTitle">
                <span>{{allQuestion[choiceIndex].title}}</span>
            </div>
        </div>
        <!-- <question-choice v-if="categoryId===1" :data="list"></question-choice> -->
        <div class="questionOptions">
            <div v-if="categoryId===1" v-for="item in 4" :key="item">
                <span>{{list[item-1].options}} {{list[item-1].content}}</span>
                <div id="hidden"></div>
            </div>
            <div v-else-if="categoryId===2">
                <input type="text" placeholder="说出你的观点">
                <div id="hidden"></div>
            </div>
        </div>
        <div class="questionFooter">
            <div class="leftArrow" @click="lastQuestion">
                <img src="../../assets/images/leftArrow.png">
                <span class="leftSpan">返回</span>
            </div>
            <div class="rightArrow" @click="nextQuestion">
                <img src="../../assets/images/rightArrow.png">
                <span class="rightSpan">下一题</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import QuestionListChoice from '@/views/volunteerRegistration/QuestionListChoice'
import Header from "@/components/Header"
export default {
    data () {
        return{
            minutes : '5',
            seconds : '0',
            sigleTitle: '',
            choiceIndex: 0,
            allQuestion: {},
            allQuestionLength: "",
            list:[],
            categoryId: "",
        }
    },
    components: {
        'x-header': Header,
        'question-choice': QuestionListChoice
    },
    computed: {
    
    },
    created(){
         axios.post('http://103.229.213.219:8086/yabuli/api/question/saveAnswer', {
            params: {
                answer: 'A',
                questionId: 1,
                score: 100,
                volunteerId: 1
            }
        })
        .then(function (response) {
            // console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.post('http://103.229.213.219:8086/yabuli/api/volunteerActivity/searchNowActivity', {
        })
        .then(res => {
            // console.log(res.data.result[0].questions);
            this.allQuestion = JSON.parse(res.data.result[0].questions);
            this.allQuestionLength = this.allQuestion.length;
            this.categoryId = this.allQuestion[this.choiceIndex].categoryId;
            // this.choiceLength = res.data.result.length;
            this.list = this.allQuestion[this.choiceIndex].choices;
            // console.log(this.list[0].content);
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    mounted(){
        this.CountDown();
        // this.$router.push({name: "questionListChoice"});
    },
    methods: {
        CountDown() {   
            var auth_time = 5*60;
            var auth_timetimer = setInterval(() => {
                if(auth_time >= 0){
                    this.minutes = Math.floor(auth_time / 60);
                    this.seconds = Math.floor(auth_time % 60);
                    auth_time--;
                }
                else{
                    clearInterval(auth_timetimer);
                }
            }, 1000);
        },
        nextQuestion(){
            this.choiceIndex++;
            // console.log(this.choiceIndex);
            if(this.choiceIndex > this.allQuestionLength-1){
                this.$router.push({name: "uploadInfo"});
            }
            this.list = this.allQuestion[this.choiceIndex].choices;
        },
        lastQuestion(){
            this.choiceIndex--;
            if(this.choiceIndex < 0){
                this.$router.push({name: "startToWork"});
            }
            this.list = this.allQuestion[this.choiceIndex].choices;
        }
    }
}
</script>
<style lang="scss" scoped>
.questionList{
    padding-left: 18px;
    padding-right: 18px;
}
.countDown{
    margin-top: 70px;
    // width: 138px;
    height: 35px;
    text-align: right;
    span{
        font-size: 13px;
        color: #000000;
    }
}
.questionContent {
    margin-top: 47px;
    position: relative;
    div{
        width: 87px;
        height: 32px;
        background-color: white;
        border: 1px solid #797979;
        border-radius: 20px;
        text-align: center;
        position: absolute;
        left: 50%;
        top: -10%;
        -webkit-transform: translate(-50%);
        span{
            line-height: 32px;
        }
    }
    img{
        width: 100%;
        height: auto;
    }
    .questionTitle{
        width: 300px;
        height: 100px;
        position: absolute;
        border: none;
        top: 15%;
        overflow: hidden;
        text-align: left;
    }
}
.questionOptions{
    div{
        position: relative;
        width: 100%;
        height: 35px;
        border: 1px solid #797979;
        margin-top: 20px;
        text-align: center;
        z-index: 100;
        // background-color: #D7D7D7;
        input{
            line-height: 35px;
            font-size: 14px;
            color: #333333;
        }
        span{
            line-height: 35px;
            font-size: 14px;
            color: #333333;
        }
    }
}
#hidden{
    position: absolute;
    margin: 0;
    height:37px;
    width: 100%;
    top: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: -1;
    background-color: transparent;
}
.questionFooter{
    position: relative;
    margin-top: 66px;
    .leftArrow{
        position: relative;
        float: left;
         .leftSpan{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
    .rightArrow{
        position: relative;
        float: right;
        .rightSpan{
            position: absolute;
            right: 15%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    } 
}
</style>
