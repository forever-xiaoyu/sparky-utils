// import markdownit from 'markdown-it'
// const md = markdownit()

export default class TypeWriter {
    /**
     * @description TypeWriter constructor
     * @param {number} [speed=40] - 打字机速度
     * @param {string} [paraKey=''] - 段落标识
     */
    constructor(speed = 40, paraKey = '') {
        this.speed = speed
        this.paraKey = paraKey
        this.tag = ''
    }

    /**
     * @description 开始打字机模式
     * @param {string} text - 要打印的文本 
     * @param {Object} options - 打印选项
     * @param {Boolean} options.verbatim - 是否为逐字打印
     * @param {Function} options.output - 输出字符回调
     * @param {Function} options.finish - 打印完成回调
     */
    start(text, options) {
        Object.assign(this, options)
        this.charIndex = 0
        this.index = 0
        this.isGenerating = true
        // this.text = md.render(text)
        this.text = text
        if (this.verbatim) {
            this.typeVerbatim()
        } else {
            this.type()
        }
    }

    /**
     * @description 使用打字机模式打印一段内容
     * @private
     */
    type() {
        if (Array.isArray(this.text)) {
            // 消息类型为数组的处理
            if (this.index < this.text.length) {
                const current = this.text[this.index]
                const currentText = current[this.paraKey]
                const hasFlag = current.hasFlag
                const param = hasFlag ? current.index : ''
                this.charIndex == 0 && this.output(`<span data-param="${param}" ${hasFlag ? 'class="paragraph cursor"' : 'class="paragraph"'}>`)

                if (this.charIndex < currentText.length) {
                    let char = currentText.charAt(this.charIndex)
                    if (char == '>') {
                        this.tag += char
                        this.output(this.tag)
                        this.tag = ''
                    } else if (char == '<' || this.tag) {
                        // 当前标签未结束，继续添加
                        this.tag += char
                    } else {
                        this.output(char)
                    }
                    this.charIndex++
                } else {
                    if (hasFlag) {
                        // 添加标识
                        this.output(`<span class="flag" data-param="${param}">标识</span>`)
                    }
                    this.output('</span>');
                    // 在每个段落结尾添加换行符
                    (this.index < this.text.length - 1) && this.output('\n\n')
                    this.charIndex = 0
                    this.index++
                }
                setTimeout(() => {
                    this.type()
                }, this.tag ? 0 : this.speed)
            } else {
                this.isGenerating = false
                this.finish()
            }
        } else {
            // 消息类型为字符串的处理
            if (this.charIndex < this.text.length) {
                let char = this.text.charAt(this.charIndex)
                // 匹配标签，直接添加整个标签，防止被解析到页面中
                if (char == '>') {
                    this.tag += char
                    this.output(this.tag)
                    this.tag = ''
                } else if (char == '<' || this.tag) {
                    // 当前标签未结束，继续添加
                    this.tag += char
                } else {
                    this.output(char)
                }
                this.charIndex++
                // 如果是标签，不需要延迟打印
                setTimeout(() => {
                    this.type()
                }, this.tag ? 0 : this.speed)
            } else {
                this.isGenerating = false
                this.finish()
            }
        }
    }

    /**
     * @description 使用打字机模式逐字打印字符
     * @private
     */
    typeVerbatim() {
        let char = this.text
        if (typeof char == 'string') {
            // 匹配标签，直接添加整个标签，防止被解析到页面中
            if (char == '>') {
                this.tag += char
                this.output(this.tag)
                this.tag = ''
            } else if (char == '<' || this.tag) {
                // 当前标签未结束，继续添加
                this.tag += char
            } else {
                this.output(char)
            }
        } else {
            this.isGenerating = false
            this.finish()
        }
    }
}