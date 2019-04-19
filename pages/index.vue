<template>
  <section>
    <div class="container-fluid">
      <div class="header">
        <h2 class="subtitle">
          Group 6 INFO 3606 Final Project
        </h2>
      </div>
      <div class="row card-display">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header text-white bg-info">
              <strong>
                MODEL IT ALL
              </strong>
            </div>
            <div class="card-body">
              <p class="card-text">
                AWS CloudFormation allows you to model your entire infrastructure in a text file. This template becomes the single source of truth for your infrastructure. This helps you to standardize infrastructure components used across your organization, enabling configuration compliance and faster troubleshooting.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header text-white bg-info">
              <strong>
                AUTOMATE AND DEPLOY
              </strong>
            </div>
            <div class="card-body">
              <p class="card-text">
                AWS CloudFormation provisions your resources in a safe, repeatable manner, allowing you to build and rebuild your infrastructure and applications, without having to perform manual actions or write custom scripts. CloudFormation takes care of determining the right operations to perform when managing your stack, and rolls back changes automatically if errors are detected.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header text-white bg-info">
              <strong>
                IT'S JUST CODE
              </strong>
            </div>
            <div class="card-body">
              <p class="card-text">
                Codifying your infrastructure allows you to treat your infrastructure as just code. You can author it with any code editor, check it into a version control system, and review the files with team members before deploying into production.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="$auth.user" class="debugging">
        <button @click="getAllUsers">
          Get All Users
        </button>
        <div v-if="users">
          <ul>
            <div v-for="user in users" :key="user.id">
              <li>
                {{ user.username }}
              </li>
            </div>
          </ul>
        </div>
      </div>
      <h1>
        {{ typeof $auth.user }}
        {{ $auth.$state.loggedIn }}
        {{ $auth.loggedIn }}
      </h1>
    </div>
    <div class="footer">
      <p>
        Group 6 INFO 3606 Final Project
      </p>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'nav',
  data() {
    return {
      users: null
    }
  },
  methods: {
    async getAllUsers() {
      await this.$axios.$get(`server/api/get-all-users`).then(res => {
        this.users = res.data;
        console.log(JSON.stringify(this.users));
      })
    }
  }
};
</script>

<style>
.debugging {
  padding-top: 15vh;
}
</style>
