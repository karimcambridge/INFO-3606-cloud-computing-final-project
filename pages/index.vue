<template>
  <section>
    <div class="container">
      <div class="header">
        <h2 class="subtitle">
          Group 6 INFO 3606 Final Project
        </h2>
      </div>
      <div class="content">
        <strong>
          Cloud Board
        </strong>
        is a smart screen system which utilizes cloud services to provide a product that makes note taking and sharing easier for lecturers and students.
      </div>
      <div class="row card-display">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header text-white bg-info">
              <strong>
                USEFULNESS
              </strong>
            </div>
            <div class="card-body">
              <p class="card-text">
                <ul>
                  <li>When lecturers take notes, often they may need to re-write (type) information before posting it to my-eLearning.</li>
                  <li>Our product cuts off the excess work by utilizing pre-existing services in a bundle.</li>
                  <li>The product creates profiles of the board users and converts their handwriting and images into a computer compatible format (.png, .txt, .svg etc.) instantly (https://aws.amazon.com/textract/).</li>
                  <li>This product is especially useful to the technical and impromptu classes where math equations, scriptwriting, brainstorming and other in the moment notes and diagrams can be easily uploaded on to a central location at the end of class.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header text-white bg-info">
              <strong>
                FEATURES
              </strong>
            </div>
            <div class="card-body">
              <p class="card-text">
                <ul>
                  <li>The product will use 3rd party styluses and boards to process this cloud service. </li>
                  <li>The stylus “chalk” button which when clicked will automatically send the data to the API. </li>
                  <li>The system will store written text (understood with OCR). </li>
                  <li>Different profiles will be created for different end users (permissions & user system; e.g. lecturers/students in university). </li>
                  <li>The system will detect a person's handwriting by using data based on their profile. </li>
                  <li>A Cloud connected system, whereas the board is only a screen and all of the processing is done on the cloud. </li>
                  <li>A ‘post to’ feature, where for instance someone with permissions (a lecturer can instantly upload the current screen to their platform using the API gateway (The notes format will be pre-set by the user’s management). </li>
                  <li>Support widely used output & data serialization formats (For example, JSON, SOAP, XML, etc.). </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-header text-white bg-info">
              <strong>
                ARCHITECTURE
              </strong>
            </div>
            <div class="card-body">
              <p class="card-text">
                <ul>
                  <li>Amazon Lambda, which processes the input from the screen and sends it to the API.</li>
                  <li>OCR API (Amazons’ Rekognition), in order to deconstructs user input. Also using Amazon Textract.</li>
                  <li>Amazon DynamoDB as the primary datastore & Redis for real time tasks. The database manages the data for further “background” processing. This will include replication.</li>
                  <li>S3 bucket, which will basically be used as a backup of the necessary & converted data (text/images etc.).</li>
                  <li>Virtual Private Cloud and gateways, separate users’ resources.</li>
                  <li>Load balancers shares out the workload between the different VPCs in the service.</li>
                  <li>Content Delivery Network (CDN) and API gateway, flows all the data between the screen and cloud and then to the API. API gateway, control flow between the API and cloud.</li>
                  <li>IoT gateway, in order to connect the board and stylus to the cloud with an API management policy.</li>
                  <li>API Gateway, used to create & manage API keys for end users.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="debugMode" class="debugging">
        <div v-if="$auth.user">
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
      <div v-if="$store.state.customAuth.user">
        {{ $store.state.customAuth.user.username }}
      </div>
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
      users: null,
      debugMode: false
    }
  },
  computed: {
    myUser() {
      return this.$store.state.customAuth.user;
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
  padding-top: 5vh;
}
</style>
