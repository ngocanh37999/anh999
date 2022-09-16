// export const getUserApi = () =>
//   Promise.resolve({
//     name: 'Alan Walker',
//     age: 23
//   })

export type GetUserApiType = {
  data: {
    name: string
    age: number
  }
  status: number
}

export const getUserApi = () =>
  new Promise<GetUserApiType>(resolve => {
    resolve({
      data: {
        name: 'Alan Walker',
        age: 23
      },
      status: 200
    })
  })
