<template>
  <div class="notification is-danger">
    <button class="delete" @click="$emit('close')"></button>
    {{ message }}
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>
