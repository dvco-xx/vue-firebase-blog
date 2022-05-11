import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards:
        [
          {blogTitle: "How to make a Slanted/Skewed Div with HTML and CSS", blogCoverPhoto: "stock-1", blogDate: "Jan 11, 2022"},
          {blogTitle: "How to Handle Real-Time Data with FireBase", blogCoverPhoto: "stock-2", blogDate: "Mar 15, 2022"},
          {blogTitle: "Build a Modern Sign-Up Form with HTML and CSS", blogCoverPhoto: "stock-3", blogDate: "April 9, 2022"},
          {blogTitle: "Create a Mobile Responsive DashBoard using Vue.js", blogCoverPhoto: "stock-4", blogDate: "May 1, 2022"}
        ],
      editPost: null
  },
  mutations: {
      toggleEditPost(state, payload) {
          state.editPost = payload
          console.log(state.editPost)
      }
  },
  actions: {
  },
  modules: {
  }
})
