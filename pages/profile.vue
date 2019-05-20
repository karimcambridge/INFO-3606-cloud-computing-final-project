<template>
  <section class="container">
    <div class="header">
      <h2 class="subtitle">
        My Profile
      </h2>
    </div>
    <div class="content">
      <p>
        <strong>
          Username:
        </strong>
        {{ myUser.username }}
      </p>
      <p>
        <strong>
          Email:
        </strong>
        {{ myUser.email }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'nav',
  middleware: 'auth',
  computed: {
    myUser() {
      return this.$store.state.customAuth.user;
    }
  }
}
</script>
