<script setup>
import ContactItem from './ContactItem.vue'
</script>

<template>
    <ContactItem>
    <template #icon>
        
    </template>
    <template #heading>University name loading...</template>
    <h4>Position: Lecturer</h4>
  </ContactItem>

  <ContactItem>
    <template #icon>
        <img alt="5GECImg" class="logoSchool" src="@/assets/5gec.png" />
    </template>
    <template #heading>Ghana Armed Forces Education Unit HQ (5 Garrison), Burma Camp-Accra</template>
    <h4>Position: ICT facilitator</h4>
  </ContactItem>

  <ContactItem>
    <template #icon>
        <img alt="GESImg" class="logoSchool" src="@/assets/ges.png" />
    </template>
    <template #heading>Ghana Education Service (Kwahu West Municipality)</template>
    <h4>Position: ICT/Mathematics/Science facilitator</h4>
  </ContactItem>

</template>

<style lang="scss" scoped>
  .icon {
    margin-top: 1rem;
  }

  img{
  width: 40px; 
  height: 40px;
  display: block;
  margin: auto;
  border-radius: 50%;
}
</style>
