import { Address } from './address'
import { GenderEnum } from './gender.enum'
import { RoleEnum } from './role.enum'

export interface User {
  givenName: string
  familyName: string
  birthday: Date
  male: GenderEnum
  weight: number
  height: number
  eyeColour: string
  hairColour: string
  role: RoleEnum
  mailingAddress?: Address
  billingAddress?: Address
}
