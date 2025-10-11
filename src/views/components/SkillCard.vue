<template>
  <div
    v-for="skillCategory in skills"
    :key="skillCategory.category"
    class="border border-gray-light rounded-lg p-4 hover:border-blue-dark hover:shadow-lg transition-all duration-300"
  >
    <div class="w-fit bg-blue-dark rounded-lg px-4 py-2 mb-4">
      <h2 class="text-lg font-bold text-white">{{ skillCategory.category }}</h2>
    </div>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="skill in skillCategory.skills"
        :key="skill"
        class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-light hover:text-white transition-colors duration-200"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  skills: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped></style>
