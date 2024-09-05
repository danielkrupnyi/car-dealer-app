export interface VehicleTypesResponce {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleTypesResultResponce[];
}

export interface VehicleTypesResultResponce {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export interface ModelsResponce {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: ModelsResultResponce[];
}

export interface ModelsResultResponce {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}
