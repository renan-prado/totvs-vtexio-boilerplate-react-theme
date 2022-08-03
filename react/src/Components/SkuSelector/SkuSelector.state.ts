import create from 'zustand'

interface IHookUseText {
  text: string
  setText: (text: string) => void
  clearText: () => void
}

const useText = create<IHookUseText>(set => ({
  text: 'Texto Inicial',
  setText: text => set({ text }),
  clearText: () => set({ text: '' }),
}))

export { useText }
