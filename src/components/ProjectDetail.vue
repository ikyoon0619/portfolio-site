<script setup>
import { ref, watch } from "vue";

// 부모(ProjectsSection)에게서 받는 값: 열 프로젝트와 상세 내용. 둘 다 null이면 닫힘
const props = defineProps({
  project: { type: Object, default: null },
  detail: { type: Object, default: null },
});
// 부모에게 "닫혔어요"를 알리는 이벤트
const emit = defineEmits(["close"]);

// <dialog> 태그를 직접 다루기 위한 참조 (Java로 치면 화면 요소를 가리키는 변수)
const dialog = ref(null);

// project 값이 바뀔 때마다 실행: 값이 생기면 열고, 없어지면 닫기
watch(
  () => props.project,
  (p) => {
    if (p)
      dialog.value.showModal(); // 브라우저 기본 모달: 뒤 화면을 막고 Esc로 닫힘
    else if (dialog.value.open) dialog.value.close();
  },
);

// 창 바깥(어두운 배경)을 클릭하면 닫기
// 클릭한 요소가 dialog 자신이면 = 안쪽 내용이 아니라 바깥 여백을 누른 것
function onBackdropClick(e) {
  if (e.target === dialog.value) dialog.value.close();
}
</script>

<template>
  <!-- close 이벤트: Esc, 닫기 버튼, 바깥 클릭 모두 여기로 모임 -->
  <dialog
    ref="dialog"
    class="dialog"
    @close="emit('close')"
    @click="onBackdropClick"
  >
    <article v-if="project && detail" class="body">
      <header class="head">
        <div>
          <p class="meta">{{ detail.period }} · {{ detail.role }}</p>
          <h2>{{ project.title }}</h2>
        </div>
        <button class="close" aria-label="닫기" @click="dialog.close()">
          ✕
        </button>
      </header>

      <img
        v-if="detail.image"
        :src="detail.image.src"
        :alt="detail.image.alt"
        class="shot"
        loading="lazy"
      />

      <section>
        <h3>문제</h3>
        <p>{{ detail.problem }}</p>
      </section>

      <section>
        <h3>어떻게 풀었나</h3>
        <ol class="decisions">
          <li v-for="(d, i) in detail.decisions" :key="d.title">
            <span class="num">{{ i + 1 }}</span>
            <div>
              <strong>{{ d.title }}</strong>
              <p>{{ d.body }}</p>
            </div>
          </li>
        </ol>
      </section>

      <section>
        <h3>결과</h3>
        <dl class="results">
          <div v-for="r in detail.results" :key="r.label" class="result">
            <dt>{{ r.label }}</dt>
            <dd>{{ r.value }}</dd>
          </div>
        </dl>
      </section>

      <section>
        <h3>한계와 다음 계획</h3>
        <ul class="next">
          <li v-for="n in detail.next" :key="n">{{ n }}</li>
        </ul>
      </section>

      <footer class="links">
        <a :href="project.github" target="_blank" rel="noopener" class="btn"
          >GitHub</a
        >
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener"
          class="btn primary"
          >데모 보기 ↗</a
        >
      </footer>
    </article>
  </dialog>
</template>

<style scoped>
.dialog {
  width: min(
    760px,
    calc(100% - 32px)
  ); /* 최대 760px, 폰에서는 양옆 16px 여백 */
  max-height: calc(100% - 48px);
  padding: 0;
  border: none;
  border-radius: 20px;
  background: var(--surface);
  color: var(--text);
  box-shadow: 0 24px 64px rgba(15, 23, 42, 0.25);
}
/* 모달 뒤 어두운 배경 */
.dialog::backdrop {
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(2px);
}
.body {
  padding: 32px;
  display: grid;
  gap: 28px;
}

.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}
.meta {
  margin: 0 0 4px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
}
h2 {
  margin: 0;
  font-size: 28px;
  letter-spacing: -0.02em;
}
.close {
  flex: none;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  color: var(--text-sub);
  font-size: 16px;
  cursor: pointer;
}
.close:hover {
  background: var(--bg-soft);
}

.shot {
  width: 100%;
  height: auto;
  border: 1px solid var(--border);
  border-radius: 12px;
}

h3 {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-sub);
}
section p {
  margin: 0;
}

.decisions {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
}
.decisions li {
  display: flex;
  gap: 12px;
}
.num {
  flex: none;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  font-size: 13px;
  font-weight: 700;
  background: var(--accent-soft);
  color: var(--accent);
}
.decisions strong {
  display: block;
  margin-bottom: 2px;
}
.decisions p {
  color: var(--text-sub);
  font-size: 15px;
}

.results {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.result {
  display: flex;
  flex-direction: column-reverse; /* 값을 위로 */
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--bg-soft);
  border: 1px solid var(--border);
}
.result dd {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.result dt {
  font-size: 13px;
  color: var(--text-sub);
}

.next {
  margin: 0;
  padding-left: 18px;
  color: var(--text-sub);
}
.next li {
  margin: 4px 0;
}

.links {
  display: flex;
  gap: 8px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

@media (max-width: 600px) {
  .body {
    padding: 22px 18px;
    gap: 22px;
  }
  h2 {
    font-size: 22px;
  }
  .results {
    grid-template-columns: 1fr;
  }
}
</style>
