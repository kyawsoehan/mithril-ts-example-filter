import * as m from 'mithril';

import SettingView from './components/SettingView';
import ResultFilterView from './components/ResultFilterView';
import {ProgrammingLanguage, FilterOption, FilterCriteria, FilterOptionSelection, toFilterOptionSelections} from './models';
import {getData} from './datastore';
import {getParadigmFilters, getTypeSystemFilters} from './filterConfig';

let langauages:ProgrammingLanguage[] = getData();
let typeSystemFilterOptions:FilterOption[] = getTypeSystemFilters();
let paradigmFilterOptions:FilterOption[] = getParadigmFilters();

function MainComponent(): m.Component<{}> {
    let showingSettings:boolean = false;
    let primaryFilterOptions:FilterOption[] = [];
    let filterCriteria:FilterCriteria = new FilterCriteria();

    let rebuildPrimaryFilterOptions = () => {
        let selectedParadigmFilterOptions = paradigmFilterOptions.filter(
            opt => filterCriteria.getParadigms().includes(opt.value))
        primaryFilterOptions = [...typeSystemFilterOptions, ...selectedParadigmFilterOptions];
    }

    return {
        oninit(vnode) {
            primaryFilterOptions = [...typeSystemFilterOptions];
        },

        view(vnode) {
            return [
                m("h5", {class:"text-secondary"}, "Programming Language Explorer"),

                (showingSettings)?
                m(SettingView, {
                    filterCriteria: filterCriteria,
                    typeFilterOptions: typeSystemFilterOptions,
                    paradigmFilterOptions: paradigmFilterOptions,
                    onApply : (newFilterCriteria:FilterCriteria) => {
                        filterCriteria.setTypeSystem(newFilterCriteria.getTypeSystem());
                        filterCriteria.setParadigms(newFilterCriteria.getParadigms());
                        rebuildPrimaryFilterOptions();
                        showingSettings = false;
                    },
                    onCancel : () => {
                        showingSettings = false;
                    }
                }) 
                :
                m(ResultFilterView, {
                    programmingLanguages : langauages.filter(lang => filterCriteria.matches(lang)),
                    filterOptionSelections : toFilterOptionSelections(filterCriteria, primaryFilterOptions),                    
                    onFilterOptionSelected : (option:FilterOption) => {
                        if(option.key == "typeSystem") {
                            filterCriteria.toggleTypeSystem(option.value);
                        }
                        if(option.key == "paradigm") {
                            filterCriteria.toggleParadigm(option.value);
                        }
                    },
                    onMoreOptionsClick : () => {
                        showingSettings = true;
                    }
                })                 
            ];
        }
    }
}

let divElem = document.getElementById("app");
if(divElem != null) {
    m.mount(divElem, MainComponent);
} 
