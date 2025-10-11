<template>
  <div class="relative" ref="timelineContainer">
    <!-- Animasyonlu progress çizgisi (scroll ile büyüyen, mavi) -->
    <div
      class="absolute top-0 w-0.5 bg-blue-light timeline-progress"
      ref="progressLine"
      style="left: 11px; transform: translateX(-50%)"
    ></div>

    <div class="space-y-8">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="relative flex items-start group timeline-item"
        :ref="(el) => (timelineItems[index] = el)"
      >
        <!-- Timeline dot -->
        <div
          class="relative z-30 flex items-center justify-center w-6 h-6 md:w-12 md:h-12 bg-blue-dark rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
        >
          <div class="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
        </div>

        <!-- Experience content -->
        <div class="ml-3 md:ml-6 flex-1">
          <div
            class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 border border-gray-light group-hover:border-blue-light"
          >
            <!-- Date badge -->
            <div
              class="inline-block bg-blue-light text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3"
            >
              {{ experience.dateRange }}
            </div>

            <!-- Company and position -->
            <h3 class="text-lg md:text-xl font-bold text-blue-dark mb-2">
              {{ experience.position }}
            </h3>
            <h4 class="text-base md:text-lg font-semibold text-blue-medium mb-3">
              {{ experience.company }}
            </h4>

            <!-- Description -->
            <p class="text-gray-dark mb-4 leading-relaxed text-sm md:text-base">
              {{ experience.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in experience.technologies"
                :key="tech"
                class="bg-gray-100 border border-gray-light text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium hover:bg-blue-light hover:text-white transition-colors duration-200"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  experiences: {
    type: Array,
    required: true,
  },
})

const timelineContainer = ref(null)
const progressLine = ref(null)
const timelineItems = ref([])

const updateProgress = () => {
  if (!progressLine.value || !timelineContainer.value) return

  const scrollTop = window.scrollY
  const windowHeight = window.innerHeight

  // Timeline container'ın pozisyonunu bul
  const containerTop = timelineContainer.value.offsetTop
  const containerHeight = timelineContainer.value.offsetHeight

  // Progress hesapla - timeline container görünür olduğunda başla
  const scrollStart = containerTop - windowHeight + 100 // 200px erken başla
  const scrollEnd = containerTop + containerHeight - 100 // 200px erken bitir

  let progress = 0

  if (scrollTop >= scrollStart && scrollTop <= scrollEnd) {
    progress = (scrollTop - scrollStart) / (scrollEnd - scrollStart)
  } else if (scrollTop > scrollEnd) {
    progress = 1
  }

  // Progress'i 0-1 arasında sınırla
  progress = Math.max(0, Math.min(1, progress))

  // Progress çizgisinin yüksekliğini güncelle
  progressLine.value.style.height = `${progress * 100}%`
}

onMounted(() => {
  window.addEventListener('scroll', updateProgress)
  setTimeout(updateProgress, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

<style scoped>
.timeline-progress {
  transition: height 0.1s ease-out;
  transform-origin: top;
  z-index: 1 !important;
}

.timeline-item {
  position: relative;
  z-index: 10;
}

/* Responsive timeline çizgisi pozisyonları */
@media (min-width: 768px) {
  .timeline-progress {
    left: 23px !important;
  }
}
</style>
