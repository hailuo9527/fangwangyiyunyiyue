<template>
  <div class="father">
    <Form :model="formInline">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          type="password"
          v-model="formInline.password"
          placeholder="Password"
        >
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
// import axios from "@/lib/axios";
import { mapMutations } from "vuex";
import { login } from "@/api/login";
export default {
  name: "Login",
  data() {
    return {
      formInline: {
        user: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    ...mapMutations(["setToken"]),
    async handleSubmit() {
      let res = await login({
        phone: this.formInline.user,
        password: this.formInline.password,
      });
      console.log(res);
      this.setToken(res.data.token);
      this.$router.push({ path: "/home" });
      // this.axios
      //   .request({
      //     url: "/login/cellphone",
      //     method: "post",
      //     data: { phone: this.formInline.user, password: this.formInline.password },
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //     this.setToken(res.data.token)
      //     this.$router.push({path: '/home'})
      //   });
    },
  },
};
</script>

<style lang="less" scoped>
.father {
  width: 200px;
  margin: 0 auto;
}
</style>
