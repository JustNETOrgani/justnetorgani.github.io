<script setup>
import AsideItem from './AsideItem.vue'
// import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <AsideItem>
    <template #icon>
      <el-icon><InfoFilled /></el-icon>
    </template>
    <template #heading>INFO</template>

    <el-icon><Message /></el-icon>justnetonline@outlook.com
    <br>
    <v-icon name="bi-globe" animation="pulse"/>
    <a href="https://justnetorgani.github.io/" target="_blank" rel="noopener">https://justnetorgani.github.io/</a>
    <br>
    <v-icon name="fa-birthday-cake" animation="flash"/>
    <a href="https://justnetorgani.github.io/" target="_blank" rel="noopener">Birth date loading</a>
    <br>
    <el-icon><Location /></el-icon>
    <a href="https://justnetorgani.github.io/" target="_blank" rel="noopener">P.R.China</a>
  </AsideItem>

  <AsideItem>
    <template #icon>
      <v-icon name="md-socialdistance-round" />
    </template>
    <template #heading>SOCIAL PRESENCE</template>

    <v-icon name="bi-twitter" />
    <a href="https://twitter.com/login?lang=en" target="_blank" rel="noopener">Twitter</a>
    <br>
    <v-icon name="bi-facebook" />
    <a href="https://www.facebook.com/login/" target="_blank" rel="noopener">Facebook</a>
    <br>
    <v-icon name="bi-linkedin" />
    <a href="https://www.linkedin.com/login" target="_blank" rel="noopener">LinkedIn</a>
    <br>
    <v-icon name="bi-instagram" />
    <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener">Instagram</a>
  </AsideItem>

  <AsideItem>
    <template #icon>
      <v-icon name="co-happy" />
    </template>
    <template #heading>HOBBIES</template>
      <el-icon><Reading /></el-icon>Reading tech journals
      <br>
      <v-icon name="gi-grand-piano" />Playing the organ
      <br>
      <el-icon><Film /></el-icon>Watching movies
  </AsideItem>

  <AsideItem>
    <template #icon>
      <v-icon name="co-language" />
    </template>
    <template #heading>LANGUAGES</template>
      <el-tag>English</el-tag>
      <el-tag class="ml-2" type="info">Chinese</el-tag>
      <br>
      <el-tag class="ml-2" type="warning">French</el-tag>
      <el-tag>Twi (GH lang.)</el-tag>
  </AsideItem>
</template>
