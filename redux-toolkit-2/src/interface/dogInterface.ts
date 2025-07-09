export interface IDog {
  id: string;
  type: string;
  attributes: {
    name: string;
    description: string;
    life: {
      min: number;
      max: number;
    };
    male_weight: {
      min: number;
      max: number;
    };
    female_weight: {
      min: number;
      max: number;
    };
    hypoallergenic: boolean;
  };
  relationships: {
    group: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}

export interface IPaginationMeta {
  pagination: {
    current: number;
    next: number | null;
    last: number;
    records: number;
  };
}

export interface IDogAPIResponse {
  data: IDog[];     
  meta: IPaginationMeta;
  links: {
    self: string;
    current: string;
    next?: string;
    last: string;
  };
}