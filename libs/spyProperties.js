export default (obj, prop, component, ks) => {
  const has = Object.prototype.hasOwnProperty.call(obj, prop)
  ks.add(prop, component)

  if (!has) {
    let initVal = obj[prop]

    Object.defineProperty(obj, prop, {
      get() {
        return initVal
      },
      set(newVal) {
        initVal = newVal
        ks.tigger(prop, newVal)
      }
    })
  }
}
