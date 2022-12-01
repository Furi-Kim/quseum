<script setup lang="ts">
import { ref, watch, watchEffect, computed, defineComponent } from 'vue'

const score = ref(2500)
const current_title_no = ref(0)
const current_quiz_no = ref(0)
const current_intro_no = ref(0)
const current_ending_no = ref(0)
const current_img_no = ref(0)
const fail_count = ref(0)

const page_title = ref(true)
const page_intro = ref(false)
const page_answer = ref(false)
const page_success = ref(false)
const page_fail = ref(false)
const page_answer_desc = ref(false)
const page_score = ref(false)
const page_ending = ref(false)

const title = ref([
  "000.title.jpeg",
  "intro.00.jpeg",
  "intro.01.jpeg",
  "intro.02.jpeg",
  "intro.03.jpeg",
  "intro.04.jpeg",
  "intro.05.jpeg",
  "intro.06.jpeg",
  "intro.07.jpeg",
  "intro.08.jpeg",
  "intro.09.jpeg",
  "intro.10.jpeg",
  "intro.11.jpeg",
  "intro.12.jpeg",
  "intro.13.jpeg",
  "intro.14.jpeg",
  "intro.15.jpeg",
  "intro.16.jpeg",
  "intro.17.jpeg",
  "intro.18.jpeg",
  "intro.19.jpeg",
  "intro.20.jpeg",
  "intro.20.jpeg",
  "intro.21.jpeg",
  "intro.22.jpeg",
  "intro.23.jpeg",
  "intro.24.jpeg",
])

const quiz_intro = ref([
  ["q.01-01.intro.1.jpeg", "q.01-01.intro.2.jpeg"],
  ["q.01-02.intro.1.jpeg"],
  ["q.01-03.intro.1.jpeg"],
  ["q.02-01.intro.1.jpeg", "q.02-01.intro.2.jpeg", "q.02-01.intro.3.jpeg", "q.02-01.intro.4.jpeg", "q.02-01.intro.5.jpeg", "q.02-01.intro.6.jpeg", "q.02-01.intro.7.jpeg"],
  ["q.02-02.intro.1.jpeg"],
  ["q.02-03.intro.1.jpeg"],
  ["q.03-01.intro.1.jpeg", "q.03-01.intro.2.jpeg", "q.03-01.intro.3.jpeg", "q.03-01.intro.4.jpeg", "q.03-01.intro.5.jpeg", "q.03-01.intro.6.jpeg", "q.03-01.intro.7.jpeg"],
  ["q.03-02.intro.1.jpeg"],
  ["q.03-03.intro.1.jpeg"],
  ["q.04-01.intro.1.jpeg", "q.04-01.intro.2.jpeg", "q.04-01.intro.3.jpeg", "q.04-01.intro.4.jpeg", "q.04-01.intro.5.jpeg", "q.04-01.intro.6.jpeg", "q.04-01.intro.7.jpeg", "q.04-01.intro.8.jpeg"],
  ["q.04-02.intro.1.jpeg"],
  ["q.05-01.intro.1.jpeg", "q.05-01.intro.2.jpeg", "q.05-01.intro.3.jpeg", "q.05-01.intro.4.jpeg", "q.05-01.intro.5.jpeg", "q.05-01.intro.6.jpeg"],
  ["q.05-02.intro.1.jpeg"],
  ["q.06-01.intro.1.jpeg", "q.06-01.intro.2.jpeg", "q.06-01.intro.3.jpeg", "q.06-01.intro.4.jpeg", "q.06-01.intro.5.jpeg", "q.06-01.intro.6.jpeg"],
  ["q.06-02.intro.1.jpeg"],
  ["q.07-01.intro.1.jpeg", "q.07-01.intro.2.jpeg", "q.07-01.intro.3.jpeg", "q.07-01.intro.4.jpeg", "q.07-01.intro.5.jpeg", "q.07-01.intro.6.jpeg"],
  ["q.07-02.intro.1.jpeg"],
  ["q.08-01.intro.1.jpeg", "q.08-01.intro.2.jpeg", "q.08-01.intro.3.jpeg", "q.08-01.intro.4.jpeg", "q.08-01.intro.5.jpeg", "q.08-01.intro.6.jpeg"],
  ["q.08-02.intro.1.jpeg"],
  ["q.09-01.intro.01.jpeg", "q.09-01.intro.02.jpeg", "q.09-01.intro.03.jpeg", "q.09-01.intro.04.jpeg", "q.09-01.intro.05.jpeg", "q.09-01.intro.06.jpeg", "q.09-01.intro.07.jpeg", "q.09-01.intro.08.jpeg", "q.09-01.intro.09.jpeg", "q.09-01.intro.10.jpeg", "q.09-01.intro.11.jpeg", "q.09-01.intro.12.jpeg", "q.09-01.intro.13.jpeg", "q.09-01.intro.14.jpeg", "q.09-01.intro.15.jpeg", "q.09-01.intro.16.jpeg", "q.09-01.intro.17.jpeg", "q.09-01.intro.18.jpeg", "q.09-01.intro.19.jpeg", "q.09-01.intro.20.jpeg", "q.09-01.intro.21.jpeg", "q.09-01.intro.22.jpeg", "q.09-01.intro.23.jpeg", "q.09-01.intro.24.jpeg", "q.09-01.intro.25.jpeg", "q.09-01.intro.26.jpeg", "q.09-01.intro.27.jpeg", "q.09-01.intro.28.jpeg", "q.09-01.intro.29.jpeg", "q.09-01.intro.30.jpeg", "q.09-01.intro.31.jpeg", "q.09-01.intro.32.jpeg", "q.09-01.intro.33.jpeg", "q.09-01.intro.34.jpeg", "q.09-01.intro.35.jpeg", "q.09-01.intro.36.jpeg", "q.09-01.intro.37.jpeg", "q.09-01.intro.38.jpeg", "q.09-01.intro.39.jpeg", "q.09-01.intro.40.jpeg", "q.09-01.intro.41.jpeg", "q.09-01.intro.42.jpeg", "q.09-01.intro.43.jpeg", "q.09-01.intro.44.jpeg", "q.09-01.intro.45.jpeg", "q.09-01.intro.46.jpeg", "q.09-01.intro.47.jpeg", "q.09-01.intro.48.jpeg", "q.09-01.intro.49.jpeg", "q.09-01.intro.50.jpeg", "q.09-01.intro.51.jpeg", "q.09-01.intro.52.jpeg", ],
  ["q.10-01.intro.1.jpeg", "q.10-01.intro.2.jpeg", "q.10-01.intro.3.jpeg", "q.10-01.intro.4.jpeg", "q.10-01.intro.5.jpeg", "q.10-01.intro.6.jpeg", ],
  ["q.10-02.intro.1.jpeg"],
  ["q.10-03.intro.1.jpeg"],
])

const quiz = ref([
  [ "q.01-01.q.1.jpeg","q.01-01.q.2.jpeg","q.01-01.q.3.jpeg","q.01-01.q.4.jpeg","q.01-01.q.5.jpeg","q.01-01.q.6.jpeg"],
  [ "q.01-02.q.1.jpeg","q.01-02.q.2.jpeg","q.01-02.q.3.jpeg","q.01-02.q.4.jpeg","q.01-02.q.5.jpeg"],
  [ "q.01-03.q.1.jpeg","q.01-03.q.2.jpeg","q.01-03.q.3.jpeg","q.01-03.q.4.jpeg","q.01-03.q.5.jpeg","q.01-03.q.6.jpeg"],
  [ "q.02-01.q.1.jpeg","q.02-01.q.2.jpeg"],
  [ "q.02-02.q.1.jpeg","q.02-02.q.2.jpeg","q.02-02.q.3.jpeg","q.02-02.q.4.jpeg","q.02-02.q.5.jpeg"],
  [ "q.02-03.q.1.jpeg","q.02-03.q.2.jpeg","q.02-03.q.3.jpeg",],
  [ "q.03-01.q.1.jpeg","q.03-01.q.2.jpeg","q.03-01.q.3.jpeg"],
  [ "q.03-02.q.1.jpeg", "q.03-02.q.2.jpeg", "q.03-02.q.3.jpeg", "q.03-02.q.4.jpeg", "q.03-02.q.5.jpeg"],
  [ "q.03-03.q.1.jpeg", "q.03-03.q.2.jpeg", "q.03-03.q.3.jpeg", "q.03-03.q.4.jpeg", "q.03-03.q.5.jpeg", "q.03-03.q.6.jpeg", "q.03-03.q.7.jpeg"],
  [ "q.04-01.q.1.jpeg", "q.04-01.q.2.jpeg", "q.04-01.q.3.jpeg", "q.04-01.q.4.jpeg", "q.04-01.q.5.jpeg"],
  [ "q.04-02.q.1.jpeg", "q.04-02.q.2.jpeg"],
  [ "q.05-01.q.1.jpeg", "q.05-01.q.2.jpeg"],
  [ "q.05-02.q.1.jpeg", "q.05-02.q.2.jpeg", "q.05-02.q.3.jpeg", "q.05-02.q.4.jpeg", "q.05-02.q.5.jpeg"],
  [ "q.06-01.q.1.jpeg", "q.06-01.q.2.jpeg", "q.06-01.q.3.jpeg", "q.06-01.q.4.jpeg", "q.06-01.q.5.jpeg", "q.06-01.q.6.jpeg"],
  [ "q.06-02.q.1.jpeg", "q.06-02.q.2.jpeg"],
  [ "q.07-01.q.1.jpeg", "q.07-01.q.2.jpeg", "q.07-01.q.1.jpeg"],
  [ "q.07-02.q.1.jpeg", "q.07-02.q.2.jpeg", "q.07-02.q.3.jpeg", "q.07-02.q.4.jpeg", "q.07-02.q.5.jpeg"],
  [ "q.08-01.q.1.jpeg", "q.08-01.q.2.jpeg", "q.08-01.q.3.jpeg"],
  [ "q.08-02.q.1.jpeg", "q.08-02.q.2.jpeg", "q.08-02.q.3.jpeg", "q.08-02.q.4.jpeg"],
  [ "q.09-01.q.1.jpeg", "q.09-01.q.2.jpeg", "q.09-01.q.3.jpeg", "q.09-01.q.4.jpeg"],
  [ "q.10-01.q.1.jpeg", "q.10-01.q.2.jpeg", "q.10-01.q.3.jpeg"],
  [ "q.10-02.q.1.jpeg", "q.10-02.q.2.jpeg", "q.10-02.q.3.jpeg"],
  [ "q.10-03.q.1.jpeg", "q.10-03.q.2.jpeg", "q.10-03.q.3.jpeg"],
])

const answer_desc = ref([
  "q.01-01.a.answer.jpeg",
  "q.01-02.a.answer.jpeg",
  "q.01-03.a.answer.jpeg",
  "q.02-01.a.answer.jpeg",
  "q.02-02.a.answer.jpeg",
  "q.02-03.a.answer.jpeg",
  "q.03-01.a.answer.jpeg",
  "q.03-02.a.answer.jpeg",
  "q.03-03.a.answer.jpeg",
  "q.04-01.a.answer.jpeg",
  "q.04-02.a.answer.jpeg",
  "q.05-01.a.answer.jpeg",
  "q.05-02.a.answer.jpeg",
  "q.06-01.a.answer.jpeg",
  "q.06-02.a.answer.jpeg",
  "q.07-01.a.answer.jpeg",
  "q.07-02.a.answer.jpeg",
  "q.08-01.a.answer.jpeg",
  "q.08-02.a.answer.jpeg",
  "q.09-01.a.answer.jpeg",
  "q.10-01.a.answer.jpeg",
  "q.10-02.a.answer.jpeg",
  "q.10-03.a.answer.jpeg",
])

const success = ref([
  ["q.01-01.a.succeed.1.jpeg","q.01-01.a.succeed.2.jpeg","q.01-01.a.succeed.3.jpeg"],
  ["q.01-02.a.succeed.1.jpeg","q.01-02.a.succeed.2.jpeg","q.01-02.a.succeed.3.jpeg"],
  ["q.01-03.a.succeed.1.jpeg","q.01-03.a.succeed.2.jpeg","q.01-03.a.succeed.3.jpeg"],
  ["q.02-01.a.succeed.1.jpeg","q.02-01.a.succeed.2.jpeg","q.02-01.a.succeed.3.jpeg"],
  ["q.02-02.a.succeed.1.jpeg","q.02-02.a.succeed.2.jpeg","q.02-02.a.succeed.3.jpeg"],
  ["q.02-03.a.succeed.1.jpeg","q.02-03.a.succeed.2.jpeg","q.02-03.a.succeed.3.jpeg"],
  ["q.03-01.a.succeed.1.jpeg","q.03-01.a.succeed.2.jpeg","q.03-01.a.succeed.3.jpeg"],
  ["q.03-02.a.succeed.1.jpeg","q.03-02.a.succeed.2.jpeg","q.03-02.a.succeed.3.jpeg"],
  ["q.03-03.a.succeed.1.jpeg","q.03-03.a.succeed.2.jpeg","q.03-03.a.succeed.3.jpeg"],
  ["q.04-01.a.succeed.1.jpeg","q.04-01.a.succeed.2.jpeg","q.04-01.a.succeed.3.jpeg"],
  ["q.04-02.a.succeed.1.jpeg","q.04-02.a.succeed.2.jpeg","q.04-02.a.succeed.3.jpeg"],
  ["q.04-01.a.succeed.1.jpeg","q.05-01.a.succeed.2.jpeg","q.05-01.a.succeed.3.jpeg"],
  ["q.05-02.a.succeed.1.jpeg","q.05-02.a.succeed.2.jpeg","q.05-02.a.succeed.3.jpeg"],
  ["q.06-01.a.succeed.1.jpeg","q.06-01.a.succeed.2.jpeg","q.06-01.a.succeed.3.jpeg"],
  ["q.06-02.a.succeed.1.jpeg","q.06-02.a.succeed.2.jpeg","q.06-02.a.succeed.3.jpeg"],
  ["q.07-01.a.succeed.1.jpeg","q.07-01.a.succeed.2.jpeg","q.07-01.a.succeed.3.jpeg"],
  ["q.07-02.a.succeed.1.jpeg","q.07-02.a.succeed.2.jpeg","q.07-02.a.succeed.3.jpeg"],
  ["q.08-01.a.succeed.1.jpeg","q.08-01.a.succeed.2.jpeg","q.08-01.a.succeed.3.jpeg"],
  ["q.08-02.a.succeed.1.jpeg","q.08-02.a.succeed.2.jpeg","q.08-02.a.succeed.3.jpeg"],
  ["q.09-01.a.succeed.1.jpeg","q.09-01.a.succeed.2.jpeg","q.09-01.a.succeed.3.jpeg"],
  ["q.10-01.a.succeed.1.jpeg","q.10-01.a.succeed.2.jpeg","q.10-01.a.succeed.3.jpeg"],
  ["q.10-02.a.succeed.1.jpeg","q.10-02.a.succeed.2.jpeg","q.10-02.a.succeed.3.jpeg"],
  ["q.10-03.a.succeed.1.jpeg","q.10-03.a.succeed.2.jpeg","q.10-03.a.succeed.3.jpeg"],
])

const answer_back = ref([
  "q.01-01.a.back.jpeg",
  "q.01-02.a.back.jpeg",
  "q.01-03.a.back.jpeg",
  "q.02-01.a.back.jpeg",
  "q.02-02.a.back.jpeg",
  "q.02-03.a.back.jpeg",
  "q.03-01.a.back.jpeg",
  "q.03-02.a.back.jpeg",
  "q.03-03.a.back.jpeg",
  "q.04-01.a.back.jpeg",
  "q.04-02.a.back.jpeg",
  "q.05-01.a.back.jpeg",
  "q.05-02.a.back.jpeg",
  "q.06-01.a.back.jpeg",
  "q.06-02.a.back.jpeg",
  "q.07-01.a.back.jpeg",
  "q.07-02.a.back.jpeg",
  "q.08-01.a.back.jpeg",
  "q.08-02.a.back.jpeg",
  "q.09-01.a.back.jpeg",
  "q.10-01.a.back.jpeg",
  "q.10-02.a.back.jpeg",
  "q.10-03.a.back.jpeg",
])
const fail_desc = ref([
  ["q.01-01.a.fail.1.jpeg","q.01-01.a.fail.2.jpeg","q.01-01.a.fail.3.jpeg"],
  ["q.01-02.a.fail.1.jpeg","q.01-02.a.fail.2.jpeg","q.01-02.a.fail.3.jpeg"],
  ["q.01-03.a.fail.1.jpeg","q.01-03.a.fail.2.jpeg","q.01-03.a.fail.3.jpeg"],
  ["q.02-01.a.fail.1.jpeg","q.02-01.a.fail.2.jpeg","q.02-01.a.fail.3.jpeg"],
  ["q.02-02.a.fail.1.jpeg","q.02-02.a.fail.2.jpeg","q.02-02.a.fail.3.jpeg"],
  ["q.02-03.a.fail.1.jpeg","q.02-03.a.fail.2.jpeg","q.02-03.a.fail.3.jpeg"],
  ["q.03-01.a.fail.1.jpeg","q.03-01.a.fail.2.jpeg","q.03-01.a.fail.3.jpeg"],
  ["q.03-02.a.fail.1.jpeg","q.03-02.a.fail.2.jpeg","q.03-02.a.fail.3.jpeg"],
  ["q.03-03.a.fail.1.jpeg","q.03-03.a.fail.2.jpeg","q.03-03.a.fail.3.jpeg"],
  ["q.04-01.a.fail.1.jpeg","q.04-01.a.fail.2.jpeg","q.04-01.a.fail.3.jpeg"],
  ["q.04-02.a.fail.1.jpeg","q.04-02.a.fail.2.jpeg","q.04-02.a.fail.3.jpeg"],
  ["q.04-01.a.fail.1.jpeg","q.05-01.a.fail.2.jpeg","q.05-01.a.fail.3.jpeg"],
  ["q.05-02.a.fail.1.jpeg","q.05-02.a.fail.2.jpeg","q.05-02.a.fail.3.jpeg"],
  ["q.06-01.a.fail.1.jpeg","q.06-01.a.fail.2.jpeg","q.06-01.a.fail.3.jpeg"],
  ["q.06-02.a.fail.1.jpeg","q.06-02.a.fail.2.jpeg","q.06-02.a.fail.3.jpeg"],
  ["q.07-01.a.fail.1.jpeg","q.07-01.a.fail.2.jpeg","q.07-01.a.fail.3.jpeg"],
  ["q.07-02.a.fail.1.jpeg","q.07-02.a.fail.2.jpeg","q.07-02.a.fail.3.jpeg"],
  ["q.08-01.a.fail.1.jpeg","q.08-01.a.fail.2.jpeg","q.08-01.a.fail.3.jpeg"],
  ["q.08-02.a.fail.1.jpeg","q.08-02.a.fail.2.jpeg","q.08-02.a.fail.3.jpeg"],
  ["q.09-01.a.fail.1.jpeg","q.09-01.a.fail.2.jpeg","q.09-01.a.fail.3.jpeg"],
  ["q.10-01.a.fail.1.jpeg","q.10-01.a.fail.2.jpeg","q.10-01.a.fail.3.jpeg"],
  ["q.10-02.a.fail.1.jpeg","q.10-02.a.fail.2.jpeg","q.10-02.a.fail.3.jpeg"],
  ["q.10-03.a.fail.1.jpeg","q.10-03.a.fail.2.jpeg","q.10-03.a.fail.3.jpeg"],
])

const answer = ref([
  1,
  3,
  4,
  4,
  2,
  3,
  4,
  3,
  2,
  3,
  3,
  4,
  4,
  1,
  3,
  3,
  2,
  2,
  3,
  3,
  4,
  3,
  3,
])

const ending = ref([
  "outro.01.jpeg",
  "outro.02.jpeg",
  "outro.03.jpeg",
  "outro.04.jpeg",
  "outro.05.jpeg",
  "outro.06.jpeg",
  "outro.07.jpeg",
  "outro.08.jpeg",
  "outro.09.jpeg",
  "outro.10.jpeg",
  "outro.11.jpeg",
  "outro.12.jpeg",
  "outro.13.jpeg",
  "outro.14.jpeg",
  "outro.15.jpeg",
  "outro.16.jpeg",
  "outro.17.jpeg",
  "outro.18.jpeg",
  "outro.19.jpeg",
  "outro.20.jpeg",
  "outro.21.jpeg",
  "outro.22.jpeg",
])

watch(current_title_no, () => {
  if (current_title_no.value >= title.value.length) {
    page_title.value = false
    page_intro.value = true
  }
})

watch(current_img_no, () => {
  if (current_img_no.value >= quiz.value[current_quiz_no.value].length) {
    page_answer.value = true
    current_img_no.value = 0
  }
})

watch(current_intro_no, () => {
  if (current_intro_no.value >= quiz_intro.value[current_quiz_no.value].length) {
    page_intro.value = false
    current_intro_no.value = 0
  }
})

watch(current_ending_no, () => {
  if (current_ending_no.value >= ending.value.length) {
    reset()
  }
})


const checkAnswer = (answer_no : any) => {
  if (answer.value[current_quiz_no.value] == answer_no) {
    page_answer.value = false
    page_success.value = true
  } else {
    score.value = score.value - 20
    page_fail.value = true
    page_answer.value = false
  }
}

const nextQuiz = () => {
  fail_count.value = 0
  if(current_quiz_no.value + 1 >= quiz.value.length) {
    page_answer_desc.value = false
    page_ending.value = true
  } else {
    current_quiz_no.value = current_quiz_no.value + 1
    page_answer_desc.value = false
    page_intro.value = true
  }
}

const toAnswerDesc = () => {
  page_success.value = false
  page_answer_desc.value = true
}

const backToAnswer = () => {
  fail_count.value = fail_count.value + 1
  if (fail_count.value >=3 ) {
    score.value = score.value - 40
    page_fail.value = false
    page_answer_desc.value = true
  } else{
    page_fail.value = false
    page_answer.value = true
  }
}

const backToQuiz = () => {
  current_img_no.value = 0
  page_answer.value = false
}

const reset = () => {
  score.value = 3000
  current_title_no.value = 0 
  current_quiz_no.value = 0 
  current_intro_no.value = 0 
  current_ending_no.value = 0
  current_img_no.value = 0
  fail_count.value = 0
  page_title.value = true
  page_intro.value = false
  page_answer.value = false
  page_success.value = false
  page_fail.value = false
  page_answer_desc.value = false
  page_ending.value = false
}
</script>
<template>
  <img :src="`${title[current_title_no]}`" v-if="page_title" @click="current_title_no++">

  <img :src="`${quiz_intro[current_quiz_no][current_intro_no]}`" className="" v-if="page_intro" @click="current_intro_no++"> 

  <img :src="`${quiz[current_quiz_no][current_img_no]}`" className="" v-if="!page_title && !page_intro && !page_answer && !page_fail && !page_success && !page_answer_desc && !page_ending" @click="current_img_no++"> 

  <div  v-if="page_answer"> 
    <img :src="`${answer_back[current_quiz_no]}`" className=""> 
    <div class="grid grid-cols-4 h-96 z-10" style="margin: -720px 0 0 160px; width:1800px; ">
      <img src="/q.01-01.button.1.png" @click="checkAnswer(1)" className="cursor-pointer">
      <img src="/q.01-01.button.2.png" @click="checkAnswer(2)" className="cursor-pointer">
      <img src="/q.01-01.button.3.png" @click="checkAnswer(3)" className="cursor-pointer">
      <img src="/q.01-01.button.4.png" @click="checkAnswer(4)" className="cursor-pointer">
    </div>
    <div class="z-10 h-48" style="margin: 120px 0 0 1455px; width: 500px;">
      <img src="/q.01-01.button.again.png" @click="backToQuiz()" className="cursor-pointer">
    </div>
  </div>

  <img :src="`${fail_desc[current_quiz_no][fail_count]}`" v-if="page_fail" @click="backToAnswer"> 

  <img :src="`${success[current_quiz_no][fail_count]}`" v-if="page_success" @click="toAnswerDesc"> 

  <img :src="`${answer_desc[current_quiz_no]}`" v-if="page_answer_desc" @click="nextQuiz"> 

  <div  v-if="page_score"> 
    <img :src="`${answer_back[current_quiz_no]}`" className=""> 
    <div class="z-10 h-48" style="margin: 120px 0 0 1455px; width: 500px;">
      <img src="/q.01-01.button.again.png" @click="backToQuiz()" className="cursor-pointer">
    </div>
  </div>

  <img :src="`${ending[current_ending_no]}`" v-if="page_ending" @click="current_ending_no++"> 

</template>

<style scoped>
</style>
