enum Breakpoints {
  XS = "320px",
  SM = "640px",
  MD = "768px",
  LG = "1024px",
  XL = "1280px",
  XXL = "1536px",
}

export enum Devices {
  MaxXS = `(max-width: ${Breakpoints.XS})`,
  MaxSM = `(max-width: ${Breakpoints.SM})`,
  MaxMD = `(max-width: ${Breakpoints.MD})`,
  MaxLG = `(max-width: ${Breakpoints.LG})`,
  MaxXL = `(max-width: ${Breakpoints.XL})`,
  MaxXXL = `(max-width: ${Breakpoints.XXL})`,
  MinXS = `(max-width: ${Breakpoints.XS})`,
  MinSM = `(max-width: ${Breakpoints.SM})`,
  MinMD = `(max-width: ${Breakpoints.MD})`,
  MinLG = `(max-width: ${Breakpoints.LG})`,
  MinXL = `(max-width: ${Breakpoints.XL})`,
  MinXXL = `(max-width: ${Breakpoints.XXL})`,
}