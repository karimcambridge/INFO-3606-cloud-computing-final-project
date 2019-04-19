<template>
  <section>
    <div class="container">
      <div class="header">
        <h2 class="subtitle">
          Packages
        </h2>
      </div>
      <div class="row card-display justify-content-center">
        <div class="col-sm-8">
          <div class="card bg-light">
            <div class="card-header text-white bg-info">
              <strong>
                BASIC SCALABLE
              </strong>
            </div>
            <div class="card-body">
              <p class="card-text">
                <b-table :items="basicItems" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row card-display justify-content-center">
        <div class="col-sm-8">
          <div class="card bg-light">
            <div class="card-header text-white bg-info">
              <strong>
                ENTERPRISE
              </strong>
            </div>
            <div class="card-body">
              <p class="card-text">
                <b-table :items="enterpriseItems" />
              </p>
            </div>
          </div>
        </div>
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
      basicItems: [
        {
          'Price': '$30 - $99 Monthly',
          'Smart Board Group Access': 4,
          'Bucket Storage': '100 GB | 500 GB max',
          'Access Requests Per Month': '5k - 0.5m max',
          'Smart Board Limit': 30,
          'API Keys': 1
        }
      ],
      enterpriseItems: [
        {
          'Price': 'Starts at $120 Monthly',
          'SmartBoard Group Access': 'Unlimited',
          'Bucket Storage': 'Dynamic',
          'Access Requests Per Month': 'Unlimited',
          'Smart Board Limit': 'Dynamic',
          'API Keys': '1 per smart board'
        }
      ]
    }
  }
};
</script>

<style>
.card-display {
  padding-top: 2vh;
}
</style>
