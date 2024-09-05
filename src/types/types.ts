export interface VehicleTypesResponce {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Result[]
}

export interface Result {
  MakeId: number
  MakeName: string
  VehicleTypeId: number
  VehicleTypeName: string
}
