<template>
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
    <div class="row card-display">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">MODEL IT ALL</h5>
            <p class="card-text">AWS CloudFormation allows you to model your entire infrastructure in a text file. This template becomes the single source of truth for your infrastructure. This helps you to standardize infrastructure components used across your organization, enabling configuration compliance and faster troubleshooting.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">AUTOMATE AND DEPLOY</h5>
            <p class="card-text">AWS CloudFormation provisions your resources in a safe, repeatable manner, allowing you to build and rebuild your infrastructure and applications, without having to perform manual actions or write custom scripts. CloudFormation takes care of determining the right operations to perform when managing your stack, and rolls back changes automatically if errors are detected.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">IT'S JUST CODE</h5>
            <p class="card-text">Codifying your infrastructure allows you to treat your infrastructure as just code. You can author it with any code editor, check it into a version control system, and review the files with team members before deploying into production.</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loggedInUser">
      <button @click="getAllUsers">
        Get All Users
      </button>
      <div v-if="users">
        <h1>{{ users[0].username }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'nav',
  data() {
    return {
      users: null
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async getAllUsers() {
      await this.$axios.$get(`server/api/get-all-users`).then(res => {
        this.users = res.data;
      })
    }
  }
};
</script>

<style>
.sub-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: block;
}

.header {
  min-height: 5vh;
  margin-bottom: 2vh;
}

.title {
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

.card-display {
  padding-bottom: 2vh;
}
</style>
