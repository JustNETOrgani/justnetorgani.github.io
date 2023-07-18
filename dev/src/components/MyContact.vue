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
    <a href="https://twitter.com/Justnetonline" target="_blank" rel="noopener">@Justnetonline</a>
    <br>
    <v-icon class="icon" name="bi-facebook" />
    <a href="https://www.facebook.com/vbguy2013" target="_blank" rel="noopener">vbguy2013</a>
    <br>
    <v-icon class="icon" name="bi-linkedin" />
    <a href="https://www.linkedin.com/in/odoom-justice-justnet" target="_blank" rel="noopener">LinkedIn</a>
    <br>
    <v-icon class="icon" name="bi-instagram" />
    <a href="https://www.instagram.com/phpguy" target="_blank" rel="noopener">phpguy</a>
  </ContactItem>

  <ContactItem>
    <template #icon>
      <v-icon  class="icon" name="gi-archive-research"/>
    </template>
    <template #heading>Researcher Platforms</template>

    <img alt="ResearchGateImg" class="logoSchool" src="@/assets/researchGate.png" />
    <a href="https://www.researchgate.net/profile/Justice-Odoom-2" target="_blank" rel="noopener">ReseachGate</a>
    <br>
    <img alt="SCIProfilesImg" class="logoSchool" src="@/assets/sciProfiles.png" />
    <a href="https://sciprofiles.com/profile/justnetorgani" target="_blank" rel="noopener">SCI Profiles</a>
    <br> 
    <img alt="GoogleScholarImg" class="logoSchool" src="@/assets/googlescholar.png" />
    <a href="https://scholar.google.com/citations?hl=en&user=Lp7Zj5QAAAAJ" target="_blank" rel="noopener">Google Scholar</a>
    <br>
    <img alt="WOSImg" class="logoSchool" src="@/assets/wos.png" />
    <a href="https://www.webofscience.com/wos/author/record/AEE-5083-2022" target="_blank" rel="noopener">Web of Science</a>
  </ContactItem>

</template>

<style lang="scss" scoped>
  .icon {
    margin-top: 1rem;
  }

  img{
  width: 40px; 
  height: 40px;
  margin: 5px auto;
  border-radius: 50%;
}
</style>
