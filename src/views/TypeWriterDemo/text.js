export const testText = `
<span style="font-weight: bold;">typeWriter</span> 是一个打字机模式的<span style="color:red">工具类，可以通过<span style="color:blue">实例化该工具类配合 v-html 实现打字机模式</span>，同时可以对打字频率进行控制，出打印字符串外还支持数组的打印。</span>在你的 Vue 组件中导入并使用工具类。在你的 Vue 组件中导入并使用 typeWriter 工具类。在你的 Vue 组件中导入并使用 typeWriter 工具类。typeWriter 是一个打字机模式的工具类，<span style="text-decoration: underline;">可以通过实例化该工具类配合 v-html实现打字机模式，同时可以对打字频率进行控制，出打印字符串外还支持数组的打印。在你的 Vue 组件中导入并使用工具类。</span>在你的 Vue 组件中导入并使用 typeWriter 工具类。在你的 Vue 组件中导入并使用 typeWriter 工具类。typeWriter 是一个打字机模式的工具类，可以通过实例化该工具类配合 v-html 实现打字机模式，同时可以对打字频率进行控制，出打印字符串外还支持数组的打印。在你的 Vue 组件中导入并使用 typeWriter 工具类。
`

export const testArrayText = [
    {
        'para': '<span style="font-weight: bold;">typeWriter</span> 是一个打字机模式',
        'index': 1
    },
    {
        'para': '<span style="color:red">工具类，可以通过<span style="color:blue">实例化</span>该工具类配合 v-html 实现打字机模式</span>',
        'index': 2
    },
    {
        'para': 'typeWriter 是一个打字机模式的工具类，可以通过实例化该工具类配合 v-html 实现打字机模式，同时可以对打字频率进行控制，出打印字符串外还支持数组的打印。在你的 Vue 组件中导入并使用 typeWriter 工具类。',
        'index': 3
    }
]

export const testVerbatimText = `
<span style="font-weight: bold;">typeWriter</span> 是一个打字机模式的工具类，可以通过<span style="color:red">实例化该工具类配合 v-html 实现</span>打字机模式，同时可以对打字频率进行控制，出打印字符串外还支持数组的打印。在你的 Vue 组件中导入并使用 typeWriter 工具类。
`

// export const testText = `
// safasf 

// ## Typographic replacements

// Enable typographer option to see result.

// (c) (C) (r) (R) (tm) (TM) (p) (P) +-

// test.. test... test..... test?..... test!....

// !!!!!! ???? ,,  -- ---

// "Smartypants, double quotes" and 'single quotes'
// 4545

// | 条款 | 内容 |
// | :--: | :--: |
// | **第五条** | 民事主体从事民事活动，应当遵循自愿原则，按照自己的意思设立、变更、终止民事法律关系。 |
// | **第八条** | 民事主体从事民事活动，不得违反法律，不得违背公序良俗。 |
// `