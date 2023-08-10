import { ProjectData, Project } from "@/type"
import { SHORT_DESCRIPTION_LENGTH, DESCRIPTION_PLACEHOLDER, IMAGE_PLACEHOLDER, TAGS_PLACEHOLDER } from "@/conts"

export const transformSingleProjectData = (data: ProjectData): Project => {
  const description = data.description
    ? `${data.description.substring(0, SHORT_DESCRIPTION_LENGTH)}`
    : DESCRIPTION_PLACEHOLDER;
  return {
    id: data.id,
    title: data.title,
    tags: data.tags || TAGS_PLACEHOLDER,
    description: description,
    fullDescription: data.description || DESCRIPTION_PLACEHOLDER,
    imgUrl: data.imgUrl || IMAGE_PLACEHOLDER,
  }
}

export const transformProjectsData = (data: ProjectData[]): Project[] => {
  return data.map(transformSingleProjectData);
}