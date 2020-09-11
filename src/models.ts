type TypeSystem = "static" | "dynamic";
type Paradigm = "procedural" | "oop" | "functional";

type FilterKey = "typeSystem" | "paradigm";

interface ProgrammingLanguage {
    name: string,
    typeSystem : TypeSystem,
    paradigms: Paradigm[]
}

interface FilterOption<K = any, V = any> {
    key: K
    value: V ,
    label: string    
}

interface FilterOptionSelection {
    option: FilterOption,
    isSelected: boolean
}

class FilterCriteria {
    private typeSystem:TypeSystem | null;
    private paradigms: Paradigm[];

    constructor(typeSystem:TypeSystem|null = null, paradigms:Paradigm[] = []) {
        this.typeSystem = typeSystem;
        this.paradigms = paradigms;
    }

    setTypeSystem(value:TypeSystem|null):void {
        this.typeSystem = value;
    }

    getTypeSystem():TypeSystem | null {
        return this.typeSystem;
    }

    getParadigms():Paradigm[] {
        return this.paradigms;
    }

    setParadigms(paradigms:Paradigm[]):void {
        this.paradigms = [...paradigms];
    }

    toggleTypeSystem(value:TypeSystem) {
        if(this.typeSystem == value) {
            this.typeSystem = null;
        } else {
            this.typeSystem = value;
        }
    }

    toggleParadigm(value:Paradigm) {
        if(this.paradigms.includes(value)) {
            this.paradigms = this.paradigms.filter(p => p != value);
        } else {
            this.paradigms.push(value);
        }
    }

    matches(lang:ProgrammingLanguage):boolean {
        let matchesTypeSystem:boolean = (this.typeSystem == null) || lang.typeSystem == this.typeSystem;
        let matchesParadigm:boolean = this.paradigms.length == 0 || this.paradigms.every(p => lang.paradigms.includes(p));
        return matchesTypeSystem && matchesParadigm;
    }
}

let toFilterOptionSelections = (filterCriteria:FilterCriteria, filterOptions:FilterOption[]):FilterOptionSelection[] => {
    return filterOptions.map(option => {
        return {
            option: option,
            isSelected: option.value == filterCriteria.getTypeSystem() || filterCriteria.getParadigms().includes(option.value)
        }
    });
};

export {TypeSystem, FilterKey, Paradigm, ProgrammingLanguage, FilterOption, FilterOptionSelection, FilterCriteria, toFilterOptionSelections};