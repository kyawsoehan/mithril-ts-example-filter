import {ProgrammingLanguage, Paradigm} from './models';

let langauages:ProgrammingLanguage[] = [
    {
        name: "C",
        typeSystem: "static",
        paradigms: ["procedural"]
    },
    {
        name: "BASIC",
        typeSystem: "static",
        paradigms: ["procedural"]
    },
    {
        name: "PHP",
        typeSystem: "dynamic",
        paradigms: ["procedural", "oop"]
    },
    {
        name: "Ruby",
        typeSystem: "dynamic",
        paradigms: ["procedural", "oop"]
    },
    {
        name: "Java",
        typeSystem: "static",
        paradigms: ["procedural", "oop"]
    },
    {
        name: "Javascript",
        typeSystem: "dynamic",
        paradigms: ["procedural", "oop", "functional"]
    },
    {
        name: "Scala",
        typeSystem: "static",
        paradigms: ["procedural", "oop", "functional"]
    },
    {
        name: "kotlin",
        typeSystem: "static",
        paradigms: ["procedural", "oop", "functional"]
    },
    {
        name: "C++",
        typeSystem: "static",
        paradigms: ["procedural", "oop"]
    },
    {
        name: "Haskell",
        typeSystem: "static",
        paradigms: ["functional"]
    }
];

export function getData() : ProgrammingLanguage[] {
    return langauages;
}