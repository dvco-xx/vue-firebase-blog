import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards:
        [
          {blogTitle: "Top 5 Tips for Beginner Developers", blogCoverPhoto: "stock-1", blogDate: "Jan 11, 2022"},
          {blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "Mar 15, 2022"},
          {blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "April 9, 2022"},
          {blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 1, 2022"}
        ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
