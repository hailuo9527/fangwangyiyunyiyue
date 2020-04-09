<template>
  <div class="home">
    <BackTop :height="80"></BackTop>
    <Header></Header>
    <div class="carousel">
      <Carousel autoplay :autoplay-speed= 4000>
        <CarouselItem>
           <div class="demo-carousel"><img :src= image[0] width="730" height="285" loading="lazy"></div>
        </CarouselItem>
        <CarouselItem>
           <div class="demo-carousel"><img :src= image[1] width="730" height="285" loading="lazy"></div>
        </CarouselItem>
        <CarouselItem>
           <div class="demo-carousel"><img :src= image[2] width="730" height="285" loading="lazy"></div>
        </CarouselItem>
        <CarouselItem>
           <div class="demo-carousel"><img :src= image[3] width="730" height="285" loading="lazy"></div>
        </CarouselItem>
      </Carousel>
    </div>  
    <div class="main">
      <hot-recommend></hot-recommend>
      <new-dish class="new-dish"></new-dish>
      <List class="list"></List>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import HotRecommend from "@/components/HotRecommend.vue";
import NewDish from "@/components/NewDish.vue";
import List from "@/components/List.vue";
import axios from "@/lib/axios"

export default {
  name: "Home",
  components: {
    Header,
    HotRecommend,
    NewDish,
    List
  },
  data() {
    return {
      items: [],
      image: [],
    };
  },
  methods: {
  },
  mounted() {
    axios.request({url: "/user/playlist", method: 'get',params:{uid: 1}}).then(res => {
      console.log(res.data)
    });
    axios.request({url: "/banner", method: 'get'}).then(res => {
      this.items = res.data.banners
      for (let item of this.items) {
        this.image.push(item.imageUrl)
      }
    });
    console.log(this.$store.state.token)
  }
};
</script>
<style lang="less" scoped>
.carousel {
  height: 285px;
  .demo-carousel {
    width: 100%;
    height: 285px;
  }
}
.main {
  width: 980px;
  height: 1425px;
  margin: 0 auto;
  background-color: #fff;
  .new-dish,
  .list {
    margin-top: 20px;
  }
}
.footer {
  width: 100%;
  height: 173px;
  background-color: #f2f2f2;
}
.demo-carousel{
  background: no-repeat;
}
</style>
