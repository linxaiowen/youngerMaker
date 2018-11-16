<template>
    <div>
        <x-header title="亚布力论坛"></x-header>
        <group class="myCertificates">
            <cell-box :link="{name: 'myCertificates'}">我的证书（2）</cell-box>
        </group>
        <div class="img-group">
            <div @click="jumpA">
                <img src="@/assets/images/image3.png">
                <span class="activityTitle">2018贫困山区救助活动</span>

                <!-- 已报名标签 -->
                <div id="activityTag">
                    <span>已报名</span>
                </div>
            </div>
            <div>
                <img src="@/assets/images/image4.png">
                <span class="activityTitle">2018北京大学宣讲会</span>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "@/components/Header"
import { CellBox,Group  } from 'vux'
export default {
    components: {
        'x-header': Header,
        CellBox,
        Group
    },
    methods:{
        jumpI(){
            this.$router.push({name:"indexV"});
        },
        jumpA(){
            this.$router.push({name:"activityDetail"});
        }
    }
}
</script>
<style lang="scss" scoped>

.img-group {
    // margin-top: 40px;
    div{
        width: 100%;
        height: 201px;
        position: relative;
        img{
            width: 100%;
            height: 201px;
            position: relative;
            z-index: -1;
        }
        .activityTitle{
            position: absolute;
            color: white;
            margin-top: -120px;
            margin-left: 15%;
            font-size: 24px;
        }
    }
}
.myCertificates{
    margin-top: 44px;
}
#activityTag{
    background-color: white;
    width: 60px;
    height: 25px;
    position: absolute;
    bottom: 20px;
    right: 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    text-align: center;
    span{
        color: #000000;
        font-size: 12px;
    }
}
</style>

