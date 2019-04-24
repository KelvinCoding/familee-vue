<template>
  <div>
    <iframe
      :src="formUrl">
      Loading...
    </iframe>
  </div>
</template>
<script>
export default {
  props:{
    formUrl: {
      type: String,
      required: true
    }
  }
}
</script>
