const siteList = [
  {
    site: 'TJ MA',
    name: '1º Grau',
    link: 'https://pje.tjma.jus.br/pje/login.seam',
  },
  {
    site: 'TJ MA',
    name: '2º Grau',
    link: 'https://pje2.tjma.jus.br/pje2g/login.seam',
  },
  {
    site: 'TJ MA',
    name: 'JurisConsult',
    link: 'https://jurisconsult.tjma.jus.br/#/home',
  },
  {
    site: 'STJ',
    name: 'Consulta',
    link: 'https://www.stj.jus.br/sites/portalp/Processos/Consulta-Processual'
  },
  {
    site: 'TJ PA',
    name: '1º Grau',
    link: 'https://pje.tjpa.jus.br/pje/login.seam',
  },
  {
    site: 'TJ PA',
    name: '2º Grau',
    link: 'https://pje.tjpa.jus.br/pje-2g/login.seam',
  },
  {
    site: 'TJ PE',
    name: '1º Grau',
    link: 'https://pje.tjpe.jus.br/1g/login.seam',
  },
  {
    site: 'TJ PE',
    name: '2º Grau',
    link: 'https://pje.tjpe.jus.br/2g/login.seam',
  },
  {
    site: 'TJ PI',
    name: '1º Grau',
    link: 'https://pje.tjpi.jus.br/1g/login.seam',
  },
  {
    site: 'TJ PI',
    name: '2º Grau',
    link: 'https://pje.tjpi.jus.br/2g/login.seam',
  },
  {
    site: 'TJ MG',
    name: '1º Grau',
    link: 'https://pje.tjmg.jus.br/pje/login.seam',
  },
  {
    site: 'TJ MG',
    name: '2º Grau',
    link: 'https://pe.tjmg.jus.br/rupe/portaljus/intranet/principal.rupe',
  },
  {
    site: 'TJ ES',
    name: '1º Grau',
    link: 'https://pje.tjes.jus.br/pje/login.seam',
  },
  {
    site: 'TJ ES',
    name: '2º Grau',
    link: 'https://pje.tjes.jus.br/pje2g/login.seam',
  },
  {
    site: 'TJ SP',
    name: '1º Grau',
    link: 'https://esaj.tjsp.jus.br/cpopg/open.do',
  },
  {
    site: 'TJ SP',
    name: '2º Grau',
    link: 'https://esaj.tjsp.jus.br/cposg/open.do',
  },
  {
    site: 'TJ RJ',
    name: '1º Grau',
    link: 'https://tjrj.pje.jus.br/1g/login.seam',
  },
  {
    site: 'TJ RJ',
    name: '2º Grau',
    link: 'https://tjrj.pje.jus.br/2g/login.seam',
  },
  {
    site: 'TRT MA',
    name: '1º Grau',
    link: 'https://pje.trt16.jus.br/primeirograu/login.seam',
  },
  {
    site: 'TRT MA',
    name: '2º Grau',
    link: 'https://pje.trt16.jus.br/segundograu/login.seam',
  },
  {
    site: 'TRT PA',
    name: '1º Grau',
    link: 'https://pje.trt8.jus.br/primeirograu/login.seam',
  },
  {
    site: 'TRT PA',
    name: '2º Grau',
    link: 'https://pje.trt8.jus.br/segundograu/login.seam',
  },
  {
    site: 'TJ GO',
    name: '1º Grau',
    link: 'https://projudi.tjgo.jus.br/BuscaProcesso?PaginaAtual=4',
  },
  {
    site: 'TJ AM',
    name: '1º Grau',
    link: 'https://consultasaj.tjam.jus.br/cpopg/open.do',
  },
  {
    site: 'TJ AM',
    name: '2º Grau',
    link: 'https://consultasaj.tjam.jus.br/cposgcr/open.do',
  },
  {
    site: 'TRF 1',
    name: '1º Grau',
    link: 'https://pje1g.trf1.jus.br/pje/login.seam',
  },
  {
    site: 'TRF 1',
    name: '2º Grau',
    link: 'https://pje2g.trf1.jus.br/pje/login.seam',
  },
  {
    site: 'TJDFT',
    name: 'Juriscalc',
    link: 'https://juriscalc.tjdft.jus.br/publico/calculos',
  },
  
]

const sites = document.getElementById('cards')
const filterElement = document.querySelector('#filter')

siteList.map(({ site, name, link }) => {
  sites.innerHTML += `
      <a class="card" href="${link}" target="_blank">
      <h2>${site}</h2>
      <p>${name}</p>
      </a>
  `
})

const showPostInputValue = inputValue => card => {
  const cardTitle = card.querySelector('h2').textContent.toLowerCase()
  const cardBody = card.querySelector('p').textContent.toLowerCase()
  const cardContainsInput = cardTitle.includes(inputValue) || cardBody.includes(inputValue)

  if (cardContainsInput) {
    card.style.display = 'flex'
    return
  }
  card.style.display = 'none'
}

const handleInputValue = event => {
  const inputValue = event.target.value.toLowerCase()
  const cards = document.querySelectorAll('.card')

  cards.forEach(showPostInputValue(inputValue))
}

filterElement.addEventListener('input', handleInputValue)
