import { User } from './models/user'
import { RoleEnum } from './models/role.enum'
import { GenderEnum } from './models/gender.enum'

export const USERS_DEFAULT_DATA: User[] = [
  {
    role: RoleEnum.ADMIN,
    givenName: 'Zsolt',
    familyName: 'Szentei',
    birthday: new Date('1983.03.26'),
    eyeColour: 'brown',
    height: 193,
    weight: 92,
    id: 0,
    gender: GenderEnum.MALE,
    hairColour: 'brown',
    mailingAddress: {
      country: 'Magyarország',
      zip: 1138,
      city: 'Budapest',
      streetName: 'Róbert Károly',
      streetType: 'körút',
      streetNumber: 20,
      floor: 9,
      door: 112
    }
  }
]
