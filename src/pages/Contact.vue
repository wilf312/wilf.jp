<template>
  <div>
    <div class="container">
      <h1 class="title">
        Contact
      </h1>
      <div class="content">
        <form name="contact" action="/thank-you" netlify-honeypot="bot-field" method="post" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden">
            <label>Don’t fill this out: <input name="bot-field"></label>
          </p>
          <label class="form-label" for="name">
            Name:
          </label>
          <input class="form-field" name="name" id="name" />
          <label class="form-label" for="email">
            Email:
          </label>
          <input class="form-field" name="email" id="email" />
          <label class="form-label" for="message">
            Message:
          </label>
          <textarea class="form-field" name="message" id="message"></textarea>
          <input class="form-button" type="submit" value="Send message" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  const name = __filename.match(/^src\/[\w|\\/]*\/(\w*).vue$/)[1]

  export default {
    name,
    data () {
      return {
        name
      }
    }
  }
</script>

<style scoped lang="stylus">
  .Contact
    background-color #d2d2d2

</style>
