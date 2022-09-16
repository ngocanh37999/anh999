// export const payloadCreator =
//   (asyncFunc: any) => async (arg: any, thunkAPI: any) => {
//     try {
//       const res = await asyncFunc(arg)
//       return res
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error)
//     }

// const payloadCreator: (asyncFunc: any) => (arg: any, thunkAPI: any) => Promise<any>

type payloadCreatorZZ = (
  asyncFunc: any
) => (arg: any, thunkAPI: any) => Promise<any>

export const payloadCreator: payloadCreatorZZ =
  asyncFunc => async (arg, thunkAPI) => {
    try {
      const res = await asyncFunc(arg)
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
//
type NameAndId = {
  name: string
  _id: string
}
export const generateNameId = ({ name, _id }: NameAndId) =>
  encodeURIComponent(`${name.replace(/\s/g, '-').replace(/%/g, '')}-i.${_id}`)

//
export const formatMoney = (value: any, character = '.') =>
  String(value).replace(/\B(?=(\d{3})+(?!\d))/g, character)

export const formatK = (value: any) => {
  const price = Number((Number(value) / 1000).toFixed(2))
  if (price > 1) {
    return price + 'k'
  }
  return value
}
type GetSearchItems = {
  name: string
  _id: string
}[]
export const getSearchItems = (
  searchValue: string,
  arrayApi: GetSearchItems
) => {
  if (!searchValue) {
    return []
  }
  return arrayApi.filter(objApi =>
    objApi.name.toLowerCase().includes(searchValue.toLowerCase())
  )
}

//
export const getIdFromNameId = (url: any) => {
  const arr = url.split('-i.')
  return arr[arr.length - 1]
}

//
export const rateSale = (original: number, sale: number) =>
  Math.round(((original - sale) / original) * 100) + '%'

//
export const isEmail = (value: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  )

//
export const randomNumber = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//
export const randomPosOrNeg = (max: number, min: number) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  randomNumber *= Math.floor(Math.random() * 2) === 1 ? 1 : -1
  return randomNumber
}

//
type TotalUpdate = {
  quantity: number
  unitPrice: number
}[]
export const totalUpdate = (arr: TotalUpdate) => {
  const _total = arr.reduce((currentTotal, obj) => {
    return currentTotal + obj.quantity * obj.unitPrice
  }, 0)
  return _total
}

//
type NameOrFirstNameOrLastNameLowToHeightArr = {
  first_name: string
}[]
export const nameOrFirstNameOrLastNameLowToHeightArr = (
  arr: NameOrFirstNameOrLastNameLowToHeightArr
) => {
  const result = arr.sort((a, b) => {
    if (a.first_name > b.first_name) {
      return 1
    } else if (a.first_name < b.first_name) {
      return -1
    } else {
      return 0
    }
  })
  return result
}

//
type NameOrFirstNameOrLastNameHeightToLowArr = {
  first_name: string
}[]
export const nameOrFirstNameOrLastNameHeightToLowArr = (
  arr: NameOrFirstNameOrLastNameHeightToLowArr
) => {
  const result = arr.sort((a, b) => {
    if (a.first_name < b.first_name) {
      return 1
    } else if (a.first_name > b.first_name) {
      return -1
    } else {
      return 0
    }
  })
  return result
}

//
type PriceOrSalaryOrAgeLowToHeightArr = {
  age: number
}[]
export const priceOrSalaryOrAgeLowToHeightArr = (
  arr: PriceOrSalaryOrAgeLowToHeightArr
) => {
  const result = arr.sort((a, b) => {
    return a.age - b.age
  })
  return result
}

//
type PriceOrSalaryOrAgeHeighToLowtArr = {
  age: number
}[]
export const priceOrSalaryOrAgeHeighToLowtArr = (
  arr: PriceOrSalaryOrAgeHeighToLowtArr
) => {
  const result = arr.sort((a, b) => {
    return b.age - a.age
  })
  return result
}
