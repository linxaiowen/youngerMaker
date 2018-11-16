<template>
    <div class="uploadList">
        <x-header title="志愿者考验"></x-header>
        <div class="uploadHeader">
            <span>上传资料</span>
        </div>
        <div class="uploadTitle">
            <div></div>
            <span>通过照片展示你的风采</span>
        </div>
        <div class="uploadImg">
            <img v-if="isVisible" class="imgSize" src="../../assets/images/camera.png">
            <div v-if="!isVisible">
                <img class="uploadImgSize" :src="uri">
                <img class="imgDelete" src="../../assets/images/chacha.png" @click="deleteImg">
            </div>
            <input v-if="isVisible" @change='uploadImg'  type="file">
        </div>
        <div class="uploadTitle">
            <div></div>
            <span>通过视频展示你的个性</span>
        </div>
        <div class="uploadVideo">
            <img src="../../assets/images/video.png">
        </div>
        <div class="uploadTitle">
            <div></div>
            <span>更多展示信息（请发送邮件到2324712086@qq.com邮箱）</span>
        </div>
        <div class="uploadFooter">
            <button @click="jump">下一步</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Header from "@/components/Header"
export default {
    data(){
        return{
            imgs: [],
            imgData: {
                accept: 'image/gif, image/jpeg, image/png, image/jpg',
            },
            uri: '',
            isVisible: true
        }
    },
    mounted(){
        
          
    },
    components: {
        'x-header': Header,
    },
    methods: {
        jump(){
            this.$router.push({name: "clockRules"});
        },
        uploadImg(event){
            // console.log(event);
            let reader =new FileReader();  
            // reader.onload = function(){
            // console.log(reader.result);//图片的base64
            // }
            let img1=event.target.files[0];  
            let type=img1.type;//文件的类型，判断是否是图片  
            let size=img1.size;//文件的大小，判断图片的大小  
            if(this.imgData.accept.indexOf(type) == -1){  
                alert('请选择我们支持的图片格式！');  
                return false;  
            }  
            if(size>5242880){  
                alert('请选择5M以内的图片！');  
                return false;  
            }  
//             var uri = ''  
            let form = new FormData();   
            form.append('file',img1,img1.name); 
            // console.log(form.get('file'))  
            axios.post('http://103.229.213.219:8086/yabuli/api/upload/upload',form,{  
                headers:{'Content-Type':'multipart/form-data'}  
            }).then(response => {  
                console.log(response)  
                this.uri = response.data.result;     
                console.log(this.uri);   
                if(this.uri!='' || this.uri!=null || this.uri!='unknow'){
                    this.isVisible = !this.isVisible;
                }        
                reader.readAsDataURL(img1);  
                var that=this;  
//                 reader.onloadend=function(){  
//                     that.imgs.push(uri);  
//                 }  
            }).catch(error => {  
                alert('上传图片出错！');  
            }) 
        },
        deleteImg(){
            this.isVisible = !this.isVisible;
        }
    }
}
</script>
<style lang="scss" scoped>
.uploadList{
    padding-left: 18px;
    padding-right: 18px;
    // text-align: center;
}
.uploadHeader{
    margin-top: 68px;
    margin-bottom: 29px;
    text-align: center;
    span{
        font-size: 20px;
        color: #6B6B6B;
    }
}
.uploadTitle{
    div{
        background-color: #AEAEAE;
        width: 7px;
        height: 20px;
        float: left;
    }
    span{
        font-size: 13px;
        margin-left: 10px;
        color: #000000;
    }
}
.uploadImg{
    position: relative;
    width: 120px;
    height: 120px;
    border: 1px solid #797979;
    border-radius: 10px;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 34px;
    .imgSize{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .uploadImgSize{
        width: 121px;
        height: 121px;
    }
    .imgDelete{
        position: absolute;
        top: -10px;
        right: -10px;
    }
    input{
        width: 100%;
        height: 100%;
        opacity:0;
    }
}
.uploadVideo{
    position: relative;
    width: 310px;
    height: 130px;
    border: 1px solid #797979;
    border-radius: 10px;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 18px;
    img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
.uploadFooter{
    margin-top: 47px;
    text-align: center;
    button{
        width: 260px;
        height: 40px;
        background-color: #6B6B6B;
        color: white;
        outline: none;
        border-radius: 10px;
    }
}
</style>
