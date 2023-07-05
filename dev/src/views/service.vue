<script setup>
import MyWork from '../components/MyWork.vue'
</script>

<template>
    <main class="service-page">
        <h2>Work</h2>
            <MyWork />
        <h2>Service</h2>
        <h4>Journal reviews</h4>
            <ul>
                <li>Computer Science</li>
            </ul>
        <br>
        <h4>Conference reviews</h4>
            <ul>
                <li>International Conference on Computer Application and Information Security (ICCAIS 2023)</li>
                <li>International Conference on Privacy, Security & Trust (PST 2022)</li>
            </ul> 
            <br>
        <h2>Professional Associations</h2>
            <ul>
                <li>Institute of Electrical and Electronics Engineers (IEEE)</li>
                <li>IEEE Computer Society</li>
            </ul>   
    </main>
</template>

<style lang="scss" scoped>
h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

li {
    margin-top: 1rem;
    font-style: italic;
}
</style>
  