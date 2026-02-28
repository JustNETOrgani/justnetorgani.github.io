<script setup>
import Sidebar from './components/Sidebar.vue'
import { useDark, useToggle  } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark); // still available if needed elsewhere

import { ref, watchEffect } from 'vue'
const sidebar = ref(null)

// sync dark class on <html> for global styles (e.g. background)
watchEffect(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})

// debug: log whenever dark mode value changes
watchEffect(() => {
  console.log('isDark value changed:', isDark.value)
})

// helper to call sidebar toggle (exposed via defineExpose)
function toggleSidebar() {
  if (sidebar.value && sidebar.value.ToggleMenu) {
    sidebar.value.ToggleMenu()
  }
}
</script>

<template>
	<div class="app" :class="{ dark: isDark }">
		<!-- mobile hamburger, visible on small screens -->
		<button class="mobile-hamburger" @click="toggleSidebar">☰</button>
		<!-- Sidebar -->
		<Sidebar ref="sidebar" />
		<div class="userSwitchDiv" >
			<el-switch 
				v-model="isDark" 
				active-text="Light" 
				inactive-text="Dark" 
			/>
		</div>
		<!-- Content -->
		<router-view />
	</div>
</template>

<style lang="scss">
:root {
  // Color palette
  --vt-c-white: #ffffff;
  --vt-c-white-soft: #f8f8f8;
  --vt-c-white-mute: #f2f2f2;

  --vt-c-black: #181818;
  --vt-c-black-soft: #222222;
  --vt-c-black-mute: #282828;

  --vt-c-indigo: #2c3e50;

  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
  --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);
  --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);
  --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);

  --vt-c-text-light-1: var(--vt-c-indigo);
  --vt-c-text-light-2: rgba(60, 60, 60, 0.66);
  --vt-c-text-dark-1: var(--vt-c-white);
  --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);

  // Color variables for the project
  --primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
  
  --color-background: var(--vt-c-white);
  --color-background-soft: var(--vt-c-white-soft);
  --color-background-mute: var(--vt-c-white-mute);

  --color-border: var(--vt-c-divider-light-2);
  --color-border-hover: var(--vt-c-divider-light-1);

  --color-heading: var(--vt-c-text-light-1);
  --color-text: var(--vt-c-text-light-1);

  --section-gap: 160px;
}

/* move shared reset/typography to global.css */

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}

.userSwitchDiv{
	position: absolute;;
	right: 1rem;
}

/* hamburger toggle for sidebar on mobile */
.mobile-hamburger {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1100;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text, #333);
  display: none;
}
@media (max-width: 768px) {
  .mobile-hamburger {
    display: block;
  }
}
</style>