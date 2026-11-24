<script setup>
import { skillMatrix, certifications } from "../data/skills";
</script>

<template>
  <section id="skills" class="section">
    <p class="eyebrow">Skills</p>
    <h2>기술과 경험</h2>
    <p class="lead">
      기술마다 실무에서 썼는지, 개인 프로젝트에서 썼는지 나눠 적었습니다.
    </p>

    <!-- 표가 화면보다 넓으면(폰) 이 상자 안에서만 가로로 스크롤 -->
    <div class="table-box">
      <table>
        <thead>
          <tr>
            <th scope="col" class="col-skill">기술</th>
            <th scope="col" class="col-kind">구분</th>
            <th scope="col">어디서 썼나</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="m in skillMatrix" :key="m.skill">
            <th scope="row">{{ m.skill }}</th>
            <!-- 실무는 초록, 프로젝트는 보라 배지 -->
            <td>
              <span class="kind" :class="{ work: m.kind === '실무' }">{{
                m.kind
              }}</span>
            </td>
            <td class="where">{{ m.where }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="certs">
      <h3>자격증</h3>
      <ul>
        <li v-for="c in certifications" :key="c.name">
          {{ c.name }} <span class="date">{{ c.date }}</span>
        </li>
      </ul>
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
  min-width: 640px; /* 이보다 좁아지면 상자 안에서 가로 스크롤 */
  border-collapse: collapse; /* 칸 사이 테두리를 한 줄로 합치기 */
  font-size: 15px;
}
thead tr {
  background: var(--bg-soft);
  text-align: left;
}
th,
td {
  padding: 12px 16px;
  text-align: left;
  vertical-align: top;
}
tbody tr {
  border-top: 1px solid var(--border);
}
.col-skill {
  width: 24%;
}
.col-kind {
  width: 14%;
}
tbody th {
  font-weight: 700;
}
.kind {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  background: var(--accent-soft);
  color: #3730a3;
}
.kind.work {
  background: #dcfce7;
  color: #14532d;
}
.where {
  color: #334155;
}

.certs {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px 20px;
}
.certs h3 {
  margin: 0;
  font-size: 15px;
}
.certs ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 16px;
  font-size: 15px;
}
.date {
  color: var(--text-sub);
  font-size: 13px;
  font-variant-numeric: tabular-nums;
}
</style>
