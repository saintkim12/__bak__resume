<template>
  <div id="page">
    <el-menu ref="menu"></el-menu>
    <section>
      <h1 style="text-align: center;">Hello!</h1>
      <div @click="$refs.menu.open()">
        Bob lives in a .
      </div>
    </section>
    <template v-for="(id) in displayPosts">
      <section v-if="posts[id]" v-html="posts[id].data" :key="id"></section>
    </template>
  </div>
</template>
<script>
import 'reset-css/reset.css'
// import marked from 'marked'
// import ElMenu from './components/layout/ElMenu'
export default {
  name: 'App',
  // components: { ElMenu }
  data() {
    return {
      displayPosts: ['Welcome'],
      posts: {}
    }
  },
  mounted() {
    const setPost = (post) => {
      this.$set(this, 'posts', { ...this.posts, ...{ [post.id]: post } })
    }
    Promise.all([
      import(`./posts/Welcome.md`).then(data => ({ id: 'Welcome', type: 'md', data })).then(setPost)
    ]).then(posts => {
      console.log(`${posts.length} posts is loaded`)
      // this.$set(this, 'posts', { ...this.posts, ...posts.reduce((obj, o) => ({ ...obj, ...{ [o.id]: o } }), {}) })
    })
  }
}
</script>
<style lang="scss" scoped>
#page {
  $section-padding: 10px;
  section {
    width: calc(100% - #{$section-padding * 2});
    height: calc(100% - #{$section-padding * 2});
    min-height: 400px - ($section-padding * 2);
    padding: $section-padding;
    background-color: #eee;
  }
}
</style>
<style lang="scss">
html, body, #page {
  width: 100%;
  height: 100%;
}
</style>
