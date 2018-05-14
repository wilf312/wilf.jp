<template>
  <div>
    <form name="contact" action="" method="post" netlify>
      <p>
        <v-text-field
                name="name"
                label="name"
        ></v-text-field>
      </p>
      <p>
        <v-text-field
                name="email"
                label="name"
        ></v-text-field>
      </p>
      <div data-netlify-recaptcha></div>
      <p>
        <input class="form-button" type="submit" value="Send message" />
      </p>
      <input type="hidden" name="form-name" value="contact" />
    </form>
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
