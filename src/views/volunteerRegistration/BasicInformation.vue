<template>
    <div class="basicInformation">
        <x-header title="基本资料"></x-header>
        <div class="form">
            <div class="form-title">基本信息</div>
            <div class="form-control">
                <label>姓名:</label>
                <input v-model="userName" placeholder="请输入姓名" required/>
            </div>
            <div class="form-control">
                <label>手机号:</label>
                <input type="number" v-model="phoneNo" placeholder="请输入手机号" pattern="[0-9]*" oninput="if(value.length > 11) value = value.slice(0,11)" required/>
            </div>
            <div class="form-control">
                <label>邮箱:</label>
                <input v-model="mail" placeholder="请输入邮箱" pattern="/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/" required/>
            </div>
            <div class="form-button">
                <button @click="jump">下一步</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Header from "@/components/Header"
export default {
    components: {
        'x-header':Header,
    },
    data () {
        return {
            msg: "Welcom to linxiaowen's world",
            userName: "",
            phoneNo: "",
            mail: ""
        }
    },
    methods: {
        jump(){
             axios.post('http://103.229.213.219:8086/yabuli/api/volunteer/saveVolunteer', {
                params: {
                    userId: 1,
                    activityId: 1,
                    name: this.userName,
                    phone: this.phoneNo,
                    mail: this.mail,
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            this.$router.push({name: "startToWork"});
        }
    }
}
</script>
<style lang="scss" scoped>
.form-title{
    margin-top: 64px;
    margin-bottom: 36px;
    font-size: 20px;
    color: #6B6B6B;
    text-align: center;
}
.form-control{
    display: flex;
    height: 40px;
    font-size: 13px;
    border-bottom: 1px solid #797979;
    margin-left: 28px;
    margin-right: 28px;
    label{
        line-height: 40px;
        color: #333333;
    }
    input{
        flex: 1;
        border: none;
        outline: none;
        color: #CFCFD2;
        text-align: right;
    }
}
.form-button{
    margin-top: 300px;
    text-align: center;
    button{
        background-color: #6B6B6B;
        color: white;
        width: 260px;
        height: 40px; 
        outline: none;
    }
}
</style>
