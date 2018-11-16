<template>
    <div class="successList">
        <x-header title="报名成功"></x-header>    
        <div>
            <div class="successFace">
                <img src="../../assets/images/face.png">
            </div>
            <div class="successText"><span>成功参与</span></div>
            <div class="successText">2018残障青年"伙伴"协力营</div>
            <div class="successQRCode">
                <img src="../../assets/images/QRcode.png">
            </div>
            <div class="successShare">
                <button>分享好友</button>
            </div>
            <div class="jumpLink"><span @click="jump">前往首页</span></div>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header"
export default {
    components: {
        'x-header': Header,
    },
    methods: {
        jump(){
            this.$router.push({name: "indexV"});
        }
    }
}
</script>
<style lang="scss" scoped>
.successList{
    width: 100%;
    text-align: center;
}
.successFace{
    margin-top: 77px;
    margin-bottom: 15px;
    img{
        width: 100px;
        height: 100px;
    }
}
.successText{
    width: 100%;
    height: 37px;
    font-size: 20px;
    span{
        line-height: 37px;
    }
}
.successQRCode{
    margin-top: 29px;
    margin-bottom: 59px;
    img{
        width: 150px;
        height: 150px;
    }
}
.successShare button{
    width: 312px;
    height: 50px;
    background-color: #6B6B6B;
    color: white;
    border-radius: 10px;
    outline: none;
    font-size: 14px;
}
.jumpLink{
    margin-top: 18px;
    color: #6B6B6B;
    text-decoration: underline;
}
</style>
