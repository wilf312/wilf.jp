<template>
  <div>
    <form name="contact" netlify-honeypot="bot-field" method="POST" action="thank-you" netlify>
      <p class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field"></label>
      </p>
      <p>
        <label>Email: <input type="text" name="name"></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type=”submit”>Send</button>
      </p>
    </form>
    <form name="contact" method="POST" action="thank-you" netlify>
      <p>
        <label>Email: <input type="text" name="name"></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <div data-netlify-recaptcha></div>
      <p>
        <button type=”submit”>Send</button>
      </p>
    </form>
  </div>
</template>

<script>
  const name = __filename.match(/^src\/[\w|\\/]*\/(\w*).vue$/)[1]

  export default {
    name,
    computed: {
    },
    data () {
      return {
        name
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus">
  .Contact
    background-color #d2d2d2

</style>
