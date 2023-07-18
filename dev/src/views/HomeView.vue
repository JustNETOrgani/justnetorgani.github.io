<script lang="ts" setup>
import { ref } from 'vue'

const percentage = ref(20)
const customColor = ref('#409eff')
const customColors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const customColorMethod = (percentage: number) => {
  if (percentage > 75) {
    return '#409eff'
  }
  if (percentage < 75 && percentage > 60 ) {
    return '#909399'
  }
  if (percentage < 60) {
    return '#e6a23c'
  }
  if (percentage < 30) {
    return '#909399'
  }
  return '#409eff'
}
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
      <el-col :span="10"><div class="grid-content ep-bg-purple-light" />
        <span class="material-icons">translate</span>
			  <span class="text">LANGUAGES</span>
        <br>
        <div class="progressDiv">
          <el-progress type="circle" :percentage="95" :width="88" :color="customColorMethod">
            <span class="percentage-label">English</span>
          </el-progress>
          <el-progress type="circle" :percentage="60" :width="88" :color="customColorMethod">
              <span class="percentage-label">Chinese</span>
          </el-progress>
          <el-progress type="circle" :percentage="40" :width="88" :color="customColorMethod">
              <span class="percentage-label">French</span>
          </el-progress>
          <!-- <el-progress type="circle" :percentage="100" :width="88" :color="customColorMethod">
              <span class="percentage-label">Twi (GH lang.)</span>
          </el-progress> -->
        </div>
      </el-col>
    </el-row>
    <div class="techStack">
      <p class="tecStackText">TECHNOLOGY STACK</p>
    <el-row class="smallGap">
      <div class="holder"><p class="tecStackText">Programming languages</p></div>
      <div class="holder"><p class="tecStackText">Databases</p></div>
    </el-row>
    <el-row class="smallGap">
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="90"
          status="success"
        >
          <span>Vue.js</span>
        </el-progress>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="90"
          status="success"
        >
          <span>Python/Django</span>
        </el-progress>
      </el-col>

      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="90"
          status="success"
        >
          <span>MySQL</span>
        </el-progress>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="90"
          status="success"
        >
          <span>MongoDB</span>
        </el-progress>
      </el-col>
    </el-row>
    <el-row class="smallGap">
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="70"
          :color="customColorMethod"
        >
          <span>React.js</span>
        </el-progress>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="85"
          :color="customColorMethod"
        >
          <span>PHP</span>
        </el-progress>
      </el-col>

      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="70"
          :color="customColorMethod"
        >
          <span>BigChainDB</span>
        </el-progress>
      </el-col>
    </el-row>
    <el-row class="smallGap">
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="95"
          status="success"
        >
          <span>Solidity</span>
        </el-progress>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="70"
          :color="customColorMethod"
        >
          <span>Java</span>
        </el-progress>
      </el-col>
    </el-row>
    <el-row class="smallGap">
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="70"
          :color="customColorMethod"
        >
          <span>C++</span>
        </el-progress>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple" />
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="70"
          :color="customColorMethod"
        >
          <span>Matlab</span>
        </el-progress>
      </el-col>
    </el-row>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.imagediv {
  width: 100%;
  margin-top: -1rem;
}
img{
  width: 210px; 
  height: 210px;
  display: block;
  margin: auto;
  border-radius: 50%;
  border: 7px solid rgb(121, 139, 139);
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

.progressDiv .el-progress--circle {
  margin-right: 15px;
}

.holder{
  width: 50%;
}
.techStack{
  margin-top: 1rem;
}

.tecStackText {
  text-align: center;
}

.smallGap{
  margin-top: 4px;
}
</style>