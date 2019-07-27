<template>
  <div>
    <header id="home">
      <nav class="navbar navbar-expand-lg navbar-light bg-custom">
        <!-- <a class="navbar-brand d-flex" href="index.html"><span>S</span>mart <span>S</span>tart</a> -->
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
          <ul class="navbar-nav mr-auto ml-auto">
            <li class="nav-item">
              <a class="nav-link active" data-target="#home" href="#home">
                Successful Statups
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-target="#ss" href="#experts">Experts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-target="#contacts" href="#contacts">Wanna be Investor?</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item d-none d-lg-block">
              <span class="right-divider"></span>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-search"></i>
              </a>
            </li>
            <li class="nav-item" v-if="!$store.state.loggedIn">
              <!-- <a href="#" ></a> -->
              <router-link :to="{name: 'signup'}" class="nav-link btn-outline-filled">SIGNUP</router-link>
            </li>
            <li class="nav-item" v-if="!$store.state.loggedIn">
              <!-- <a class="nav-link btn-outline">LOGIN</a> -->
              <router-link :to="{name:'login'}" class="nav-link btn-outline-filled">LOGIN</router-link>
            </li>
            <li class="nav-item username-label" v-if="$store.state.loggedIn" style="display: flex;
                      align-items: center;
                      color: #fff;
                       padding: 0 15px;">
              <!-- <a class="nav-link btn-outline">LOGIN</a> -->
              {{$store.state.profile.username}}
            </li>
            <li class="nav-item" v-if="$store.state.loggedIn">
              <a href class="nav-link btn-outline-filled" @click="$store.dispatch('logOut')">LOGOUT</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="bg-gray">
        <div class="container-fluid d-flex justify-content-center">
          <div class="row">
            <div class="col-lg-center col-xl-6 caption">
              <h1 class="d-block">We Support Startups</h1>
              <p class="d-block">Education, Community, and Tools to help startups launch faster.</p>
              <!-- <a href="#"></a> -->
              <a style="cursor:pointer"
                @click="checkAdded"
                :disabled="loading"
              >{{loading ? 'Loading' : (this.$store.getters.isUserExpert ? 'See All Startups' : 'Start your Startup')}}</a>
            </div>
            <div class="col-xl-6 img-bg d-flex justify-content-center">
              <img
                src="https://dq2uhp934kg74.cloudfront.net/production/20190629-040559/client/site/ux/LP/LPHero/hero-fist-bump.svg"
                alt="https://dq2uhp934kg74.cloudfront.net/production/20190629-040559/client/site/ux/LP/LPHero/hero-fist-bump.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="bg-brown" id="ss">
      <div class="container-fluid">
        <h1>
          <span>S</span>uccessful
          <span>S</span>tartups
        </h1>
        <div class="container-fluid d-flex justify-content-center">
          <div class="row">
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="blogs">
                <img
                  src="http://www.wallpapermania.eu/images/lthumbs/2012-10/3654_Bulb-macro-light-HD-wallpaper.jpg"
                  alt
                  class="img-fluid"
                />
                <h3>Motivating title</h3>
                <h6>Kamuran-</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet, est aliquam, sequi
                  maxime
                  quisquam praesentium consectetur officia temporibus corporis similique aspernatur nemo
                  veritatis
                  in cumque saepe ut consequuntur repellat!
                </p>
                <a href="#" class="d-block">Learn more</a>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="blogs">
                <img
                  src="https://www.startups.com/dist/media/courses/idea.svg"
                  alt
                  class="img-fluid"
                />
                <h3>Motivating title</h3>
                <h6>Kamuran-</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet, est aliquam, sequi
                  maxime
                  quisquam praesentium consectetur officia temporibus corporis similique aspernatur nemo
                  veritatis
                  in cumque saepe ut consequuntur repellat!
                </p>
                <a href="#" class="d-block">Learn more</a>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="blogs">
                <img
                  src="http://www.wallpapermania.eu/images/lthumbs/2012-10/3654_Bulb-macro-light-HD-wallpaper.jpg"
                  alt
                  class="img-fluid"
                />
                <h3>Motivating title</h3>
                <h6>Kamuran-</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet, est aliquam, sequi
                  maxime
                  quisquam praesentium consectetur officia temporibus corporis similique aspernatur nemo
                  veritatis
                  in cumque saepe ut consequuntur repellat!
                </p>
                <a href="#" class="d-block">Learn more</a>
              </div>
            </div>
            <div class="col-lg-4 col-xl-3 col-md-6">
              <div class="blogs">
                <img
                  src="https://www.startups.com/dist/media/courses/idea.svg"
                  alt
                  class="img-fluid"
                />
                <h3>Motivating title</h3>
                <h6>Kamuran-</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet, est aliquam, sequi
                  maxime
                  quisquam praesentium consectetur officia temporibus corporis similique aspernatur nemo
                  veritatis
                  in cumque saepe ut consequuntur repellat!
                </p>
                <a href="#" class="d-block">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="experts">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-lg-6 d-flex align-items-center">
            <div>
              <h1>Experts</h1>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <img
              src="https://dq2uhp934kg74.cloudfront.net/production/20190629-040559/media/illustrations/hero_fireside-chat.svg"
              alt
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>

    <div class="bg-lighter">
      <div class="container-fluid">
        <div class="row list-wrapper">
          <div class="col-lg-4">
            <div class="list">
              <img
                src="https://d263jb06p40f10.cloudfront.net/users/pictures/7705/profile_square/0_iYAYbmYq-uuNi8-9LSrKX7ANljxnLAt9Xp71T7hsxWOzGrhZQmKtiLEJlYJ?1354575805"
                alt
              />
              <h4>Kamuran-</h4>
              <p class="bio">Web Designer, Web developer, Gamer</p>
              <p class="location">
                <i class="fas fa-map-marker-alt"></i>Tashkent, Qibray, Durmen
              </p>
              <p class="tags">
                Growth Hacking, Entrepreneurship, Lean startup, Start-ups, Growth, Customer
                Development,
                Social Marketing, Product Marketing, Metrics
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="list">
              <img
                src="https://d263jb06p40f10.cloudfront.net/users/pictures/7705/profile_square/0_iYAYbmYq-uuNi8-9LSrKX7ANljxnLAt9Xp71T7hsxWOzGrhZQmKtiLEJlYJ?1354575805"
                alt
              />
              <h4>Kamuran-</h4>
              <p class="bio">Web Designer, Web developer, Gamer</p>
              <p class="location">
                <i class="fas fa-map-marker-alt"></i>Tashkent, Qibray, Durmen
              </p>
              <p class="tags">
                Growth Hacking, Entrepreneurship, Lean startup, Start-ups, Growth, Customer
                Development,
                Social Marketing, Product Marketing, Metrics
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="list">
              <img
                src="https://d263jb06p40f10.cloudfront.net/users/pictures/7705/profile_square/0_iYAYbmYq-uuNi8-9LSrKX7ANljxnLAt9Xp71T7hsxWOzGrhZQmKtiLEJlYJ?1354575805"
                alt
              />
              <h4>Kamuran-</h4>
              <p class="bio">Web Designer, Web developer, Gamer</p>
              <p class="location">
                <i class="fas fa-map-marker-alt"></i>Tashkent, Qibray, Durmen
              </p>
              <p class="tags">
                Growth Hacking, Entrepreneurship, Lean startup, Start-ups, Growth, Customer
                Development,
                Social Marketing, Product Marketing, Metrics
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="list">
              <img
                src="https://d263jb06p40f10.cloudfront.net/users/pictures/7705/profile_square/0_iYAYbmYq-uuNi8-9LSrKX7ANljxnLAt9Xp71T7hsxWOzGrhZQmKtiLEJlYJ?1354575805"
                alt
              />
              <h4>Kamuran-</h4>
              <p class="bio">Web Designer, Web developer, Gamer</p>
              <p class="location">
                <i class="fas fa-map-marker-alt"></i>Tashkent, Qibray, Durmen
              </p>
              <p class="tags">
                Growth Hacking, Entrepreneurship, Lean startup, Start-ups, Growth, Customer
                Development,
                Social Marketing, Product Marketing, Metrics
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="list">
              <img
                src="https://d263jb06p40f10.cloudfront.net/users/pictures/7705/profile_square/0_iYAYbmYq-uuNi8-9LSrKX7ANljxnLAt9Xp71T7hsxWOzGrhZQmKtiLEJlYJ?1354575805"
                alt
              />
              <h4>Kamuran-</h4>
              <p class="bio">Web Designer, Web developer, Gamer</p>
              <p class="location">
                <i class="fas fa-map-marker-alt"></i>Tashkent, Qibray, Durmen
              </p>
              <p class="tags">
                Growth Hacking, Entrepreneurship, Lean startup, Start-ups, Growth, Customer
                Development,
                Social Marketing, Product Marketing, Metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="mb-4 contacts-wrapper" id="contacts">
      <div class="contacts">
        <!--Section heading-->
        <h2
          class="h1-responsive font-weight-bold text-center my-4"
          style="margin-top:0 !important;"
        >Wanna be Investor?</h2>
        <!--Section description-->
        <p
          class="text-center w-responsive mx-auto mb-5"
        >You can support one of the greatest ideas here.</p>

        <div class="row">
          <!--Grid column-->
          <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <!--Grid row-->
              <div class="row">
                <!--Grid column-->
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control" />
                    <label for="name" class>Your name</label>
                  </div>
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control" />
                    <label for="email" class>Your email</label>
                  </div>
                </div>
                <!--Grid column-->
              </div>
              <!--Grid row-->

              <!--Grid row-->
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control" />
                    <label for="subject" class>Idea of startup</label>
                  </div>
                </div>
              </div>
              <!--Grid row-->

              <!--Grid row-->
              <div class="row">
                <!--Grid column-->
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              <!--Grid row-->
            </form>

            <div class="text-center text-md-left">
              <a class="submit-btn" onclick>Send</a>
            </div>
            <div class="status"></div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li>
                <i class="fas fa-map-marker-alt fa-2x" style="color:#f89d3b;"></i>
                <p>Tashkent, OSG 2019,</p>
              </li>

              <li>
                <i class="fas fa-phone mt-4 fa-2x" style="color:#f89d3b;"></i>
                <p>+ 998936893665</p>
              </li>

              <li>
                <i class="fas fa-envelope mt-4 fa-2x" style="color:#f89d3b;"></i>
                <p>kamuranbek1998@gmail.com</p>
              </li>
            </ul>
          </div>
          <!--Grid column-->
        </div>
      </div>
    </section>

    <!-- footer -->
    <footer class="page-footer font-small footer">
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        <span>© 2019 Copyright:</span>
        <a href>Smart_Start Group</a>
      </div>
      <!-- Copyright -->
    </footer>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    };
  },

  methods: {
    async checkAdded() {
      this.loading = true;
      if (this.$store.getters.isUserExpert) {
        this.$router.push("/dashboard");
      } else {
        let list = await this.$store.dispatch("getStartupsList");
        let found = list.some(
          item =>
            item.user &&
            item.user.id &&
            item.user.id == this.$store.state.profile.user_id
        );
        this.loading = false;
        this.$router.push({ path: found ? "/dashboard" : "/form" });
      }
    }
  }
};
</script>

<style>
</style>
