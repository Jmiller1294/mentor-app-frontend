/* eslint-disable import/no-anonymous-default-export */

const size = {
  xs: '320px',
  sm: '768px',
  lg: '1200px'
}

const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-widht: ${size.sm})`,
  lg: `(min-width: ${size.lg})`
}
export default {size, device}