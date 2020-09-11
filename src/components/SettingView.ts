import * as m from 'mithril';
import { FilterCriteria, FilterOption, toFilterOptionSelections } from '../models';

interface Attrs {
    filterCriteria: FilterCriteria,
    typeFilterOptions: FilterOption[],
    paradigmFilterOptions: FilterOption[],
    onApply : (filterCriteria:FilterCriteria) => void,
    onCancel : () => void
}

export default function SettingComponent(): m.Component<Attrs> {
    let filterCriteria:FilterCriteria = new FilterCriteria();
    
    return {
        oninit(vnode) {
            filterCriteria.setTypeSystem(vnode.attrs.filterCriteria.getTypeSystem());
            filterCriteria.setParadigms(vnode.attrs.filterCriteria.getParadigms());
        },
        view(vnode) {
            return m("div",     
                [            
                    m("h6", "Type System"),
                    m("div", 
                        toFilterOptionSelections(filterCriteria, vnode.attrs.typeFilterOptions).map(optionSelection => 
                            m("button", {
                                class: (optionSelection.isSelected)?
                                "btn btn-sm btn-primary mr-1" :
                                "btn btn-sm btn-outline-primary mr-1",
                                onclick: () => {
                                    filterCriteria.toggleTypeSystem(optionSelection.option.value);
                                    //vnode.attrs.onFilterOptionSelected(optionSelection.option);
                                }
                            }, optionSelection.option.label)
                        )
                    ),
                    m("h6", "Paradigm"),
                    m("div", 
                        toFilterOptionSelections(filterCriteria, vnode.attrs.paradigmFilterOptions).map(optionSelection => 
                            m("button", {
                                class: (optionSelection.isSelected)?
                                "btn btn-sm btn-primary mr-1" :
                                "btn btn-sm btn-outline-primary mr-1",
                                onclick: () => {
                                    filterCriteria.toggleParadigm(optionSelection.option.value);
                                    //vnode.attrs.onFilterOptionSelected(optionSelection.option);
                                }
                            }, optionSelection.option.label)
                        )
                    ),

                    m("div", 
                        [
                            m("button", {
                                class:"btn btn-sm btn-secondary mt-2 mr-1",
                                href:"#",
                                onclick: () => {
                                    vnode.attrs.onCancel();
                                }
                            }, "Cancel"),
                            m("button", {
                                class:"btn btn-sm btn-primary mt-2 mr-1",
                                href:"#",
                                onclick: () => {
                                    vnode.attrs.onApply(filterCriteria);
                                }
                            }, "Apply")
                        ]
                    )
                ]                
            );
        }
    }
}