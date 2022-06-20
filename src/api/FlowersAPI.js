import flowers from '../data/flowers.json'
import flowersInfo from '../data/flower-infos.json'

const FlowersAPI = {
  getCategories: () => {
    let categories = []

    flowers.forEach((category) => {
      if(category.hasOwnProperty('category') && !categories.includes(category.category))
        categories.push(category.category)
    })

    return categories.sort()
  },
  getCategoryFlowers: (category, search) => {
    let filteredFlowers = flowers.filter(flower => flower.category === category)
    if(search) {
      filteredFlowers = filteredFlowers.filter(flower => (flower.name.toLowerCase()).includes(search.toLowerCase()))
    }

    return filteredFlowers.sort((a,b) => a.name > b.name ? 1 : -1)
  },
  getFlower: (id) => {
    const flower = flowers.find(flower => flower.id === Number(id))
    const flowerInfo = flowersInfo.find(flower => flower.id === Number(id))
    return { name: flower.name, ...flowerInfo }
  }
}

export default FlowersAPI
