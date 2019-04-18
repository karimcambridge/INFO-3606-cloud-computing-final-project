<template>
  <div>
    <section class="container-fluid">
      <div>
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
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <div v-if="isAuthenticated">
                <b-nav-item-dropdown right>
                  <!-- Using 'button-content' slot -->
                  <template slot="button-content">
                    <em>
                      <font-awesome-icon icon="user" /> {{ loggedInUser.username }}
                    </em>
                  </template>
                  <b-dropdown-item href="#">
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
      </div>
    </section>
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  layout: 'nav',
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  }
};
</script>
<style>
.container-fluid {
  margin: 0 auto;
  padding: 0;
}
</style>
