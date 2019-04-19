<template>
  <section class="container-fluid">
    <div class="header">
      <h2 class="subtitle">
        My Profile
      </h2>
    </div>
    <div class="content">
      <p>
        <strong>
          Username:
        </strong>
        {{ $auth.user.username }}
      </p>
      <p>
        <strong>
          Email:
        </strong>
        {{ $auth.user.email }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'nav',
  middleware: 'auth'
}
</script>
