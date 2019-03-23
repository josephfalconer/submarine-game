export const SIMPLE_STATE_UPDATE = 'SIMPLE_STATE_UPDATE';
export function updateStoreState(payload) {
  return {
    type: SIMPLE_STATE_UPDATE,
    payload
  }
}
