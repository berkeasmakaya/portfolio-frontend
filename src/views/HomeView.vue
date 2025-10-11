<template>
  <div class="py-8">
    <!-- Home Header-->
    <div class="flex flex-row justify-between items-center">
      <div class="w-1/2 py-4">
        <h1 class="text-4xl font-bold text-blue-dark pb-4">
          Merhaba, Ben Mustafa Berke Asmakaya. Frontend/Mobil Geliştiriciyim.
        </h1>
        <div>
          <h1 class="text-gray-dark text-xl pb-4">
            Türkiye merkezli bir Frontend & Mobile geliştiricisiyim. Modern, hızlı ve kullanıcı
            odaklı web ile mobil deneyimler tasarlıyorum.
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
      <div class="w-1/2 flex justify-end items-center">
        <div class="relative">
          <div
            class="w-80 h-80 border-2 border-gray-light rounded-full flex items-center justify-center p-10"
          >
            <img
              src="@/assets/profile.jpeg"
              alt="Profile Image"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Project Section-->
    <div class="py-10 animate-on-scroll">
      <h1 class="text-3xl font-bold text-blue-dark pb-8">Projelerim</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <project-card :projects="projects" />
      </div>
    </div>
    <!--Experience Section-->
    <div class="py-10 animate-on-scroll">
      <h1 class="text-3xl font-bold text-blue-dark pb-8">Deneyimlerim</h1>
      <experience-timeline :experiences="experiences" />
    </div>
    <!--Skills Section-->
    <div class="py-10 animate-on-scroll">
      <h1 class="text-3xl font-bold text-blue-dark pb-8">Yeteneklerim</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <skill-card :skills="skills" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import SkillCard from './components/SkillCard.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation.js'

const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.animate-on-scroll')
})

const router = useRouter()

const projects = [
  {
    title: 'E-Ticaret Web Sitesi',
    description: 'Vue.js ve Node.js kullanarak geliştirilmiş modern e-ticaret platformu',
    image: 'https://picsum.photos/id/1/400/300',
  },
  {
    title: 'E-Ticaret Web Sitesi',
    description: 'Vue.js ve Node.js kullanarak geliştirilmiş modern e-ticaret platformu',
    image: 'https://picsum.photos/id/1/400/300',
  },
  {
    title: 'E-Ticaret Web Sitesi',
    description: 'Vue.js ve Node.js kullanarak geliştirilmiş modern e-ticaret platformu',
    image: 'https://picsum.photos/id/1/400/300',
  },
  {
    title: 'E-Ticaret Web Sitesi',
    description: 'Vue.js ve Node.js kullanarak geliştirilmiş modern e-ticaret platformu',
    image: 'https://picsum.photos/id/1/400/300',
  },
  {
    title: 'E-Ticaret Web Sitesi',
    description: 'Vue.js ve Node.js kullanarak geliştirilmiş modern e-ticaret platformu',
    image: 'https://picsum.photos/id/1/400/300',
  },
  {
    title: 'E-Ticaret Web Sitesi',
    description: 'Vue.js ve Node.js kullanarak geliştirilmiş modern e-ticaret platformu',
    image: 'https://picsum.photos/id/1/400/300',
  },
]

const experiences = [
  {
    position: 'Frontend Developer',
    company: 'Tech Company A',
    dateRange: '2023 - Devam Ediyor',
    description:
      'Modern web uygulamaları geliştiriyorum. Vue.js, React ve TypeScript kullanarak kullanıcı dostu arayüzler tasarlıyorum. Ekip çalışması ve agile metodolojiler konusunda deneyim kazandım.',
    technologies: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
  },
  {
    position: 'Mobile Developer',
    company: 'Startup B',
    dateRange: '2022 - 2023',
    description:
      "React Native kullanarak cross-platform mobil uygulamalar geliştirdim. App Store ve Google Play Store'da yayınlanan uygulamaların geliştirilmesinde aktif rol aldım.",
    technologies: ['React Native', 'JavaScript', 'Firebase', 'Redux'],
  },
  {
    position: 'Junior Frontend Developer',
    company: 'Digital Agency C',
    dateRange: '2021 - 2022',
    description:
      'Web siteleri ve web uygulamaları geliştirerek kariyerime başladım. HTML, CSS, JavaScript ve Vue.js öğrenerek temel frontend becerilerimi geliştirdim.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Bootstrap'],
  },
]

const skills = [
  {
    category: 'Frontend',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Vue.js',
      'React',
      'Angular',
      'Node.js',
      'Express',
      'MongoDB',
      'MySQL',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java'],
  },
]

const goToContact = () => {
  router.push({ name: 'ContactView' })
}

const goToProjects = () => {
  router.push({ name: 'MyProjectsView' })
}
</script>
