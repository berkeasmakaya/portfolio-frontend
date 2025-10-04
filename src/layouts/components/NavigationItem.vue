<template>
  <RouterLink
    class="relative flex flex-row justify-center items-center gap-2 underline-animation"
    :class="isActive ? 'active' : ''"
    :to="to"
  >
    <template v-if="$slots.icon">
      <div :class="isActive ? 'text-blue-dark' : 'text-gray-medium'">
        <slot name="icon" />
      </div>
    </template>
    <template v-if="$slots.label">
      <div :class="isActive ? 'text-blue-dark font-bold' : 'font-bold text-gray-medium'">
        <slot name="label" />
      </div>
    </template>
  </RouterLink>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})

const isActive = computed(() => route.path === props.to)
</script>

<style scoped>
.underline-animation {
  position: relative;
}

.underline-animation::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #6b7280;
  transition: width 0.3s ease-in-out;
}

.underline-animation:hover::after {
  width: 100%;
}

.underline-animation.active::after {
  width: 100%;
  background-color: #2c3e50;
}
</style>
