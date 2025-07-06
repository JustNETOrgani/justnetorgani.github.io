<script setup>
import { ref } from 'vue'
const graduateCourses = ref('1')
const undergradCourses = ref('1')
</script>

<template>
    <main class="courses-page">
        <h2>Courses Lectured</h2>
        <div class="eduDiv">
            <h4>Graduate (Master-level)</h4>
            <el-collapse v-model="graduateCourses" accordion>
                <el-collapse-item title="Mathematical Foundation of Computer Science (计算机科学数学基础)" name="1">
                    <div>
                    This course seeks to introduce students to the fundamental mathematical properties of computer software, hardware, and certain applications thereof and by so doing guide students to determine what can and cannot be computed, how quickly, with how much memory, and on which type of computational model. In essence, it exposes students to the three traditionally central areas of the theory of computation: automata, computability, and complexity. This course therefore provides students with a solid idea of theoretical computer science and provides students with connections to engineering practice thereby bridging the gap between theory and practice. This is accomplished through the utilization of conceptual tools that practitioners in the field of engineering, more specifically computer engineering employ. Typical areas covered include finite automata, grammars and regular expression as well as NP-completeness. The course presents a mathematical treatment of theoretical computer science, designed around theorems and proofs.
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Cloud Computing and Computer Architecture (云计算与计算机系统结构)" name="2">
                    <div>
                    This course seeks to introduce students to broad and in-depth technical base through various concepts in cloud computing/architecture and computer architecture, cloud productivity tools, virtualization, cloud computing design and implementation and programming models, service forms [Software as a Service (SaaS), Platform as a Service (PaaS) and Infrastructure as a Service (IaaS)] and their delivery models as well as cloud computing security with inspirations drawn from various cloud service providers (CSPs). Focus would also be placed on cloud computing platform management technology. The course will also expose students to concepts and trends in advanced computer architecture including pipelining, parallelism, technical approach to improving parallelism, programming paradigms, instruction-level parallel computing, thread level computing, caching, locality, abstraction, etc. to grasp a solid foundation in the domain of computer architecture and future capabilities driving the computing paradigm.
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Software Quality Assurance Technology (软件质量保证技术)" name="3">
                    <div>
                    This course seeks to introduce the concept of quality and software quality, the ideas and content of software quality engineering system, the methods and techniques of software quality control and management, including software quality standards, configuration management, quality measurement and reliability evaluation; The course will entail actual software quality work, discussion of software quality activities at all stages such as requirements analysis, software design, programming and testing, software release and maintenance, including the organization and training of quality personnel, quality planning, effective application of design patterns, and the best implementation methods of programming.
                    </div>
                </el-collapse-item>
            </el-collapse>

            <h4>Undergraduate</h4>
            <el-collapse v-model="undergradCourses" accordion>
                <el-collapse-item title="Computer Network and Programming (计算机网络与程序设计)" name="1">
                    <div>
                    Computer networks have emerged as the creature of two technologies: Computer and Digital Communication, and their advancement is tightly coupled with the advances in these two areas. This course therefore seeks to introduce students to Computer networking and to some extent network programming to lay a strong foundation for advanced, specialized or related courses. The course will provide students with a broad overview of computer networking, examining computer networks from local area networks (LANs) to the Internet, related programming concepts and hand-on practice. Essentially, the course will encompass such areas as the concept of Computer networks and digital communications, network models with special reference to the Application, Transport and Network layers. Other key areas including LANs, Socket programming, the concept of packets and inspection tools, Intranets, Extranets & Virtual Private Networks (VPNs), Routing algorithms, the Internet, Wireless and Mobile networks as well as Network security. Given the rapid technological advancements in both the Computing and digital communication domains, the course will also delve into emerging technologies including Artificial Intelligence in Networking, 5/6G technologies, IoT connected devices, Wi-Fi 6, Intent-based Networking (IBN, SD-WAN, Blockchain technology, etc.).
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Programming (C) [程序设计(C)]" name="2">
                    <div>
                    This course seeks to provide students with a solid introduction to programming in C. The course will entail a general description of the C language and its usage, compilers, and installation procedures as well as various standards. The course will also cover other areas including variables, memory, and operators, selection structures, repetition structures, how to define and call functions, pointers and arrays, structures, strings and advanced I/O, multiple file programs, dynamically allocated memory, and linked lists, and an introduction to searching and sorting and would also introduce students to the debugging of C programs.
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Probability and Statistics (概率论与数理统计)" name="3">
                    <div>
                    Given that probability and statistics is an essential tool for the modern computer scientist, this course seeks to provide students with an elementary introduction to probability and statistics with varied applications. Essentially, the course covers the ideas in probability and statistics that every Computer science undergraduate student should discover, whatever their chosen specialty or career path. Specifically, the course covers several aspects of probability and statistics including describing datasets, random variables, probability distributions, Bayesian inference, hypothesis testing, confidence intervals, and linear regression. To help learners appreciate the various concepts, real-world application scenarios or problems would be employed. Enough topics and fundamental concepts have therefore been captured in the course with the intent to get students started and to realize that it is worth knowing more.
                    </div>
                </el-collapse-item>
                <el-collapse-item title="Computer Science (大学计算机)" name="4">
                    <div>
                    This course seeks to introduce students to fundamental concepts in the domain of computer science and fundamentals of programming using varied programming languages including C++, python and Java by writing, debugging, and analyzing programs. It introduces students to software, hardware and algorithms. Problem sets inspired by real-world domains would be tackled through decomposition. The course would also capture algorithms for sorting and searching and introduce students to data structures and recursion. The course is designed to help students with no prior exposure to or experience in computer science or programming so as to learn to think computationally and write programs to tackle useful problems. To this end, the course presents a brief introduction to many topics to enable students have an idea of what is possible when they need to think about how to use computation to accomplish some goal later in their undergraduate course or future career. The course will essentially focus on how to design, develop, reason about, and test programs. Topics that would be covered in this course include using algorithms and data structures when designing programs, using abstraction to manage program complexity, programming style, documentation, using libraries, designing programs using both object-oriented programming and functional programming, designing tests to ensure programs operate correctly, computer security, and debugging programs when they are not working. All programming assignments in this course introduce students to applications that are relevant to the field of computer science.
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </main>
</template>

<style lang="scss" scoped>
h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}
h4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.eduDiv {
    align-content: center;
    margin-bottom: 2rem;
}
</style>
  
