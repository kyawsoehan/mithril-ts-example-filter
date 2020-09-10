import {ProgrammingLanguage, TypeSystem, Paradigm, FilterOption, FilterCriteria, FilterOptionSelection} from './models';

let typeSystemOptions:FilterOption<TypeSystem>[] = [
    {
        label: "Static",
        key: "typeSystem",
        value: "static"
    },
    {
        label: "Dynamic",
        key: "typeSystem",
        value: "dynamic"
    }
];

let paradigmOptions:FilterOption<Paradigm>[] = [
    {
        label: "Procedural",
        key: "paradigm",
        value: "procedural"
    },
    {
        label: "Object Oriented",
        key: "paradigm",
        value: "oop"
    },
    {
        label: "Functional",
        key: "paradigm",
        value: "functional"
    }
];

export function getAllFilters(): FilterOption[] {
    return [...typeSystemOptions, ...paradigmOptions];
}