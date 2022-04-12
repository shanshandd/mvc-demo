import $ from 'jquery'
const eventBus = $({})
const m = {
    data: {
        num: parseFloat(localStorage.getItem('app1.num') || 100)
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem('app1.num', m.data.num)
    }
}
const v = {
    el: null,
    html: `
    <div>
        <div><span class="number">{num}</span></div>
        <button class="add">+1</button>
        <button class="min">-1</button>
        <button class="mul">*2</button>
        <button class="div">÷2</button>
    </div>
    `,
    init(container) {
        v.el = $(container)
    },
    render() {
        if (v.el.children().length > 0) {
            v.el.empty()
        }
        $(v.html.replace('{num}', m.data.num)).appendTo(v.el)
    }
}
let c = {
    init(container) {
        v.init(container)
        v.render(m.data.num)
        c.toBindEvent()
        eventBus.on('m:updated', () => {
            v.render(m.data.num)
        })
    },

    add() {
        m.update({ num: m.data.num + 1 })
    },
    min() {
        m.update({ num: m.data.num - 1 })
    },
    mul() {
        m.update({ num: m.data.num * 2 })
    },
    div() {
        m.update({ num: m.data.num / 2 })
    },
    eventsList: {
        'click .add': 'add',
        'click .min': 'min',
        'click .mul': 'mul',
        'click .div': 'div'
    },
    toBindEvent() {
        for (let event in c.eventsList) {
            let value = c.eventsList[event];
            let spaceIndex = event.indexOf(' ')
            let part1 = event.slice(0, spaceIndex)
            let part2 = event.slice(spaceIndex)
            $(v.el).on(part1, part2, c[value])
        }
    }
}

export default c
