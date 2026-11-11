export interface SelectedFilters {
  [key: string]: string[];
}

export interface FilterOption {
  label: string;
  match: (val: any) => boolean;
}

export interface FilterDetail {
  dataPath: string;
  options: FilterOption[];
}

export type FiltersConfigType = Record<string, string | FilterDetail>;
