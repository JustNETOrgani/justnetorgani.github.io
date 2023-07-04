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
      <v-icon name="fa-user-circle" />Biography
      <p>I received my BSc and MSE degrees in Computer Science from Data Link University, Tema, Ghana and Southwest University of Science and Technology, Mianyang-Sichuan, China, in 2015 and 2020 respectively. I obtained my PhD in 2023 from Southwest University of Science and Technology, China. 
          I am a certified Elsevier and Publons academy peer reviewer. My research interests include information security, blockchain technology, ring signatures and privacy-preservation in the sharing of Electronic Health Records (EHRs). 
          I am a member of IEEE and IEEE Computer Society. 
      </p>
    </div>
    
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

.myBio{
  margin-top: 1rem;
}
</style>