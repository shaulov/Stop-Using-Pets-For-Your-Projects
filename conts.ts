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
  MinXS = `(min-width: ${Breakpoints.XS})`,
  MinSM = `(min-width: ${Breakpoints.SM})`,
  MinMD = `(min-width: ${Breakpoints.MD})`,
  MinLG = `(min-width: ${Breakpoints.LG})`,
  MinXL = `(min-width: ${Breakpoints.XL})`,
  MinXXL = `(min-width: ${Breakpoints.XXL})`,
}

export const SHORT_DESCRIPTION_LENGTH = 210;
export const DESCRIPTION_PLACEHOLDER = 'Project has no description';
export const IMAGE_PLACEHOLDER = '/image/project.avif';
export const TAGS_PLACEHOLDER = ['no tags'];