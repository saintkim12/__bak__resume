<template>
  <div id="page">
    <el-menu ref="menu" :page-length="pageLength"></el-menu>
    <el-page>
      <h1 style="text-align: center;">Hello!</h1>
      <div @click="$refs.menu.open()">
        Bob lives in a .
      </div>
    </el-page>
    <template v-for="(id) in displayPosts">
      <el-page v-if="posts[id]" v-html="posts[id].data" :key="id"></el-page>
    </template>
  </div>
</template>
<script>
import 'reset-css/reset.css'
export default {
  name: 'App',
  data() {
    return {
      displayPosts: ['Welcome', 'Page001', 'Page002'],
      posts: {}
    }
  },
  computed: {
    defaultPageLength() {
      return 1
    },
    pageLength() {
      return Object.keys(this.posts).length + this.defaultPageLength
    }
  },
  mounted() {
    const setPost = (post) => {
      this.$set(this, 'posts', { ...this.posts, ...{ [post.id]: post } })
    }
    Promise.all([
      import(`./posts/Welcome.md`).then(data => ({ id: 'Welcome', type: 'md', data })).then(setPost),
      import(`./posts/Page001.md`).then(data => ({ id: 'Page001', type: 'md', data })).then(setPost),
      import(`./posts/Page002.md`).then(data => ({ id: 'Page002', type: 'md', data })).then(setPost)
    ]).then(posts => {
      console.log(`${posts.length} posts is loaded`)
      // this.$set(this, 'posts', { ...this.posts, ...posts.reduce((obj, o) => ({ ...obj, ...{ [o.id]: o } }), {}) })
    })
  }
}
</script>
<style lang="scss">
html, body, #page {
  width: 100%;
  height: 100%;
}
</style>
