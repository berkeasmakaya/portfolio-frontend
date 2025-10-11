import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const visibleElements = ref(new Set())

  let observer = null

  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.dataset.animateId
            if (elementId) {
              // Staggered animation için gecikme
              const delay = parseInt(entry.target.dataset.animateDelay) || 0
              setTimeout(() => {
                visibleElements.value.add(elementId)
                entry.target.classList.add('animate-visible')
              }, delay)
            }
          }
        })
      },
      { threshold: 0.2 },
    )
  }

  const observeElement = (element, id, delay = 0) => {
    if (element && observer) {
      element.dataset.animateId = id
      element.dataset.animateDelay = delay
      observer.observe(element)
    }
  }

  const observeElements = (selector, baseDelay = 0) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element, index) => {
      const delay = baseDelay + index * 100 // Her element 100ms gecikme
      observeElement(element, `${selector}-${index}`, delay)
    })
  }

  const isVisible = (id) => {
    return visibleElements.value.has(id)
  }

  onMounted(() => {
    // Observer'ı başlat
    initObserver()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    visibleElements,
    observeElement,
    observeElements,
    isVisible,
  }
}
