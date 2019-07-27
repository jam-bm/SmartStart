<template>
  <div class="wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link to="/home" class="navbar-brand">Smart Start</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Page Content -->
    <div class="container">
      <div class="row" v-if="data && data.user">
        <!-- Post Content Column -->
        <div class="col-lg-8">
          <!-- Title -->
          <h1 class="mt-4">{{data.title}}</h1>

          <!-- Author -->
          <p class="lead">
            by
            <a
              href="#"
              >{{data.user.username}}</a>
          </p>

          <hr />

          <!-- Date/Time -->
          <p></p>

          <hr />

          <!-- Preview Image -->
          <img class="img-fluid rounded" :src="data.file" />

          <hr />

          <!-- Post Content -->
          <P>{{data.description}}</P>

          <hr />

          <!-- Single Comment -->
          <div class="media mb-4" v-for="comment in data.comments_set" :key="comment.id">
            <img
              class="d-flex mr-3 rounded-circle"
              :src="require(`@/assets/image/${isExpert(comment) ? 'Expert.png' : 'avatar.png'}`)"
              style="width: 50px;"
            />

            <div class="media-body">
              <p class="mt-0" style="margin-bottom: 5px;">{{comment.user.username}} {{isExpert(comment) ? 'expert' : 'user' }}</p>
              {{comment.text}} 
              <span class="comment_date">{{moment(comment.date).format('LLLL')}}</span>
              
            </div>
          </div>

          <!-- Comments Form -->
          <div class="card my-4">
            <h5 class="card-header">Leave a Comment:</h5>
            <div class="card-body">
              <form @submit.prevent="SendCommentData">
                <div class="form-group">
                  <textarea class="form-control" rows="3" v-model="commentInput"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>

        <!-- Sidebar Widgets Column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container" style="color: #fff;">
        <p class="m-0 text-center text-white">Copyright &copy; Smart Start 2019</p>
        
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: {},
    commentInput: ""
  }),
  async mounted() {
    let res = await this.$store.dispatch(
      "get",
      "/api/startups/list/" + this.$route.params.id
    );
    if (res) {
      this.data = res[0];
    }
  },
  methods: {
    async SendCommentData() {
      try {
        let comment = await this.$store.dispatch("post", {
          url: "/api/comment/create",
          data: {
            user: this.data.user.id,
            startup: this.data.id,
            text: this.commentInput
          }
        });

        this.data.comments_set.push({
          date: comment.date,
          id: comment.id,
          startup: this.data.id,
          text: this.commentInput,
          user: {
            id: this.$store.state.profile.user_id,
            username: this.$store.state.profile.username
          }
        });
        this.commentInput = "";
        console.log(comment);

        // alert(comment)
      } catch (err) {
        alert(err);
      }
    },

    isExpert(obj) {
      return this.$store.state.expertData.some(item => item.id == obj.user.id);
    }
  }
};
</script>

<style>
.wrapper{
  padding-top: 56px;
}
</style>
