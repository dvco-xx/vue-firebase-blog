<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Recent Blog Posts</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Sign up below to never miss a post!</h2>
        <router-link :to="{name: 'Register'}" class="router-button">Sign Up
          <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg"
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";

export default {
  name: "Home",
  components: {BlogCard, BlogPost, Arrow},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "I'm David, a Software Engineer from Nigeria. " +
            "This site contains links to some of my personal work, as well as weekly programming-related blogposts for beginner developers.",
        welcomeScreen: true,
        photo: "programmer-designer",
      },
      sampleBlogPost: [
        {
          title: "Portfolio",
          blogHTML: "I love to create web spaces that combine simple, user-centered design with high performance and scalability. " +
              "Follow the link below to view some of my other work.",
          blogCoverPhoto: "code-design-illustration",
        }
      ],
    };
  },

  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    }
  }

};
</script>

<style scoped lang="scss">
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 32px;
    margin-bottom: 50px;
    text-align: center;
    text-transform: uppercase;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: block;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      @media (min-width: 800px) {
        font-size: 40px;
      }
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: 30px auto;
      padding: 20px;
      width: 200px;
      text-decoration: none;
      @media(min-width: 800px) {
        margin-left: auto;
      }
    }
  }
}
</style>
