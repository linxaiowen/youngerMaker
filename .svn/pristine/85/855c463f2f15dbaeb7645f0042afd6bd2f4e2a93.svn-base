<template>   
    <div class="video" @click="jump">
        <!-- <router-link :to="Index"> -->
            <!-- <img src="../assets/images/image.png"> -->
            <span>亚布力青春志愿者</span>
            <!-- <video autoplay loop="loop">  
                <source src="./movie.mp4" type="video/mp4">
            </video> -->
        <!-- </router-link> -->
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: "亚布力青春志愿者"
        }
    },
    mounted(){
        var lImg = document.getElementsByClassName("video");
        var screenHeight = window.screen.height;
        lImg[0].style.height = screenHeight+"px";
    },
    methods:{
        jump(){
            this.$router.push({name:"indexP"});
        },
    }
}
</script>
<style lang="scss" scoped>
.video{
    background-image: url("../assets/images/image.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-attachment:fixed;
    position: relative;
    text-align: center;
    span{
        color: white;
        font-size: 36px;
        display: inline-block;
        padding-top: 25.5%;
    }
}
// .video div{
//     color: white;
//     font-size: 36px;
//     position: absolute;
//     left: 50%;
//     transform: translateX(-50%);
//     margin-top: 77px;
// }
</style>

