<script setup>
// 메뉴 목록. id는 각 섹션의 id와 같아야 클릭 시 그 위치로 이동함
const menus = [
  { id: "about", label: "소개" },
  { id: "projects", label: "프로젝트" },
  { id: "career", label: "경력" },
  { id: "skills", label: "기술" },
  { id: "contact", label: "연락처" },
];
</script>

<template>
  <header class="nav">
    <a href="#about" class="logo">윤인규</a>
    <nav>
      <a v-for="m in menus" :key="m.id" :href="`#${m.id}`">{{ m.label }}</a>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.92);
  border-bottom: 1px solid #eee;
}
.logo {
  font-weight: 700;
  color: #111;
  text-decoration: none;
}
nav a {
  margin-left: 14px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
}
</style>
