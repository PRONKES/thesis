<template>
  <div>
    <head>
      <title>Vuetify Parallax Starter</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        href="https://cdn.vuetifyjs.com/images/logos/favicon.ico"
      />
    </head>
    <div>
      <div id="app">
        <v-app>
          <v-main>
            <section id="hero">
              <v-row no-gutters>
                <v-img
                  :max-height="
                    'calc(100vh - ' + $vuetify.application.top + 'px)'
                  "
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
                >
                  <v-theme-provider dark>
                    <v-container fill-height>
                      <v-row
                        align="center"
                        class="white--text mx-auto"
                        justify="center"
                      >
                        <v-col
                          class="white--text text-center"
                          cols="12"
                          tag="h1"
                        >
                          <br />

                          <strong>THE ESCAPER</strong>
                        </v-col>

                        <v-btn
                          class="align-self-end"
                          fab
                          outlined
                          @click="$vuetify.goTo('#about-me')"
                        >
                          <v-icon>mdi-chevron-double-down</v-icon>
                        </v-btn>
                      </v-row>
                    </v-container>
                  </v-theme-provider>
                </v-img>
              </v-row>
            </section>

            <section id="about-me">
              <div class="py-12"></div>

              <v-container class="text-center">
                <h2 class="display-2 font-weight-bold mb-3">ABOUT US</h2>

                <v-responsive class="mx-auto mb-8" width="56">
                  <v-divider class="mb-1"></v-divider>

                  <v-divider></v-divider>
                </v-responsive>

                <v-responsive
                  class="mx-auto title font-weight-light mb-8"
                  max-width="720"
                >
                  Vuetify is the #1 component library for Vue.js and has been in
                  active development since 2016. The goal of the project is to
                  provide users with everything that is needed to build rich and
                  engaging web applications using the Material Design
                  specification. It accomplishes that with a consistent update
                  cycle, Long-term Support (LTS) for previous versions,
                  responsive community engagement, a vast ecosystem of resources
                  and a dedication to quality components.
                </v-responsive>

                <section class="our-webcoderskull padding-lg">
                  <div class="container">
                    <div class="row heading heading-icon">
                      <h2>Our Team</h2>
                    </div>
                    <ul class="row">
                      <li class="col-12 col-md-6 col-lg-3">
                        <div
                          class="cnt-block equal-hight"
                          style="height: 349px;"
                        >
                          <figure>
                            <img
                              src="http://www.webcoderskull.com/img/team4.png"
                              class="img-responsive"
                              alt=""
                            />
                          </figure>
                          <h3>
                            <a href="http://www.webcoderskull.com/"
                              >Guptam Holla</a
                            >
                          </h3>
                          <p>
                            Hofstra University School of Law Hempstead, New York
                          </p>
                        </div>
                      </li>
                      <li class="col-12 col-md-6 col-lg-3">
                        <div
                          class="cnt-block equal-hight"
                          style="height: 349px;"
                        >
                          <figure>
                            <img
                              src="http://www.webcoderskull.com/img/team1.png"
                              class="img-responsive"
                              alt=""
                            />
                          </figure>
                          <h3><a href="#">Kappua Billa</a></h3>
                          <p>
                            Hofstra University School of Law Hempstead, New York
                          </p>
                        </div>
                      </li>
                      <li class="col-12 col-md-6 col-lg-3">
                        <div
                          class="cnt-block equal-hight"
                          style="height: 349px;"
                        >
                          <figure>
                            <img
                              src="http://www.webcoderskull.com/img/team4.png"
                              class="img-responsive"
                              alt=""
                            />
                          </figure>
                          <h3>
                            <a href="http://www.webcoderskull.com/"
                              >Omin Goshu</a
                            >
                          </h3>
                          <p>
                            Hofstra University School of Law Hempstead, New York
                          </p>
                        </div>
                      </li>
                      <li class="col-12 col-md-6 col-lg-3">
                        <div
                          class="cnt-block equal-hight"
                          style="height: 349px;"
                        >
                          <figure>
                            <img
                              src="http://www.webcoderskull.com/img/team2.png"
                              class="img-responsive"
                              alt=""
                            />
                          </figure>
                          <h3>
                            <a href="http://www.webcoderskull.com/"
                              >NArman Bandhu</a
                            >
                          </h3>
                          <p>
                            Hofstra University School of Law Hempstead, New York
                          </p>
                          <ul class="follow-us clearfix">
                            <li>
                              <a href="#"
                                ><i
                                  class="fa fa-facebook"
                                  aria-hidden="true"
                                ></i
                              ></a>
                            </li>
                            <li>
                              <a href="#"
                                ><i class="fa fa-twitter" aria-hidden="true"></i
                              ></a>
                            </li>
                            <li>
                              <a href="#"
                                ><i
                                  class="fa fa-linkedin"
                                  aria-hidden="true"
                                ></i
                              ></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <div></div>
              </v-container>
            </section>

            <section id="stats">
              <v-parallax
                :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
                src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              >
                <v-container fill-height>
                  <v-row class="mx-auto">
                    <v-col cols="12" md="3">
                      <div class="text-center">
                        <div class="display-3 font-weight-black mb-4"></div>

                        <div
                          class="title font-weight-regular text-uppercase"
                        ></div>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-parallax>
            </section>

            <section id="blog">
              <div class="py-12"></div>

              <v-container>
                <h2
                  class="display-2 font-weight-bold mb-3 text-uppercase text-center"
                >
                  Blog
                </h2>

                <v-responsive class="mx-auto mb-12" width="56">
                  <v-divider class="mb-1"></v-divider>

                  <v-divider></v-divider>
                </v-responsive>

                <v-row>
                  <v-col cols="12" md="4">
                    <v-img class="mb-4" height="275" max-width="100%"></v-img>

                    <h3 class="font-weight-black mb-4 text-uppercase"></h3>

                    <div class="title font-weight-light mb-5"></div>

                    <v-btn class="ml-n4 font-weight-black">
                      Continue Reading
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>

              <div class="py-12"></div>
            </section>

            <v-sheet id="contact" color="#333333" dark tag="section" tile>
              <div class="py-12"></div>

              <v-container>
                <h2
                  class="display-2 font-weight-bold mb-3 text-uppercase text-center"
                >
                  Contact Me
                </h2>

                <v-responsive class="mx-auto mb-12" width="56">
                  <v-divider class="mb-1"></v-divider>

                  <v-divider></v-divider>
                </v-responsive>

                <v-theme-provider light>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field flat label="Name*" solo></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field flat label="Email*" solo></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field flat label="Subject*" solo></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea flat label="Message*" solo></v-textarea>
                    </v-col>

                    <v-col class="mx-auto" cols="auto">
                      <v-btn color="accent" x-large>
                        Submit
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-theme-provider>
              </v-container>

              <div class="py-12"></div>
            </v-sheet>
          </v-main>

          <v-footer class="justify-center" color="#292929" height="100">
            <div
              class="title font-weight-light grey--text text--lighten-1 text-center"
            >
              &copy; {{ new Date().getFullYear() }} — Vuetify, LLC — Made with
              💜 by John Leider
            </div>
          </v-footer>
        </v-app>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Englebert&display=swap");
strong {
  font-family: "Englebert", sans-serif;
  font-size: 70px;
}
.row.heading h2 {
  color: #fff;
  font-size: 52.52px;
  line-height: 95px;
  font-weight: 400;
  text-align: center;
  margin: 0 0 40px;
  padding-bottom: 20px;
  text-transform: uppercase;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.heading.heading-icon {
  display: block;
}
.padding-lg {
  display: block;
  padding-top: 60px;
  padding-bottom: 60px;
}
.practice-area.padding-lg {
  padding-bottom: 55px;
  padding-top: 55px;
}
.practice-area .inner {
  border: 1px solid #999999;
  text-align: center;
  margin-bottom: 28px;
  padding: 40px 25px;
}
.our-webcoderskull .cnt-block:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border: 0;
}
.practice-area .inner h3 {
  color: #3c3c3c;
  font-size: 24px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  padding: 10px 0;
}
.practice-area .inner p {
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
}
.practice-area .inner img {
  display: inline-block;
}

.our-webcoderskull {
  background: url("https://images.unsplash.com/photo-1545252681-7e3956baf6c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80")
    no-repeat center top / cover;
}
.our-webcoderskull .cnt-block {
  float: left;
  width: 100%;
  background: #87bdd8;
  padding: 30px 20px;
  text-align: center;
  border: 2px solid #d5d5d5;
  margin: 0 0 28px;
}
.our-webcoderskull .cnt-block figure {
  width: 148px;
  height: 148px;
  border-radius: 100%;
  display: inline-block;
  margin-bottom: 15px;
}
.our-webcoderskull .cnt-block img {
  width: 148px;
  height: 148px;
  border-radius: 100%;
}
.our-webcoderskull .cnt-block h3 {
  color: #2a2a2a;
  font-size: 20px;
  font-weight: 500;
  padding: 6px 0;
  text-transform: uppercase;
}
.our-webcoderskull .cnt-block h3 a {
  text-decoration: none;
  color: #2a2a2a;
}
.our-webcoderskull .cnt-block h3 a:hover {
  color: #b96516;
}
.our-webcoderskull .cnt-block p {
  color: #2a2a2a;
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
}
/* .our-webcoderskull .cnt-block .follow-us {
  margin: 20px 0 0;
} */
/* .our-webcoderskull .cnt-block .follow-us li {
  display: inline-block;
  width: auto;
  margin: 0 5px;
} */
/* .our-webcoderskull .cnt-block .follow-us li .fa {
  font-size: 24px;
  color: #070000 !important;
}
.our-webcoderskull .cnt-block .follow-us li .fa:hover {
  color: #025a8e;
} */
</style>
