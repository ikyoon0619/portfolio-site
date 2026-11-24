<script setup>
// 메뉴 목록. id는 각 섹션의 id와 같아야 클릭 시 그 위치로 이동함
// "소개"는 로고 클릭과 겹쳐서 뺌
const menus = [
  { id: "skills", label: "기술·경험" },
  { id: "projects", label: "프로젝트" },
  { id: "career", label: "경력" },
  { id: "contact", label: "연락처" },
];
</script>

<template>
  <header class="nav">
    <!-- inner: 메뉴 내용을 본문과 같은 폭으로 가운데 정렬 -->
    <div class="inner">
      <a href="#about" class="logo">윤인규</a>
      <nav>
        <a v-for="m in menus" :key="m.id" :href="`#${m.id}`">{{ m.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed; /* 스크롤해도 화면 위에 고정 */
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; /* 다른 요소보다 위에 */
  /* 배경색을 80%만 칠하고 나머지는 투명 = 반투명 */
  background: color-mix(in srgb, var(--bg) 80%, transparent);
  /* 뒤 내용을 흐리게 + 색을 진하게 = 유리 느낌 */
  backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--border);
}
.inner {
  max-width: 1040px; /* .section과 같은 폭 */
  margin: 0 auto;
  height: 60px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 로고는 왼쪽, 메뉴는 오른쪽 */
}
.logo {
  font-weight: 800;
  font-size: 18px;
  color: var(--text);
  letter-spacing: -0.02em;
}
nav {
  display: flex;
  gap: 4px;
}
nav a {
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-sub);
  transition:
    background 0.15s,
    color 0.15s;
}
nav a:hover {
  background: var(--bg-soft);
  color: var(--text);
}

@media (max-width: 600px) {
  .inner {
    padding: 0 12px;
  }
  nav a {
    padding: 6px 8px;
    font-size: 13px;
  }
}
</style>
