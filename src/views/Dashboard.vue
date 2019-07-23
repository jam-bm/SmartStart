<template>
  <div class="dashboard">
    <nav class="navbar navbar-expand-lg navbar-light bg-custom">
            <a class="navbar-brand d-flex" href="#"><span>S</span>mart <span>S</span>tart</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="float_right">
                    <ul class="navbar-nav">
                        <li class="nav-item d-none d-lg-block">
                            <span class="right-divider"></span>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link"><i class="fas fa-search"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="dashboard_head">
            <div class="container-fluid">
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
                                    <div class="get_started">
                                        <!-- <a href="#!">get started</a> -->
                                        <router-link to="/dashboard/form">get started</router-link>
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
                        <div class="box1" v-for="item in boxes1" :key=item>
                            <div class="column_box">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="column_box">
                                <div class="text">
                                    <h3>{{item.h}}</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id fuga, saepe </p>
                                    <div class="link_bio">
                                        <!-- <a href="#!">read more</a> -->
                                        <router-link to="/blog">read more</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- row 2 boxes -->
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <!-- 1 box -->
                        <div class="box1" v-for="item in boxes2" :key="item">
                            <div class="column_box">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="column_box">
                                <div class="text">
                                    <h3>{{item.h}}</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos id fuga, saepe </p>
                                    <div class="link_bio">
                                        <!-- <a href="#!">read more</a> -->
                                        <router-link to="/blog">read more</router-link>
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
    data() {
        return {
            boxes1: [
                {src: require('@/assets/image/startup1.png'), h: 'startup1'},
                {src: require('@/assets/image/startup2.png'), h: 'startup2'},
                {src: require('@/assets/image/startup3.png'), h: 'startup3'},
                {src: require('@/assets/image/startup4.jpg'), h: 'startup4'}
            ],
            boxes2: [
                {src: require('@/assets/image/startup5.jpg'), h: 'startup5'},
                {src: require('@/assets/image/startup6.jpg'), h: 'startup6'},
                {src: require('@/assets/image/startup7.jpg'), h: 'startup7'},
                {src: require('@/assets/image/startup8.png'), h: 'startup8'}
            ],
        }
    },
    // beforeCreate() {

    //   if(!this.$store.state.isSigned) {
    //     this.$router.push('/form')
    //   }
    // }
}
</script>