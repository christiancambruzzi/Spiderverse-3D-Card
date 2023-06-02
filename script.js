const spiderListSelection = document.querySelectorAll('.spider')

const spidersCards = document.querySelectorAll('.spider-card')

spiderListSelection.forEach(spider => {
  spider.addEventListener('click', () => {
    const openedSpiderCard = document.querySelector('.open')

    openedSpiderCard.classList.remove('open')

    const selectedSpiderID = spider.attributes.id.value

    const spiderCardToOpenID = `card-${selectedSpiderID}`
    const spiderCardToOpen = document.getElementById(spiderCardToOpenID)

    spiderCardToOpen.classList.add('open')

    const activeSpiderOnList = document.querySelector('.active')
    activeSpiderOnList.classList.remove('active')

    const selectedSpiderOnList = document.getElementById(selectedSpiderID)
    selectedSpiderOnList.classList.add('active')
  })
})