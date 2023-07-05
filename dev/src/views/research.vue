<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'

import { onMounted } from 'vue'

onMounted(() => {
    ElMessageBox.alert('Not all publications are open access', 'Heads-up', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
})
</script>

<template>
    <main class="research-page">
        <h2>List of Publications</h2>
        <h3>2023</h3>
            <ul>  
                <li>  
                    Privacy preservation for Transaction Initiators: A Stronger Key Image Ring Signature and Smart Contract-based Framework
                    <br>
                    Computer Science, DOI: 10.7494/csci.2023.24.1.4643
                    <br> 
                    <a href="https://journals.agh.edu.pl/csci/article/download/4643/2883/25817" target="_blank" rel="noopener">Paper</a>  
                </li>
                <li>  
                    Revamped Dual-key Stealth Address Protocol for IoT using Encryption and Decentralized Storage
                    <br>
                    Int. Journal of Computer Network and Information Security, DOI: 10.5815/ijcnis.2023.01.02
                    <br> 
                    <a href="https://j.mecs-press.net/ijcnis/ijcnis-v15-n1/IJCNIS-V15-N1-2.pdf" target="_blank" rel="noopener">Paper</a>  
                </li>
                <li>  
                    Linked or Unlinked: A Systematic Review of Linkable Ring Signature Schemes
                    <br>
                    Journal of Systems Architecture, Elsevier, DOI: 10.1016/j.sysarc.2022.102786
                    <br> 
                    <a href="https://www.sciencedirect.com/science/article/abs/pii/S1383762122002715" target="_blank" rel="noopener">Paper</a>  
                </li>
                <li>  
                    A Privacy-aware Electronic Medical Record Sharing Scheme based on Blockchain and Identity-based Cryptography
                    <br>
                    ICBCTIS 2023, DOI: ...
                    <br> 
                    <a href="https://www.sciencedirect.com/science/article/pii/S1110866523000324" target="_blank" rel="noopener">Paper</a>  
                </li>
                <li>  
                    An Optimal Defect Recognition Security-Based Terahertz Low Resolution Image System Using Deep Learning
                    <br>
                    , Egyptian Informatics Journal, Elsevier, DOI: 10.1016/j.eij.2023.05.009
                    <br> 
                    <a href="https://www.sciencedirect.com/science/article/pii/S1110866523000324" target="_blank" rel="noopener">Paper</a>  
                </li>
            </ul> 
        <br>    
        <h3>2022</h3>
            <ul> 
                <li>  
                    Stateless Forward-secure Key-insulated Linkable Ring Signature in ID-based Setting
                    <br>
                    Journal of Systems Architecture, Elsevier, DOI: 10.1016/j.sysarc.2022.102600
                    <br> 
                    <a href="https://www.sciencedirect.com/science/article/pii/S1383762122001370" target="_blank" rel="noopener">Paper</a>  
                </li>
                <li>  
                    COVID-19 and Future Pandemics: A Blockchain-based Privacy-aware Secure Borderless Travel Solution from Electronic Health Records
                    <br>
                    Software: Practice & Experience, Wiley, DOI: 10.1002/spe.3126
                    <br> 
                    <a href="https://onlinelibrary.wiley.com/doi/10.1002/spe.3126" target="_blank" rel="noopener">Paper</a>  
                </li>
                <li>  
                    JPBlock: Augmenting Current Journal and Paper Publication Processes using Blockchain and Smart Contract
                    <br>
                    Int. Journal of Information & Computer Security (IJICS), Inderscience, DOI: 10.1504/IJICS.2022.10047376
                    <br> 
                    <a href="https://www.researchgate.net/publication/360452589_JPBlock_Augmenting_Security_of_Current_Journal_and_Paper_Publication_Processes_using_Blockchain_and_Smart_Contract" target="_blank" rel="noopener">Paper</a>  
                </li>
                <li>  
                    Hidden Dangerous Object Recognition in Terahertz Images Using Deep Learning Methods
                    <br>
                    Applied Sciences, MDPI, DOI: 10.1504/IJICS.2022.10047376
                    <br> 
                    <a href="https://www.mdpi.com/2076-3417/12/15/7354" target="_blank" rel="noopener">Paper</a>  
                </li>
                <li>  
                    Deploying Wavelet Transforms in Enhancing Terahertz Active Security Images
                    <br>
                    ICIIA 2021, DOI: 10.1007/978-3-030-95630-1_9
                    <br> 
                    <a href="https://link.springer.com/chapter/10.1007/978-3-030-95630-1_9" target="_blank" rel="noopener">Paper</a>  
                </li>
                <li>  
                    Comparative Analysis of AlexNet, Resnet-50, and Inception-V3 Models on Masked Face Recognition
                    <br>
                    IEEE World AI IoT Congress_AIIoT 2022, DOI: 10.1109/AIIoT54504.2022.9817327
                    <br> 
                    <a href="https://ieeexplore.ieee.org/document/9817327/" target="_blank" rel="noopener">Paper</a>  
                </li>
            </ul>
        <br>
        <h3>2021</h3>
            <ul>
                <li>  
                    Global Picture of Healthcare: Challenges and Solutions (COVID-19 Case Study)
                    <br>
                    Int. Journal of Magt and Applied Science
                    <br> 
                    <a href="https://www.researchgate.net/publication/353934905_THE_GLOBAL_PICTURE_OF_FUTURE_HEALTHCARE_CHALLENGES_AND_SOLUTIONS_COVID-19_CASE_STUDY" target="_blank" rel="noopener">Paper</a>  
                </li>
            </ul>
        <br>        
        <h3>2020</h3>
            <ul>
                <li>  
                    A Privacy-preserving Covid-19 Updatable Test Result and Vaccination Provenance based on Blockchain and Smart contract
                    <br>
                    ICMRSISIIT, DOI: 10.1109/ICMRSISIIT46373.2020.9405872
                    <br> 
                    <a href="https://ieeexplore.ieee.org/document/9405872" target="_blank" rel="noopener">Paper</a>  
                </li>
            </ul> 
    </main>
</template>

<style lang="scss" scoped>
h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}
</style>