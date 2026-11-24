<script setup>
import { certifications } from "../data/skills";
</script>

<template>
  <!-- 인사 담당자가 한눈에 보도록 자격증만 따로 모은 섹션 -->
  <section id="certs" class="section">
    <h2>자격증</h2>
    <p class="lead">자격 종류와 발급 기관, 취득일을 함께 적었습니다.</p>

    <!-- 폰에서는 표 대신 한 줄 = 한 자격증 카드 모양으로 바뀜 (아래 @media) -->
    <div class="table-box">
      <table>
        <thead>
          <tr>
            <th scope="col">자격증</th>
            <th scope="col">구분</th>
            <th scope="col">발급 기관</th>
            <th scope="col" class="col-date">취득일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in certifications" :key="c.name">
            <th scope="row">{{ c.name }}</th>
            <td>{{ c.type }}</td>
            <td class="sub">{{ c.issuer }}</td>
            <td class="date">{{ c.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.section h2 {
  margin-bottom: 8px;
}
.lead {
  margin: 0 0 24px;
  color: var(--text-sub);
}
.table-box {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 15px;
}
thead tr {
  background: var(--bg-soft);
}
th,
td {
  padding: 12px 16px;
  text-align: left;
}
tbody tr {
  border-top: 1px solid var(--border);
}
tbody th {
  font-weight: 700;
}
.sub {
  color: var(--text-sub);
}
.col-date,
.date {
  width: 110px;
  font-variant-numeric: tabular-nums; /* 날짜 숫자 폭을 같게 */
}

/* 폰: 머리줄을 숨기고 각 줄을 "이름 + 취득일 / 구분 · 기관" 두 줄로 */
@media (max-width: 600px) {
  thead {
    display: none;
  }
  tbody tr {
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 12px 16px;
    gap: 2px 12px;
  }
  tbody tr:first-child {
    border-top: 0;
  }
  th,
  td {
    padding: 0;
  }
  .date {
    width: auto;
    grid-column: 2;
    grid-row: 1;
    color: var(--text-sub);
  }
  td:nth-child(2),
  .sub {
    display: inline;
    font-size: 14px;
    color: var(--text-sub);
  }
  td:nth-child(2) {
    grid-column: 1;
  }
  .sub {
    grid-column: 1 / -1;
  }
}
</style>
