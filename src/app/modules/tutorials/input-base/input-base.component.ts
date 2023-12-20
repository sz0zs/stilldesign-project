import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { USERS_DEFAULT_DATA } from '../../../core/data'
import { RoleEnum } from '../../../core/models/role.enum'
import { GenderEnum } from '../../../core/models/gender.enum'
import { User } from '../../../core/models/user'

export interface Option<T> {
  value: T
  label: string
}

export interface TableHeader extends TableCellBase {}

export interface TableRow {
  cells: TableCell[]
  id?: number
}

export interface TableCell extends TableCellBase {}

export interface TableCellBase {
  property: string
  label: string
}

interface AddressForm {
  zip: FormControl<number | null>
  streetName: FormControl<string | null>
  streetType: FormControl<string | null>
  country: FormControl<string | null>
  city: FormControl<string | null>
  streetNumber: FormControl<number | null>
  floor: FormControl<number | null>
  door: FormControl<number | null>
  building: FormControl<string | null>
  other: FormControl<string | null>
}

interface UserForm {
  givenName: FormControl<string | null>
  familyName: FormControl<string | null>
  birthday: FormControl<Date | null>
  gender: FormControl<GenderEnum | null>
  weight: FormControl<number | null>
  height: FormControl<number | null>
  eyeColour: FormControl<string | null>
  hairColour: FormControl<string | null>
  id: FormControl<number | null>
  role: FormControl<RoleEnum | null>
  mailingAddress: FormGroup<AddressForm>
  billingAddress: FormGroup<AddressForm>
}

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-base.component.html',
  styleUrl: './input-base.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputBaseComponent {
  // private _users = [...USERS_DEFAULT_DATA]
  private _users = signal(USERS_DEFAULT_DATA)
  headers: TableHeader[] = HEADER
  rows = computed(() =>
    this._users().map((user) => ({
      id: user.id,
      cells: [
        {
          label: `${user.familyName} ${user.givenName}`,
          property: this.headers.at(0)!.property
        },
        {
          label: user.birthday?.toLocaleString(),
          property: this.headers.at(1)!.property
        },
        {
          label: `${user.mailingAddress.zip} ${user.mailingAddress.city}, ${user.mailingAddress.streetName} ${user.mailingAddress.streetType} ${user.mailingAddress.streetNumber}.`,
          property: this.headers.at(2)!.property
        }
      ]
    }))
  )
  form: FormGroup<UserForm> | undefined
  genderOptions: Option<GenderEnum>[] = [
    {
      label: 'Férfi',
      value: GenderEnum.MALE
    },
    {
      label: 'Nő',
      value: GenderEnum.FEMALE
    }
  ]
  roleOptions: Option<RoleEnum>[] = [
    {
      label: 'Adminisztrátor',
      value: RoleEnum.ADMIN
    },
    {
      label: 'Vendég',
      value: RoleEnum.GUEST
    },
    {
      label: 'Felhasználó',
      value: RoleEnum.USER
    }
  ]

  constructor(private _fb: FormBuilder) {}

  tableRowClicked($index: number) {
    this._createForm()
    this.form!.patchValue(this._users().at($index)!)
  }

  newUser() {
    this._createForm()
  }

  cancelUser() {
    this.form = undefined
  }

  saveUser() {
    const newValue = this.form!.getRawValue() as User
    const index = newValue.id === null ? -1 : this._users().findIndex((user) => user.id === +newValue.id!)
    if (index >= 0) {
      this._users.update((users) => {
        const clonedUsers = [...users]
        clonedUsers[index] = newValue
        return clonedUsers
      })
    } else {
      newValue.id = Math.max(...this._users().map((user) => user.id)) + 1
      this._users.update((users) => [...users, newValue])
    }
    this.cancelUser()
  }

  private _createForm() {
    this.form = this._fb.group({
      givenName: this._fb.control<string | null>(null),
      familyName: this._fb.control<string | null>(null),
      birthday: this._fb.control<Date | null>(null),
      gender: this._fb.control<GenderEnum | null>(null),
      weight: this._fb.control<number | null>(null),
      height: this._fb.control<number | null>(null),
      eyeColour: this._fb.control<string | null>(null),
      hairColour: this._fb.control<string | null>(null),
      id: this._fb.control<number | null>(null),
      role: this._fb.control<RoleEnum | null>(null),
      mailingAddress: this._fb.group<AddressForm>({
        zip: this._fb.control<null>(null),
        streetName: this._fb.control<null>(null),
        streetType: this._fb.control<null>(null),
        country: this._fb.control<null>(null),
        city: this._fb.control<null>(null),
        streetNumber: this._fb.control<null>(null),
        floor: this._fb.control<null>(null),
        door: this._fb.control<null>(null),
        building: this._fb.control<null>(null),
        other: this._fb.control<null>(null)
      }),
      billingAddress: this._fb.group<AddressForm>({
        zip: this._fb.control(null),
        streetName: this._fb.control(null),
        streetType: this._fb.control(null),
        country: this._fb.control(null),
        city: this._fb.control(null),
        streetNumber: this._fb.control(null),
        floor: this._fb.control(null),
        door: this._fb.control(null),
        building: this._fb.control(null),
        other: this._fb.control(null)
      })
    })
  }
}

const HEADER: TableHeader[] = [
  {
    label: 'Név',
    property: 'fullName'
  },
  {
    label: 'Született',
    property: 'birth'
  },
  {
    label: 'Cím',
    property: 'address'
  }
]
