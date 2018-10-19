export default class KeyStore {
  constructor() {
    this.subscribe = []
  }

  add(pro, comp) {
    const findIndex = this.subscribe.findIndex(s => s.key === pro)

    if (findIndex > -1) {
      this.subscribe[findIndex].components = [...this.subscribe[findIndex].components, comp]
    } else {
      this.subscribe.push({
        key: pro,
        components: [comp]
      })
    }
  }

  tigger(pro, newVal) {
    const find = this.subscribe.find(s => s.key === pro)
    find && find.components.forEach(c => {
      c.setState({
        [pro]: newVal
      })
    })
  }
}
