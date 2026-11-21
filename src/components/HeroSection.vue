<script setup>
import { profile } from "../data/profile";
</script>

<template>
  <section id="about" class="hero">
    <div class="inner">
      <!-- 위쪽: 왼쪽 글 + 오른쪽 사진 -->
      <div class="top">
        <div class="text">
          <!-- 초록 점 + 상태 문구 -->
          <span class="badge"
            ><span class="dot"></span>새로운 기회를 찾고 있어요</span
          >

          <h1>
            안녕하세요, <br />
            <span class="grad">{{ profile.title }}</span
            ><br />
            {{ profile.name }}입니다.
          </h1>
          <p class="summary">{{ profile.summary }}</p>

          <div class="cta">
            <a href="#projects" class="btn primary">프로젝트 보기</a>
            <a :href="profile.github" target="_blank" rel="noopener" class="btn"
              >GitHub</a
            >
          </div>
        </div>

        <!-- 프로필 사진: profile.photo가 비어 있으면 안 보임 -->
        <figure v-if="profile.photo" class="photo">
          <img
            :src="profile.photo"
            :alt="`${profile.name} 프로필 사진`"
            width="640"
            height="800"
          />
        </figure>
      </div>

      <!-- 숫자 카드 4개 -->
      <dl class="stats">
        <div v-for="s in profile.stats" :key="s.label" class="stat">
          <dt>{{ s.label }}</dt>
          <dd>{{ s.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hero {
  /* 오른쪽 위에 연한 보라빛이 번지는 배경 (원형 그라데이션) */
  background:
    radial-gradient(60% 60% at 85% 10%, var(--accent-soft) 0%, transparent 70%),
    var(--bg);
  border-bottom: 1px solid var(--border);
}
.inner {
  max-width: 1040px;
  margin: 0 auto;
  padding: 136px 24px 72px; /* 위 = 고정 메뉴(60px) + 여백 */
}

/* 글(남은 폭) + 사진(320px) 2칸 */
.top {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 48px;
  align-items: center; /* 글과 사진을 세로 가운데 맞춤 */
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text-sub);
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
}

h1 {
  font-size: 52px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  margin: 20px 0;
}
.grad {
  background: linear-gradient(90deg, var(--accent), #0ea5e9);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.summary {
  max-width: 600px;
  font-size: 18px;
  color: var(--text-sub);
  margin: 0 0 28px;
}
.cta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* 사진 */
.photo {
  position: relative;
  margin: 0;
}
/* 사진 뒤에 살짝 비껴 놓은 그라데이션 판 (장식) */
.photo::before {
  content: "";
  position: absolute;
  inset: 16px -16px -16px 16px; /* 오른쪽 아래로 16px 밀린 사각형 */
  border-radius: 24px;
  background: linear-gradient(135deg, var(--accent), #0ea5e9);
  opacity: 0.18;
}
.photo img {
  position: relative; /* ::before 판보다 위에 */
  display: block;
  width: 100%;
  height: auto; /* width/height 속성 비율(4:5) 유지 */
  border-radius: 24px;
  box-shadow: var(--shadow-hover);
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin: 56px 0 0;
}
.stat {
  display: flex;
  flex-direction: column-reverse;
  padding: 18px 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.stat dd {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
}
.stat dt {
  font-size: 13px;
  color: var(--text-sub);
}

/* 중간 폭 (900px 이하): 사진을 조금 작게 */
@media (max-width: 900px) {
  .top {
    grid-template-columns: 1fr 240px;
    gap: 32px;
  }
  h1 {
    font-size: 42px;
  }
}

/* 폰 (760px 이하): 사진을 맨 위 동그란 얼굴 사진으로 */
@media (max-width: 760px) {
  .inner {
    padding: 100px 16px 48px;
  }
  .top {
    grid-template-columns: 1fr; /* 1칸 */
    gap: 24px;
  }
  .photo {
    order: -1; /* 글보다 위로 */
    width: 112px;
  }
  .photo::before {
    display: none;
  }
  .photo img {
    aspect-ratio: 1; /* 정사각형으로 */
    object-fit: cover; /* 비율 유지하며 꽉 채우고 넘치는 부분 자르기 */
    object-position: 50% 15%; /* 얼굴이 있는 위쪽 기준으로 자르기 */
    border-radius: 50%; /* 원 */
    box-shadow: var(--shadow);
  }
  h1 {
    font-size: 34px;
  }
  .summary {
    font-size: 16px;
  }
  .stats {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 40px;
  }
  .stat dd {
    font-size: 22px;
  }
}
</style>
