<template>
  <div id="container">
    <Header/>
    <nuxt keep-alive />
    <Footer/>
  </div>
</template>

<script>
  export default {
    name: 'default',
    components: {
      Header: () => import('~/components/header'),
      Footer: () => import('~/components/footer'),
    },
  }
</script>
