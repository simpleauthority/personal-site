import edjsHTML from 'editorjs-html'
import hljs from 'highlight.js'

function ifprint(what, text) {
  return what ? text : ''
}

const customParsers = {
  table: (block) => {
    let html = `
      <table class="table">
        <thead>
          <tr>
    `

    const head = block.data.content[0]
    head.forEach(headData => (html += `<th scope="col">${headData}</th>`))
    html += `
          </tr>
        </thead>
        <tbody>
    `

    const bodyRows = block.data.content.slice(1)
    bodyRows.forEach((bodyRow) => {
      html += '<tr>'
      bodyRow.forEach(bodyData => (html += `<td>${bodyData}</td>`))
      html += '</tr>'
    })

    html += `
        </tbody>
      </table>
    `
    return html
  },
  warning: (block) => {
    return `
      <div class="alert alert-dark" role="alert">
        <h4 class="alert-heading">${block.data.title}</h4>
        <hr>
        <p>${block.data.message}</p>
      </div>
    `
  },
  code: (block) => {
    return `<pre class="code">${hljs.highlightAuto(block.data.code).value}</pre>`
  },
  // raw html
  raw: (block) => {
    return block.data.html
  },
  checklist: (block) => {
    let html = '<div class="checklist">'

    block.data.items.forEach((item) => {
      const id = item.text.replace(' ', '').replace('-', '').replace('_', '')
      html += `
        <div class="form-check">
        <input class="form-check-input" type="checkbox" id="${id}-check" ${item.checked ? 'checked' : ''} disabled>
        <span class="checkmark"></span>
        <label class="form-check-label" for="${id}-check">${item.text}</label>
        </div>
      `
    })

    html += '</div>'
    return html
  },
  embed: (block) => {
    const data = block.data
    switch (data.service) {
      case 'youtube':
        return `<iframe class="media-embed" style="min-height: ${data.height}px;" src="${data.embed}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      case 'codepen':
        return `<iframe class="media-embed" style="min-height: ${data.height}px;"  scrolling="no" src="${data.embed}" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">${data.caption}</iframe>`
      case 'gfycat':
        return `<iframe class="media-embed" style="min-height: ${data.height}px;" src="${data.embed}" frameborder='0' scrolling='no' allowfullscreen></iframe>`
      case 'instagram':
        return `<iframe class="media-embed" style="min-height: ${data.height + 20}px;" src="${data.embed}" border="0" frameborder="0"></iframe>`
    }
  },
  delimiter: () => {
    return '<hr />'
  },
  image: (block) => {
    const stretched = block.data.stretched
    const withBorder = block.data.withBorder
    const withBackground = block.data.withBackground

    return `
      <div class="img${stretched ? ' img-stretched' : ''}${withBorder ? ' img-bordered' : ''}${withBackground ? ' img-with-bg' : ''}">
        <img src="${block.data.file.url}" alt="${block.data.caption}" />
        ${ifprint(!!block.data.caption, `
          <span class="caption${withBackground ? ' bolded-caption positioned-caption' : ''}">${block.data.caption}</span>
        `)}
      </div>
    `
  },
  quote: (block) => {
    return `
      <blockquote>
        <p class="main">${block.data.text}</p>
        <footer class="author">
          <p>&ndash; ${block.data.caption}</p>
        </footer>
      </blockquote>
    `
  }
}

const edjsParser = edjsHTML(customParsers)

export default (ctx, inject) => {
  inject('parseEjs', (data) => {
    return edjsParser.parse(JSON.parse(data))
  })
}
