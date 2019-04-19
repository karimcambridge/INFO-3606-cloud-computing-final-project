<template>
  <div>
    <section>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">
          Cloud Smart Board
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/subscriptions">
              Subscriptions
            </b-nav-item>
            <b-nav-item href="/information">
              Information
            </b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <div v-if="$auth.$state.loggedIn">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content">
                  <em>
                    <font-awesome-icon icon="user" /> {{ $auth.user.username }}
                  </em>
                </template>
                <b-dropdown-item href="/profile">
                  Profile
                </b-dropdown-item>
                <b-dropdown-item @click="logout">
                  Sign Out
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </div>
            <div v-else>
              <b-nav-item href="/login">
                <font-awesome-icon icon="user" /> Login / Sign Up
              </b-nav-item>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </section>
    <nuxt />
  </div>
</template>

<script>
export default {
  layout: 'nav',
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  }
};
</script>

<style>
</style>
