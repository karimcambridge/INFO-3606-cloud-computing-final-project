<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  width: 100%;
}

html, body {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--blue {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #4078c0;
  color: #4078c0;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--blue:hover {
  color: #fff;
  background-color: #4078c0;
}

.container-fluid {
  margin: 0 auto;
  padding: 0;
  min-height: calc(100vh - 70px);
  display: block;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-display {
  padding-bottom: 2vh;
}

.header {
  min-height: 5vh;
  margin-bottom: 2vh;
  padding-top: 4vh;
}

.title {
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
}

.subtitle {
  font-weight: 400;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.footer {
  height: 50px;
  flex-shrink: 0;
  text-align: center;
  color: #fff;
  background-color: #222;
  line-height: 6vh;
}
</style>
