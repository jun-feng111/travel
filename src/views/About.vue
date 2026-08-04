<template>
  <div class="container about">
    <div class="about-card">
      <h1>关于「旅行志」</h1>
      <p>
        旅行志是一个纯静态的个人旅行网站，记录我去过的城市、看过的风景、吃过的食物和走过的路线。
        希望这些碎片化的记忆，能帮你更快决定下一站去哪、玩什么、吃什么。
      </p>

      <h2>网站能做什么</h2>
      <ul>
        <li>按城市查看<strong>热门景点</strong>（评分、开放时间、交通、贴士）</li>
        <li>阅读真实可用的<strong>旅游攻略</strong>（行程、预算、避坑）</li>
        <li>欣赏每个城市的<strong>美景图集</strong></li>
        <li>发现不可错过的<strong>特色美食</strong>与推荐店铺</li>
        <li>全局搜索城市 / 景点 / 美食 / 攻略</li>
      </ul>

      <h2>内容说明</h2>
      <p>
        本站当前为示例数据，用于演示网站功能。出行前请务必核实景点开放状态、门票与交通的最新信息，
        以官方渠道为准。
      </p>

      <h2>技术栈</h2>
      <p>Vue 3 + Vite + Vue Router + Element Plus，纯前端静态部署（Vercel），无需后端服务器。</p>

      <blockquote>愿我们都能在路上，遇见更广阔的世界。</blockquote>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about { max-width: 800px; }
.about-card { background: #fff; border-radius: 16px; padding: 36px; box-shadow: var(--card-shadow); margin: 24px 0; }
.about-card h1 { font-size: 28px; color: var(--primary-dark); margin-bottom: 16px; }
.about-card h2 { font-size: 19px; margin: 24px 0 10px; color: var(--primary); }
.about-card p { color: var(--text-light); margin: 10px 0; }
.about-card ul { margin: 10px 0 10px 22px; color: var(--text-light); }
.about-card li { margin: 6px 0; }
.about-card blockquote { border-left: 4px solid var(--accent); background: #fff8ec;
  padding: 12px 16px; margin: 20px 0; border-radius: 0 8px 8px 0; color: var(--primary-dark); font-style: italic; }
</style>
