<script setup>
const tableData = [
  {
    award: 'Outstanding international students’ awards (Second prize)',
    institution: 'Southwest University of Science and Technology, Mianyang, Sichuan-China',
    year: '2022',
  },
  {
    award: 'Publication award at school 70th anniversary celebration',
    institution: 'Southwest University of Science and Technology, Mianyang, Sichuan-China',
    year: '2022',
  },
  {
    award: 'Innovation and entrepreneurship for digital economy',
    institution: 'Tsinghua University, Beijing, China',
    year: '2021'
  }
]
</script>

<template>
    <main class="awards-page">
        <h2>Awards received</h2>
        <div class="eduDiv">
            <el-table :data="tableData" stripe style="width: 80%">
                <el-table-column prop="award" label="Award" width="310" />
                <el-table-column prop="institution" label="Institution" width="340" />
                <el-table-column prop="year" label="Year" />
            </el-table>
        </div>
    </main>
</template>

<style lang="scss" scoped>
h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}
.eduDiv {
    align-content: center;
    margin-bottom: 2rem;
}
</style>
  
