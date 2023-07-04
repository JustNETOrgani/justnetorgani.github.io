<script setup>
import ContactItem from './ContactItem.vue'
</script>

<template>
  <ContactItem>
    <template #icon>
      <el-icon><InfoFilled /></el-icon>
    </template>
    <template #heading>INFO</template>

    <el-icon  class="icon"><Message /></el-icon>justnetonline@outlook.com
    <br>
    <v-icon  class="icon" name="bi-globe" animation="pulse"/>
    <a href="https://justnetorgani.github.io/" target="_blank" rel="noopener">https://justnetorgani.github.io/</a>
    <br>
    <v-icon class="icon" name="fa-birthday-cake" animation="flash"/>
    <a href="https://justnetorgani.github.io/" target="_blank" rel="noopener">Birth date loading</a>
    <br>
    <el-icon class="icon"><Location /></el-icon>
    <a href="https://justnetorgani.github.io/" target="_blank" rel="noopener">P.R.China</a>
  </ContactItem>

  <ContactItem>
    <template #icon>
      <v-icon name="md-socialdistance-round" />
    </template>
    <template #heading>SOCIAL PRESENCE</template>

    <v-icon class="icon" name="bi-twitter" />
    <a href="https://twitter.com/login?lang=en" target="_blank" rel="noopener">Twitter</a>
    <br>
    <v-icon class="icon" name="bi-facebook" />
    <a href="https://www.facebook.com/login/" target="_blank" rel="noopener">Facebook</a>
    <br>
    <v-icon class="icon" name="bi-linkedin" />
    <a href="https://www.linkedin.com/login" target="_blank" rel="noopener">LinkedIn</a>
    <br>
    <v-icon class="icon" name="bi-instagram" />
    <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener">Instagram</a>
  </ContactItem>

</template>

<style lang="scss" scoped>
  .icon {
    margin-top: 1rem;
  }
</style>
