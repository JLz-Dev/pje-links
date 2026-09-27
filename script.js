const states = [
  { code: 'AC', sigla: 'AC', name: 'Acre', trt: '14' , trf: '1' },
  { code: 'AL', sigla: 'AL', name: 'Alagoas', trt: '19' , trf: '5' },
  { code: 'AP', sigla: 'AP', name: 'Amapá', trt: '8' , trf: '1' },
  { code: 'AM', sigla: 'AM', name: 'Amazonas', trt: '11' , trf: '1' },
  { code: 'BA', sigla: 'BA', name: 'Bahia', trt: '5' , trf: '1' },
  { code: 'CE', sigla: 'CE', name: 'Ceará', trt: '7' , trf: '5' },
  { code: 'DF', sigla: 'DF', name: 'Distrito Federal', tribunal: 'TJDFT', trt: '10' , trf: '1' },
  { code: 'ES', sigla: 'ES', name: 'Espírito Santo', trt: '17' , trf: '2' },
  { code: 'GO', sigla: 'GO', name: 'Goiás', trt: '18' , trf: '1' },
  { code: 'MA', sigla: 'MA', name: 'Maranhão', trt: '16' , trf: '1' },
  { code: 'MT', sigla: 'MT', name: 'Mato Grosso', trt: '23' , trf: '1' },
  { code: 'MS', sigla: 'MS', name: 'Mato Grosso do Sul', trt: '24' , trf: '3' },
  { code: 'MG', sigla: 'MG', name: 'Minas Gerais', trt: '3' , trf: '6' },
  { code: 'PR', sigla: 'PR', name: 'Paraná', trt: '9' , trf: '4' },
  { code: 'PB', sigla: 'PB', name: 'Paraíba', trt: '13' , trf: '5' },
  { code: 'PA', sigla: 'PA', name: 'Pará', trt: '8' , trf: '1' },
  { code: 'PE', sigla: 'PE', name: 'Pernambuco', trt: '6' , trf: '5' },
  { code: 'PI', sigla: 'PI', name: 'Piauí', trt: '22' , trf: '1' },
  { code: 'RN', sigla: 'RN', name: 'Rio Grande do Norte', trt: '21' , trf: '5' },
  { code: 'RS', sigla: 'RS', name: 'Rio Grande do Sul', trt: '4' , trf: '4' },
  { code: 'RJ', sigla: 'RJ', name: 'Rio de Janeiro', trt: '1' , trf: '2' },
  { code: 'RO', sigla: 'RO', name: 'Rondônia', trt: '14' , trf: '1' },
  { code: 'RR', sigla: 'RR', name: 'Roraima', trt: '11' , trf: '1' },
  { code: 'SC', sigla: 'SC', name: 'Santa Catarina', trt: '12' , trf: '4' },
  { code: 'SE', sigla: 'SE', name: 'Sergipe', trt: '20' , trf: '5' },
  { code: 'SP', sigla: 'SP', name: 'São Paulo', trt: '2' , trf: '3' },
  { code: 'TO', sigla: 'TO', name: 'Tocantins', trt: '10' , trf: '1' },
]

const trtRegions = {
  '1': {
    first: 'https://pje.trt1.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt1.jus.br/segundograu/login.seam',
  },
  '2': {
    first: 'https://pje.trt2.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt2.jus.br/segundograu/login.seam',
  },
  '3': {
    first: 'https://pje.trt3.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt3.jus.br/segundograu/login.seam',
  },
  '4': {
    first: 'https://pje.trt4.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt4.jus.br/segundograu/login.seam',
  },
  '5': {
    first: 'https://pje.trt5.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt5.jus.br/segundograu/login.seam',
  },
  '6': {
    first: 'https://pje.trt6.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt6.jus.br/segundograu/login.seam',
  },
  '7': {
    first: 'https://pje.trt7.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt7.jus.br/segundograu/login.seam',
  },
  '8': {
    first: 'https://pje.trt8.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt8.jus.br/segundograu/login.seam',
  },
  '9': {
    first: 'https://pje.trt9.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt9.jus.br/segundograu/login.seam',
  },
  '10': {
    first: 'https://pje.trt10.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt10.jus.br/segundograu/login.seam',
  },
  '11': {
    first: 'https://pje.trt11.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt11.jus.br/segundograu/login.seam',
  },
  '12': {
    first: 'https://pje.trt12.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt12.jus.br/segundograu/login.seam',
  },
  '13': {
    first: 'https://pje.trt13.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt13.jus.br/segundograu/login.seam',
  },
  '14': {
    first: 'https://pje.trt14.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt14.jus.br/segundograu/login.seam',
  },
  '16': {
    first: 'https://pje.trt16.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt16.jus.br/segundograu/login.seam',
  },
  '17': {
    first: 'https://pje.trt17.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt17.jus.br/segundograu/login.seam',
  },
  '18': {
    first: 'https://pje.trt18.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt18.jus.br/segundograu/login.seam',
  },
  '19': {
    first: 'https://pje.trt19.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt19.jus.br/segundograu/login.seam',
  },
  '20': {
    first: 'https://pje.trt20.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt20.jus.br/segundograu/login.seam',
  },
  '21': {
    first: 'https://pje.trt21.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt21.jus.br/segundograu/login.seam',
  },
  '22': {
    first: 'https://pje.trt22.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt22.jus.br/segundograu/login.seam',
  },
  '23': {
    first: 'https://pje.trt23.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt23.jus.br/segundograu/login.seam',
  },
  '24': {
    first: 'https://pje.trt24.jus.br/primeirograu/login.seam',
    second: 'https://pje.trt24.jus.br/segundograu/login.seam',
  },
}

const trfRegions = {
  '1': {
    first: 'https://pje1g.trf1.jus.br',
    second: 'https://pje2g.trf1.jus.br',
  },
  '2': {
    first: 'https://pje1g.trf2.jus.br',
    second: 'https://pje2g.trf2.jus.br',
  },
  '3': {
    first: 'https://pje1g.trf3.jus.br',
    second: 'https://pje2g.trf3.jus.br',
  },
  '4': {
    first: 'https://pje1g.trf4.jus.br',
    second: 'https://pje2g.trf4.jus.br',
  },
  '5': {
    first: 'https://pje1g.trf5.jus.br',
    second: 'https://pje2g.trf5.jus.br',
  },
  '6': {
    first: 'https://pje1g.trf6.jus.br',
    second: 'https://pje2g.trf6.jus.br',
  },
}

const courts = {
  AM: {
    first: 'https://consultasaj.tjam.jus.br/cpopg/open.do',
    second: 'https://consultasaj.tjam.jus.br/cposgcr/open.do',
  },
  ES: {
    first: 'https://pje.tjes.jus.br/pje/login.seam',
    second: 'https://pje.tjes.jus.br/pje2g/login.seam',
  },
  GO: {
    first: 'https://projudi.tjgo.jus.br/BuscaProcesso?PaginaAtual=4',
  },
  MA: {
    first: 'https://pje.tjma.jus.br/pje/login.seam',
    second: 'https://pje2.tjma.jus.br/pje2g/login.seam',
    extra: {
      label: 'JurisConsult',
      href: 'https://jurisconsult.tjma.jus.br/#/home',
    },
  },
  MG: {
    first: 'https://pje.tjmg.jus.br/pje/login.seam',
    second: 'https://pe.tjmg.jus.br/rupe/portaljus/intranet/principal.rupe',
  },
  PA: {
    first: 'https://pje.tjpa.jus.br/pje/login.seam',
    second: 'https://pje.tjpa.jus.br/pje-2g/login.seam',
  },
  PE: {
    first: 'https://pje.tjpe.jus.br/1g/login.seam',
    second: 'https://pje.tjpe.jus.br/2g/login.seam',
  },
  PI: {
    first: 'https://pje.tjpi.jus.br/1g/login.seam',
    second: 'https://pje.tjpi.jus.br/2g/login.seam',
  },
  RJ: {
    first: 'https://tjrj.pje.jus.br/1g/login.seam',
    second: 'https://tjrj.pje.jus.br/2g/login.seam',
  },
  SP: {
    first: 'https://esaj.tjsp.jus.br/cpopg/open.do',
    second: 'https://esaj.tjsp.jus.br/cposg/open.do',
  },
  DF: {
    extra: {
      label: 'Juriscalc',
      href: 'https://juriscalc.tjdft.jus.br/publico/calculos',
    },
  },
}

const federal = [
  {
    tribunal: 'STJ',
    label: 'Consulta',
    href: 'https://www.stj.jus.br/sites/portalp/Processos/Consulta-Processual',
  },
]

const DEFAULT_STATE = 'MA'

const normalize = text =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

const mapElement = document.getElementById('map')
const tipElement = document.getElementById('tip')
const filterElement = document.getElementById('filter')
const cardsElement = document.getElementById('cards')
const federalElement = document.getElementById('federal-cards')
const noMatchElement = document.getElementById('noMatch')
const siglaElement = document.getElementById('detail-sigla')
const nameElement = document.getElementById('detail-name')

const buildCard = ({ tribunal, label, href }) => {
  const card = document.createElement('a')
  const title = document.createElement('span')
  const degree = document.createElement('p')

  card.className = 'card'
  card.setAttribute('aria-label', `${tribunal} ${label}`)
  title.textContent = tribunal
  degree.textContent = label

  if (href) {
    card.href = href
    card.target = '_blank'
    card.rel = 'noopener noreferrer'
    card.append(title, degree)
    return card
  }

  const badge = document.createElement('span')
  badge.className = 'badge'
  badge.textContent = 'link pendente'

  card.setAttribute('aria-disabled', 'true')
  card.append(title, degree, badge)
  return card
}

const buildSubtitle = text => {
  const heading = document.createElement('h3')
  heading.className = 'sub'
  heading.textContent = text
  return heading
}

const nodes = new Map(
  states.map(state => [
    state.code,
    {
      state,
      path: mapElement.querySelector(`#BR${state.code}`),
      search: normalize(`${state.name} ${state.sigla}`),
    },
  ])
)

let selected = DEFAULT_STATE
let usingKeyboard = false

const renderCards = code => {
  const { state } = nodes.get(code)
  const tribunal = state.tribunal ?? `TJ ${state.sigla}`
  const links = courts[code] ?? {}
  const trt = trtRegions[state.trt]
  const trf = trfRegions[state.trf]

  const parts = [
    buildCard({ tribunal, label: '1º Grau', href: links.first }),
    buildCard({ tribunal, label: '2º Grau', href: links.second }),
  ]

  if (links.extra) {
    parts.push(
      buildCard({ tribunal, label: links.extra.label, href: links.extra.href })
    )
  }

  if (trt) {
    const trtName = `TRT ${state.sigla}`

    parts.push(
      buildSubtitle('Tribunal Regional do Trabalho'),
      buildCard({ tribunal: trtName, label: '1º Grau', href: trt.first }),
      buildCard({ tribunal: trtName, label: '2º Grau', href: trt.second })
    )
  }

  if (trf) {
    const trfName = `TRF ${state.sigla}`

    parts.push(
      buildSubtitle('Tribunal Regional Federal'),
      buildCard({ tribunal: trfName, label: '1º Grau', href: trf.first }),
      buildCard({ tribunal: trfName, label: '2º Grau', href: trf.second })
    )
  }

  cardsElement.replaceChildren(...parts)
}

const paint = () => {
  for (const [code, { path }] of nodes) {
    const isSelected = code === selected
    path.classList.toggle('is-selected', isSelected)
    path.setAttribute('aria-pressed', String(isSelected))
  }
}

const select = code => {
  if (!nodes.has(code)) return

  selected = code
  const { sigla, name } = nodes.get(code).state

  siglaElement.textContent = sigla
  nameElement.textContent = name
  renderCards(code)
  paint()
}

const highlight = query => {
  if (!query) {
    for (const { path } of nodes.values()) {
      path.classList.remove('is-match', 'is-dimmed')
    }
    noMatchElement.hidden = true
    return
  }

  let found = 0
  let only = null

  for (const [code, { path, search }] of nodes) {
    const match = search.includes(query)
    path.classList.toggle('is-match', match)
    path.classList.toggle('is-dimmed', !match)
    if (match) {
      found++
      only = code
    }
  }

  noMatchElement.hidden = found > 0
  if (found === 1) select(only)
}

const showTip = (event, text) => {
  const box = mapElement.getBoundingClientRect()

  tipElement.textContent = text
  tipElement.hidden = false
  tipElement.style.left = `${event.clientX - box.left}px`
  tipElement.style.top = `${event.clientY - box.top}px`
}

const hideTip = () => {
  tipElement.hidden = true
}

for (const [code, { state, path }] of nodes) {
  path.addEventListener('click', () => select(code))

  path.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      select(code)
    }
  })

  path.addEventListener('mouseenter', event => showTip(event, state.name))
  path.addEventListener('mousemove', event => showTip(event, state.name))
  path.addEventListener('mouseleave', hideTip)

  path.addEventListener('focus', () => {
    path.classList.toggle('is-focus', usingKeyboard)
    tipElement.textContent = state.name
    tipElement.hidden = false
  })

  path.addEventListener('blur', () => {
    path.classList.remove('is-focus')
    hideTip()
  })
}

document.addEventListener('keydown', event => {
  if (event.key === 'Tab') usingKeyboard = true
})

document.addEventListener('pointerdown', () => {
  usingKeyboard = false
  hideTip()
})

filterElement.addEventListener('input', event => highlight(normalize(event.target.value)))

federalElement.replaceChildren(...federal.map(buildCard))
select(DEFAULT_STATE)
