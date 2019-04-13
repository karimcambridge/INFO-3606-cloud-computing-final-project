<template>
  <section class="container-fluid">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
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
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <section class="sub-container">
      <div class="header">
        <h2 class="subtitle">
          Group 6 INFO 3606 Final Project
        </h2>
        <div class="links">
          <a
            href="https://github.com/karimcambridge/INFO-3606-cloud-computing-final-project"
            target="_blank"
            class="button--blue"
          >Source</a>
        </div>
      </div>
    </section>
  </section>
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

.header {
  min-height: 5vh;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
