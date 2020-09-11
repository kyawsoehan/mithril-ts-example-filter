import {ProgrammingLanguage, FilterKey, TypeSystem, Paradigm, FilterOption, FilterCriteria, FilterOptionSelection} from './models';

let typeSystemOptions:FilterOption<FilterKey, TypeSystem>[] = [
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

let paradigmOptions:FilterOption<FilterKey, Paradigm>[] = [
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

export function getTypeSystemFilters(): FilterOption[] {
    return [...typeSystemOptions];
}

export function getParadigmFilters(): FilterOption[] {
    return [...paradigmOptions];
}