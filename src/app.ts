import * as m from 'mithril';

import SettingView from './components/SettingView';
import ResultFilterView from './components/ResultFilterView';
import {ProgrammingLanguage, FilterOption, FilterCriteria, FilterOptionSelection} from './models';
import {getData} from './datastore';
import {getAllFilters} from './filterConfig';

let langauages:ProgrammingLanguage[] = getData();
let filterOptions:FilterOption[] = getAllFilters();

function MainComponent(): m.Component<{}> {
    let filterCriteria:FilterCriteria = {
        typeSystem: null,
        paradigms: []
    };

    let filterLanguage = (langauages:ProgrammingLanguage[]):ProgrammingLanguage[] => {
        return langauages.filter(lang => 
            (filterCriteria.typeSystem == null) || lang.typeSystem == filterCriteria.typeSystem
        ).filter(lang => 
            filterCriteria.paradigms.length == 0 || filterCriteria.paradigms.every(p => lang.paradigms.includes(p))
        );
    }

    let toFilterOptionSelections = (filterOptions:FilterOption[]):FilterOptionSelection[] => {
        return filterOptions.map(option => {
            return {
                option: option,
                isSelected: option.value == filterCriteria.typeSystem || filterCriteria.paradigms.includes(option.value)
            }
        });
    };

    return {
        view(vnode) {
            return [
                m("h6", "Programming Language Explorer"),

                m(ResultFilterView, {
                    programmingLanguages : filterLanguage(langauages),
                    filterOptionSelections : toFilterOptionSelections(filterOptions),
                    onFilterOptionSelected : (option:FilterOption) => {
                        console.log(option.label);

                        if(option.key == "typeSystem") {
                            if(filterCriteria.typeSystem == option.value) {
                                filterCriteria.typeSystem = null;
                            } else {
                                filterCriteria.typeSystem = option.value;
                            }
                        }

                        if(option.key == "paradigm") {
                            if(filterCriteria.paradigms.includes(option.value)) {
                                filterCriteria.paradigms = filterCriteria.paradigms.filter(p => p != option.value);
                            } else {
                                filterCriteria.paradigms.push(option.value);
                            }                            
                        }
                    }
                }),
                m(SettingView)
            ];
        }
    }
}

let divElem = document.getElementById("app");
if(divElem != null) {
    m.mount(divElem, MainComponent);
} 
