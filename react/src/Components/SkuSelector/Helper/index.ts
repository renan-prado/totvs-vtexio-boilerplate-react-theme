import InterfaceJson from '../SkuSelector.interface.json'

function componentName() {
  const interfaceOptions = Object.keys(InterfaceJson)
  const [appName] = interfaceOptions

  return appName
}

export const COMPONENT_NAME = componentName()
