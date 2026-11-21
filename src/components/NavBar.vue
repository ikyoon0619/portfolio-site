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
  backdrop-filter: blur(6px); /* 뒤 내용이 살짝 흐리게 비침 */
  border-bottom: 1px solid var(--border);
}
.logo {
  font-weight: 700;
  color: var(--text);
}
nav a {
  margin-left: 16px;
  font-size: 14px;
  color: var(--text);
}
nav a:hover {
  color: var(--accent);
  text-decoration: none;
}

@media (max-width: 600px) {
  .nav {
    padding: 0 12px;
  }
  nav a {
    margin-left: 10px;
    font-size: 13px;
  }
}
</style>
