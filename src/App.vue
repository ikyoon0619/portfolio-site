<script setup>
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import CareerSection from "./components/CareerSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import CertificationsSection from "./components/CertificationsSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <SkillsSection />
    <ProjectsSection />
    <CareerSection />
    <CertificationsSection />
    <ContactSection />
  </main>
</template>
