type TypeSystem = "static" | "dynamic";
type Paradigm = "procedural" | "oop" | "functional";

type FilterKey = "typeSystem" | "paradigm"

interface ProgrammingLanguage {
    name: string,
    typeSystem : TypeSystem,
    paradigms: Paradigm[]
}

interface FilterOption<T = any> {
    key: FilterKey
    value: T ,
    label: string    
}

interface FilterOptionSelection {
    option: FilterOption,
    isSelected: boolean
}

interface FilterCriteria {
    typeSystem: TypeSystem | null,
    paradigms: Paradigm[]
}

export {TypeSystem, Paradigm, ProgrammingLanguage, FilterOption, FilterOptionSelection, FilterCriteria};