<template>
    <div>
        <div class="box">
            <div class="main">
                <h1 class="logo">网易云音乐</h1>
                <ul class="ul-box">
                    <li>发现音乐</li>
                    <li>我的音乐</li>
                    <li>朋友</li>
                    <li>商城</li>
                    <li>音乐人</li>
                    <li>下载客户端</li>
                </ul>
            </div>
            <div class="search">
                <Input search v-model="value" placeholder="Enter something..." />
            </div>
            <div class="create-center">创作者中心</div>
            <span class="login">登录</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return{
            value: ''
        }
    }
}
</script>
<style lang="less" scoped>
 .box{
     height: 70px;
     position: relative;
     background: #242424;
     border-bottom: 1px solid #000;
     .main{
         width: 1170px;
         margin: 0 auto;
         .logo{
             float: left;
             width: 176px;
             height: 69px;
             color: #fff;
             line-height: 69px;
         }
         .ul-box{
             height: 69px;
             float: left;
             margin-left: 20px;
         }
         li{
             float: left;
             height: 70px;
             font-size: 14px;
             list-style: none;
             color: #ccc;
             margin: 0 20px;
             line-height: 70px;
         }
         li:hover{
             cursor: pointer;
             color: #fff;
         }
     }
     .search{
             margin-left: 30px;
             margin-top: 19px;
            //  background-color: #fff;
            //  border-radius: 32px;
             float: left;
             width: 158px;
             height: 32px;
             position: relative;
             /deep/.ivu-input{
                 border-radius: 32px;
             }
     }
     .create-center{
             float: left;
             width: 90px;
             height: 32px;
             margin: 19px 0 0 12px;
             line-height: 33px;
             color: #ccc;
             border-radius: 20px;
             text-align: center;
             border: 1px solid #4F4F4F;
             &:hover{
                border: 1px solid #fff;
                cursor: pointer;
             }

     }
     .login{
         float: left;
         color: #787878;
         cursor: pointer;
         margin: 26px 0 0 22px;
         &:hover{
             color: #fff;
         }
     }
     
 }
</style>