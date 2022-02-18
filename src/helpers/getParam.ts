import { IParam } from '@types'
import Env from '@config/env'
import { SM } from '@config/handleResp'

export const getParam = (param: string): IParam => {
  let paramField: IParam = {}
  if (isValidID(param)) {
    paramField._id = param
  }

  if (Env.CATEGORIES.some((category) => isValidCategory(category, param))) {
    paramField.category = param
  }

  if (Object.entries(paramField).length > 0) {
    return paramField
  } else {
    throw SM.sendMessageError('invalidParam')
  }
}

const isValidID = (id: string) => {
  return id.length === 24
}

const isValidCategory = (category: string, param: string): boolean => {
  return category === param
}
