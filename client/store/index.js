export const state = () => ({
  type: 'wallet',
  id:0
})

export const mutations = {
  changeTypeToWallet(state) {
    state.type = 'wallet'
  },
  changeTypeToStalking(state) {
    state.type = 'stalking'
  },
  changeTypeToPartners(state) {
    state.type = 'partners'
  },
  changeTypeToSettings(state) {
    state.type = 'settings'
  }
}
