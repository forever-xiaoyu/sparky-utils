<template>
  <div class="typewriter-container">
    <div class="text-container" v-html="text"></div>
    <div class="btn-container">
      <button class="btn" @click="startVerbatim">开始打印</button>
      <button class="btn" @click="isStoppingVerbatim = true">中止打印</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TypeWriter from '@/utils/typeWriter/typeWriter'
import { testText, testArrayText, testVerbatimText } from './text'

const text = ref('')
let typewriter
let isStoppingVerbatim = false

// 打印一段字符串
function startString() {
  const typewriter = new TypeWriter(20)

  typewriter.start(testText, {
    output: (t) => {
      text.value += t
    },
    finish: () => {
      console.log('finished')
    },
  })
}

// 打印字符串数组，需指定段落标识
function startArray() {
  const typewriter = new TypeWriter(20, 'para')

  typewriter.start(testArrayText, {
    output: (t) => {
      text.value += t
    },
    finish: () => {
      console.log('finished')
    },
  })
}

// 根据服务端返回的字符，逐字打印
function startVerbatim() {
  typewriter = new TypeWriter(20)

  // 模拟逐字效果
  let char,
    charIndex = 0
  let timer = setInterval(() => {
    if (charIndex <= testVerbatimText.length) {
      char = testVerbatimText.charAt(charIndex)
      charIndex++
      if (isStoppingVerbatim) {
        charIndex = 0
        isStoppingVerbatim = false
        clearInterval(timer)
        print({ char, stop: true })
      } else {
        print(char)
      }
    } else {
      clearInterval(timer)
    }
  }, 50)

  function print(char) {
    typewriter.start(char, {
      verbatim: true,
      output: (t) => {
        text.value += t
      },
      finish: () => {
        console.log('finished')
      },
    })
  }
}
</script>

<style lang="scss">
.typewriter-container {
  width: 100%;
  height: 100vh;
  display: flow-root;
  .text-container {
    width: 600px;
    height: 400px;
    margin: 100px auto 0;
    border: 1px solid #ddd;
    padding: 10px;
    overflow-y: auto;
    .paragraph {
      display: block;
      margin-bottom: 10px;
      text-indent: 20px;
    }
  }
  .btn-container {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    .btn {
      cursor: pointer;
    }
  }
}
</style>
