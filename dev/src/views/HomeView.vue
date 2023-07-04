<script setup>
</script>

<template>
  <main class="home-page">
    <div class="imagediv">
      <img alt="JusticeImg" class="mypic" src="@/assets/gitpagepic.jpg" />
    </div>
    <h2>Justice Odoom (PhD, MSE, BSc, BEd, Dip)</h2>
    <br>
    <div class="myBio">
      <span class="material-icons">person</span>
			<span class="text">Biography</span>
      <p>I received my BSc and MSE degrees in Computer Science from Data Link University, Tema, Ghana and Southwest University of Science and Technology, Mianyang-Sichuan, China, in 2015 and 2020 respectively. I obtained my PhD in 2023 from Southwest University of Science and Technology, China. 
          I am a certified Elsevier and Publons academy peer reviewer. My research interests include information security, blockchain technology, ring signatures and privacy-preservation in the sharing of Electronic Health Records (EHRs). 
          I am a member of IEEE and IEEE Computer Society. 
      </p>
    </div>
    <el-row>
      <el-col :span="12"><div class="grid-content ep-bg-purple" />
        <span class="material-icons">thumb_up_alt</span>
			  <span class="text">HOBBIES</span>
        <br>
        <el-icon class="icon"><Reading /></el-icon>Reading tech journals
        <br>
        <v-icon class="icon" name="gi-grand-piano" />Playing the organ
        <br>
        <el-icon class="icon"><Film /></el-icon>Watching movies
      </el-col>
      <el-col :span="8"><div class="grid-content ep-bg-purple-light" />
        <span class="material-icons">translate</span>
			  <span class="text">LANGUAGES</span>
        <br>
        <el-tag>English</el-tag>
        <el-tag class="ml-2" type="info">Chinese</el-tag>
        <br>
        <el-tag class="ml-2" type="warning">French</el-tag>
        <el-tag>Twi (GH lang.)</el-tag>
      </el-col>
    </el-row>
  </main>
</template>

<style lang="scss" scoped>
.imagediv {
  width: 100%;
  margin-top: -1rem;
}
img{
  width: 250px; 
  height: 250px;
  display: block;
  margin: auto;
  border-radius: 50%;
  border: 7px solid cadetblue;
}

h2 {
  margin-top: 1rem;
  text-align: center;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.myBio{
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.icon {
    margin-top: 1rem;
  }

</style>