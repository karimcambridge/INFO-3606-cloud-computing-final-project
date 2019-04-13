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
  </section>
</template>

<script>
export default {
  layout: 'nav'
}
</script>

<style>
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
