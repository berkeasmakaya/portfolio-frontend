<template>
  <div class="flex flex-col gap-8 py-8">
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row justify-center items-center gap-4">
        <navigation-item to="/home">
          <template #label>Anasayfa</template>
        </navigation-item>
        <navigation-item to="/my-projects">
          <template #label>Projelerim</template>
        </navigation-item>
        <navigation-item to="/about-me">
          <template #label>Hakkımda</template>
        </navigation-item>
        <navigation-item to="/contact">
          <template #label>İletişim</template>
        </navigation-item>
      </div>
      <div class="flex flex-row justify-center items-center gap-2">
        <a href="https://www.instagram.com/asmakaya_/" target="_blank" class="group">
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            size="2xl"
            class="text-gray-medium group-hover:text-blue-dark transition-all duration-300 group-hover:scale-110"
          />
        </a>
        <a href="https://www.x.com/asmakaya_" target="_blank" class="group">
          <font-awesome-icon
            icon="fa-brands fa-x-twitter"
            size="2xl"
            class="text-gray-medium group-hover:text-blue-dark transition-all duration-300 group-hover:scale-110"
          />
        </a>
        <a href="https://www.linkedin.com/in/berkeasmakaya/" target="_blank" class="group">
          <font-awesome-icon
            icon="fa-brands fa-linkedin"
            size="2xl"
            class="text-gray-medium group-hover:text-blue-dark transition-all duration-300 group-hover:scale-110"
          />
        </a>
        <a href="https://github.com/berkeasmakaya" target="_blank" class="group">
          <font-awesome-icon
            icon="fa-brands fa-github"
            size="2xl"
            class="text-gray-medium group-hover:text-blue-dark transition-all duration-300 group-hover:scale-110"
          />
        </a>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-col gap-4">
        <div>
          <h1 class="text-2xl font-bold text-blue-dark border-b border-gray-light pb-2">
            Beraber Çalışmak İster Misiniz?
          </h1>
        </div>
        <div class="flex flex-row gap-4">
          <div
            @click="goToContact"
            class="bg-blue-dark text-white px-5 py-2 rounded-md cursor-pointer hover:bg-blue-medium hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            İletişime Geç
          </div>
          <div
            @click="goToProjects"
            class="px-4 py-2 border border-blue-dark rounded-md text-blue-dark cursor-pointer hover:bg-blue-dark hover:text-white hover:shadow-md hover:scale-105 transition-all duration-300"
          >
            Projeler
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h1 class="text-blue-medium text-sm text-right">
          Mustafa Berke Asmakaya | © {{ currentYear }} Tüm hakları saklıdır.
        </h1>
        <h1 class="text-blue-medium text-right text-sm">Made by Mustafa Berke Asmakaya</h1>
      </div>
    </div>
  </div>
</template>
<script setup>
import NavigationItem from '../NavigationItem.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentYear = new Date().getFullYear()

const goToContact = () => {
  router.push({ name: 'ContactView' })
}

const goToProjects = () => {
  router.push({ name: 'MyProjectsView' })
}
</script>
