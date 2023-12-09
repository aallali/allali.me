<script setup lang="ts">
const layout = "default";
import { useDarkMode } from "~/composable/store"

onMounted(() => {
  useDarkMode.loadUserTheme()
})

</script>
<template>
  <NuxtLayout :name="layout" keepalive>
    <NuxtPage />
  </NuxtLayout>
</template>

