# typeWriter 工具类

`typeWriter` 是一个打字机模式的工具类，可以通过实例化该工具类配合 v-html 实现打字机模式，同时可以对打字频率进行控制，除打印字符串外还支持数组的打印。

## 使用示例

在你的 Vue 组件中导入并使用 typeWriter 工具类。

```js
<template>
  <div class="demo-container">
    <div class="text-container" v-html="text"></div>
    <div class="btn-container">
      <button class="btn" @click="start">START</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TypeWriter from '@/utils/typeWriter/typeWriter'

const text = ref('')

// 打印字符串
function start() {
  const typewriter = new TypeWriter(20)

  typewriter.start('这里是要打印的字符', {
    output: (t) => {
      text.value += t
    },
    finish: () => {
      console.log('finished')
    },
  })
}

// 打印数组
function start() {
  const typewriter = new TypeWriter(20, 'para')

  typewriter.start([{ para:'这里是要打印的字符' }], {
    output: (t) => {
      text.value += t
    },
    finish: () => {
      console.log('finished')
    },
  })
}
</script>
```

## API
### 实例化参数
| 实例化参数 |         说明         | 参数类型 | 默认值 |
| :--------: | :------------------: | :------: | :----: |
|   speed    |     打字频率(ms)     |  number  |   40   |
|    para    | 段落标识，打印数组传 |  string  |   -    |

### 方法
| 方法  |   说明   |            参数            |        参数类型         |                  参数说明                  |
| :---: | :------: | :------------------------: | :---------------------: | :----------------------------------------: |
| start | 开始打字 | (text, { output, finish }) | string\|array<br>object | {打印文本, { 输出字符回调, 打印完成回调 }} |
