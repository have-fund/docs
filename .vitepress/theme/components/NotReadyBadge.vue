<script setup>
import { useData } from 'vitepress'

const { lang } = useData()

const messages = {
  'en-US': 'This section is not ready yet',
  'ru-RU': 'Этот раздел ещё не готов',
}

console.log(lang.value)

const text = messages[lang.value] || messages['en-US']
</script>

<template>
  <div class="not-ready-badge">
    <svg
      width="16"
      height="16"
      class="icon-alert"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M1 21h22L12 2 1 21zM12 16a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1-6h-2v4h2v-4z"
      />
    </svg>

    <span>{{ text }}</span>
  </div>
</template>

<style scoped>
.not-ready-badge {
  margin: 16px 0 0;
  display: inline-flex;
  align-items: center;
  padding: 0.2em 0.6em;
  background: #ffeeba;
  color: #856404;
  border-radius: 4px;
  font-size: 0.9em;
  font-weight: 500;
}

.not-ready-badge .icon-alert {
  margin-right: 0.3em;
}
</style>
