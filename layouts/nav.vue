<template>
  <div>
    <section class="container-fluid">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="/">
            Cloud Smart Board
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/subscriptions">
                Subscriptions
              </b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content">
                  <div v-if="user">
                  <em>
                    <font-awesome-icon icon="user" /> {{ user.username }}
                  </em>
                  </div>
                  <div v-else>
                    <em>
                      <font-awesome-icon icon="user" /> Login / Sign Up
                    </em>
                  </div>
                </template>
                <b-dropdown-item href="#">
                  Profile
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  Sign Out
                </b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </section>
    <nuxt />
  </div>
</template>

<script>
export default {
  layout: 'nav',
  asyncData({ params }) {
    return axios.get(`http://localhost:3000/server/api/get-user`).then(res => {
      return { user: res.data };
    })
  },
  computed: {
    // display the item from store state.
    name() {
      return 'Karim';
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
