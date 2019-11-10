export interface ICatagloryInfo {
    [k: string]: IPersonInfo[]
  }
  
  export interface IPersonInfo {
    name: string
    field: string
    description: string,
    img: string,
  }