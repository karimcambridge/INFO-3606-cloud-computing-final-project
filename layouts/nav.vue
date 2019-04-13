<template>
  <div>
    <nuxt />
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
                  <em>
                    <font-awesome-icon icon="user" /> User
                  </em>
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
  </div>
</template>

<style>
.container-fluid {
  margin: 0 auto;
  padding: 0;
}

.sub-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
