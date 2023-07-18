enum Breakpoints {
  XS = "320px",
  SM = "640px",
  MD = "768px",
  LG = "1024px",
  XL = "1280px",
  XXL = "1536px",
}

export enum Devices {
  XS = `(max-width: ${Breakpoints.XS})`,
  SM = `(max-width: ${Breakpoints.SM})`,
  MD = `(max-width: ${Breakpoints.MD})`,
  LG = `(max-width: ${Breakpoints.LG})`,
  XL = `(max-width: ${Breakpoints.XL})`,
  XXL = `(max-width: ${Breakpoints.XXL})`,
}