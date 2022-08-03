import InterfaceJson from '../SkuSelector.interface.json'

export function componentName() {
  const interfaceOptions = Object.keys(InterfaceJson)
  const [appName] = interfaceOptions

  return appName
}

export function templateName(name: string) {
  return `${componentName()}-t--${name}`
}

export function organismName(name: string) {
  return `${componentName()}-o--${name}`
}

export function moleculeName(name: string) {
  return `${componentName()}-m--${name}`
}

export function atomName(name: string) {
  return `${componentName()}-a--${name}`
}
