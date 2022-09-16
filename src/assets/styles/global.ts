class Global {
  bg: string
  bgAccent: string
  textColor: string
  navSize: number
  border: string
  borderRadius: number
  speed: number
  constructor() {
    this.bg = '#242526'
    this.bgAccent = '#484a4d'
    this.textColor = '#đace1'
    this.navSize = 60
    this.border = '#474a4d'
    this.borderRadius = 8
    this.speed = 500
  }
  center() {
    // Ví dụ mẫu: phần sau làm tương tự
    // phần tử cha (component cha) là: position: relative; width: 100%;  height: 50rem; (width, height tùy ý)

    // <div css --> position: relative; width: 100%;  height: 50rem;>
    // <div ${global.center} ></div>
    // </div>

    return 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'
    // return 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 5rem; height: 5rem; background-color: red;'
  }
  centerWidth() {
    return 'position: absolute; left: 50%; transform: translateX(-50%);'
    // return 'position: absolute; left: 50%; transform: translateX(-50%); width: 5rem; height: 5rem; background-color: red;'
  }
  centerHeight() {
    return 'position: absolute; top: 50%; transform: translateY(-50%);'
    // return 'position: absolute; top: 50%; transform: translateY(-50%); width: 5rem; height: 5rem; background-color: red;'
  }
}
const global = new Global()
export default global
