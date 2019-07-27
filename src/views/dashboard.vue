<template>
  <div class="dashboard">
    <nav class="navbar navbar-expand-lg navbar-light bg-custom">
      <!-- <a  href="#"></a> -->
      <router-link :to="{name:'home'}" class="navbar-brand d-flex">
        <span>S</span>mart
        <span>S</span>tart
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="float_right">
          <ul class="navbar-nav">
            <li class="nav-item d-none d-lg-block">
              <span class="right-divider"></span>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-search"></i>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link btn-outline">Submit</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="dashboard_head">
      <div class="container-fluid"  v-if="!$store.getters.isUserExpert">
        <div class="row">
          <div class="col-md-12">
            <div class="main_head">
              <div class="row">
                <div class="col-md-12">
                  <div class="main_heading">
                    <h1>experience the new startUp</h1>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="main_paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae maiores laboriosam minus sunt debitis, repellat expedita ullam, officia numquam, inventore asperiores, eligendi fugit qui a temporibus magni commodi cumque odit!</p>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="get_started" >
                    <!-- <a href="#!"></a> -->
                    <router-link :to="{name: 'form'}">get started</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main_container">
      <div class="row">
        <div class="col-md-12">
          <div class="title">
            <h3>StartUp</h3>
          </div>
        </div>
      </div>

      <!-- row 1 boxes -->
      <div class="row">
        <div class="col-md-12">
          <div class="box">
            <!-- 1 box -->
            <div class="box1" v-for="item  in filteredPosts" :key="item.id">
              <div class="column_box">
                <img :src="item.file" alt />
              </div>
              <div class="column_box">
                <div class="text">
                  <h3>Title: {{item.title}}</h3>
                  <p>Description: {{item.description}}</p>
                  <p>Time: {{item.how_long}}</p>
                  <div class="link_bio">
                    <router-link :to="{name: 'blog-page', params:{id:item.id}}">read more</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: []
  }),

  mounted() {
    this.getStartups();
  },
  methods: {
    async getStartups() {
      try {
        let res = await this.$store.dispatch("get", "/api/startups/list");
        // alert(res)
        // console.log(res);
        this.list = res;
      } catch (e) {
        alert(e);
      }
    },

  },
  computed: {
    filteredPosts() {
      if (this.$store.getters.isUserExpert) {
        return this.list;
      }
      return this.list.filter(
        item => item.user && item.user.id == this.$store.state.profile.user_id
      );
    }
  }
};
</script>

<style>
</style>
