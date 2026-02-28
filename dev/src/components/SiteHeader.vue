<template>
  <el-header class="site-header">
    <el-row justify="space-between" align="middle">
      <el-col>
        <router-link to="/" class="logo-link">
          <img src="@/assets/logo.svg" alt="Site logo" class="logo" />
        </router-link>
      </el-col>

      <!-- desktop menu -->
      <el-col class="nav-links" :class="{ mobile: isMobile }">
        <el-menu :default-active="active" mode="horizontal" @select="onSelect">
          <el-menu-item index="home">
            <router-link to="/">Home</router-link>
          </el-menu-item>
          <el-menu-item index="about">
            <router-link to="/about">About</router-link>
          </el-menu-item>
          <el-menu-item index="research">
            <router-link to="/research">Research</router-link>
          </el-menu-item>
          <el-menu-item index="contact">
            <router-link to="/contact">Contact</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>

      <!-- mobile toggle button -->
      <el-col class="mobile-toggle" v-if="isMobile">
        <el-button icon="el-icon-menu" @click="drawer = true" plain />
      </el-col>
    </el-row>

    <!-- drawer for mobile -->
    <el-drawer :visible.sync="drawer" direction="ltr" size="200px">
      <el-menu @select="onSelect">
        <el-menu-item index="home">
          <router-link to="/">Home</router-link>
        </el-menu-item>
        <el-menu-item index="about">
          <router-link to="/about">About</router-link>
        </el-menu-item>
        <el-menu-item index="research">
          <router-link to="/research">Research</router-link>
        </el-menu-item>
        <el-menu-item index="contact">
          <router-link to="/contact">Contact</router-link>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </el-header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const drawer = ref(false)
const route = useRoute()
const router = useRouter()

const active = computed(() => route.name)
const isMobile = ref(window.innerWidth < 768)

const updateWidth = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth)
})

const onSelect = (index) => {
  drawer.value = false
  router.push({ name: index })
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--color-bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
}
.logo {
  height: 40px;
}
.nav-links.mobile {
  display: none;
}
.mobile-toggle {
  display: flex;
}
@media (min-width: 768px) {
  .mobile-toggle {
    display: none;
  }
  .nav-links.mobile {
    display: block;
  }
}
</style>