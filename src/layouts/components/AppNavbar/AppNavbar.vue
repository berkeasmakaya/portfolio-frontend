<template>
  <div class="w-full py-3 rounded-lg flex flex-row items-center justify-between">
    <div>
      <h1 class="text-xl font-bold text-blue-dark">Mustafa Berke Asmakaya</h1>
    </div>
    <div class="flex flex-row justify-center items-center gap-8">
      <navigation-item to="/home">
        <template #icon>
          <HomeIcon class="w-6 h-6" />
        </template>
        <template #label>Anasayfa</template>
      </navigation-item>
      <navigation-item to="/my-projects">
        <template #icon>
          <BriefcaseIcon class="w-6 h-6" />
        </template>
        <template #label>Projelerim</template>
      </navigation-item>
      <navigation-item to="/about-me">
        <template #icon>
          <UserIcon class="w-6 h-6" />
        </template>
        <template #label>Hakkımda</template>
      </navigation-item>
    </div>
    <div class="flex justify-center items-center">
      <navigation-item to="/contact">
        <template #icon>
          <ChatBubbleBottomCenterTextIcon class="w-6 h-6" />
        </template>
      </navigation-item>
    </div>
  </div>
</template>

<script setup>
import NavigationItem from '../NavigationItem.vue'
import HomeIcon from '@heroicons/vue/24/solid/HomeIcon'
import BriefcaseIcon from '@heroicons/vue/24/solid/BriefcaseIcon'
import UserIcon from '@heroicons/vue/24/solid/UserIcon'
import ChatBubbleBottomCenterTextIcon from '@heroicons/vue/24/solid/ChatBubbleBottomCenterTextIcon'
</script>
