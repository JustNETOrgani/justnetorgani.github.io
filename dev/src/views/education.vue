<script setup>
const tableData = [
  {
    degree: 'Doctor of Philosophy (PhD)',
    year: '2023',
    institution: 'Southwest University of Science and Technology, Mianyang, Sichuan-China',
  },
  {
    degree: 'Master of Science in Engineering (MSE)',
    year: '2020',
    institution: 'Southwest University of Science and Technology, Mianyang, Sichuan-China',
  },
  {
    degree: 'Bachelor of Science (BSc)',
    year: '2015',
    institution: 'Datalink University, Tema-Ghana',
  },
  {
    degree: 'CCNA Academy Certificate',
    year: '2013',
    institution: 'Ghana-India Kofi Annan Centre of Excellence in ICT',
  },
  {
    degree: 'Bachelor of Education (BEd)',
    year: '2011',
    institution: 'University of Education, Winneba-Ghana',
  },
  {
    degree: 'Diploma (Dip)',
    year: '2007',
    institution: 'Abetifi Presbyterian College of Education',
  },
  {
    degree: 'SSSCE',
    year: '2002',
    institution: 'Boa-Amponsem Senior High School',
  }
]
</script>

<template>
    <main class="education-page">
        <h2>The educational journey</h2>
        <div class="eduDiv">
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="degree" label="Degree/Certificate" width="230" />
                <el-table-column prop="year" label="Year obtained" width="210" />
                <el-table-column prop="institution" label="Institution" />
            </el-table>
        </div>
        <el-row>
            <el-col :span="4"><div class="grid-content ep-bg-purple" /><img alt="SwustImg" class="logoSchool" src="@/assets/swust.png" /></el-col>
            <el-col :span="4"><div class="grid-content ep-bg-purple-light" /><img alt="DatalinkImg" class="logoSchool" src="@/assets/datalink.png" /></el-col>
            <el-col :span="4"><div class="grid-content ep-bg-purple" /><img alt="AITIKACEImg" class="logoSchool" src="@/assets/gikace.png" /></el-col>
            <el-col :span="4"><div class="grid-content ep-bg-purple-light" /><img alt="UEWImg" class="logoSchool" src="@/assets/uew.png" /></el-col>
            <el-col :span="4"><div class="grid-content ep-bg-purple" /><img alt="ABETICOImg" class="logoSchool" src="@/assets/abetico.png" /></el-col>
            <el-col :span="4"><div class="grid-content ep-bg-purple-light" /><img alt="BOASSImg" class="logoSchool" src="@/assets/boass.png" /></el-col>
        </el-row>
    </main>
</template>

<style lang="scss" scoped>
.eduDiv {
    align-content: center;
    margin-bottom: 2rem;
}
h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

img{
  width: 100px; 
  height: 100px;
  display: block;
  margin: auto;
  border-radius: 50%;
  border: 7px solid rgb(164, 177, 196);
}

</style>