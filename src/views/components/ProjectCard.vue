<template>
  <div
    v-for="project in projects"
    :key="project.title"
    class="flex flex-col border border-gray-light rounded-lg p-4 hover:border-blue-dark hover:shadow-2xl hover:scale-105 transition-all duration-300"
  >
    <div class="w-full aspect-video overflow-hidden pb-4">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div :key="project.title">
      <h1 class="text-xl font-bold text-blue-dark pb-1">{{ project.title }}</h1>
      <h1 class="text-blue-medium text-sm">{{ project.description }}</h1>
    </div>
  </div>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
})
</script>
