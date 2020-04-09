<template>
    <div class="box">
        <div class="header">
            <div><Icon type="logo-github" style="margin: 0 10px"/>热门推荐</div>
            <div class="hua-yu">华语</div>
            <div class="column"></div>
            <div class="liu-xing">流行</div>
            <div class="column"></div>
            <div class="yao-gun">摇滚</div>
            <div class="column"></div>
            <div class="min-yao">民谣</div>
            <div class="column"></div>
            <div class="dian-zi">电子</div>
            <div class="more">更多
                <Icon type="md-arrow-forward" style="color: #C10D0C"/>
            </div>
        </div>
        <div class="main-content">
            <div class="main-content-item">
                <div class="photo"></div>
                <p></p>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .box{
        width: 729px;
        height: 523px;
        background-color: #fff;
        padding: 20px;
        .header{
            width: 689px;
            height: 35px;
            border-bottom: 2px solid #C10D0C;
            padding: 0 10px 0 0;
            &>div{
                float: left;
                margin: 6px;
            }
            &>div:nth-child(1){
                font-size: 20px;
                margin: 0 12px 0 0;
                line-height: 35px;
            }
            &>div:nth-child(1):hover{
                cursor: pointer;
            }
            .column{
                width: 2px;
                height: 12px;
                background-color: #ccc;
                margin-top: 10px;
            }
            .more{
                float: right;
            }
            .hua-yu:hover, .liu-xing:hover, .yao-gun:hover, .min-yao:hover, .dian-zi:hover, .more:hover{
                cursor: pointer;
                text-decoration: underline;
            }
        }
        .main-content{
            height: 468px;
            display: flex;
            .main-content-item{
                width: 182px;
                height: 234px;
                .photo{
                    width: 140px;
                    height: 140px;
                }
            }
        }
    }
</style>