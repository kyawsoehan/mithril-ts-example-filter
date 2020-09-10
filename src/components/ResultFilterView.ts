import * as m from 'mithril';
import {ProgrammingLanguage, FilterOption, FilterOptionSelection} from '../models';

interface Attrs {
    programmingLanguages : ProgrammingLanguage[],
    filterOptionSelections: FilterOptionSelection[],
    onFilterOptionSelected : (option:FilterOption) => void
}

export default function ResultFilterComponent(): m.Component<Attrs> {
    return {
        view(vnode) {
            return m("div.card",
                m("div.card-body", 
                    [
                        vnode.attrs.filterOptionSelections.map(optionSelection => 
                            m("button", {
                                class: (optionSelection.isSelected)?
                                  "btn btn-sm btn-primary mr-1" :
                                  "btn btn-sm btn-outline-primary mr-1",
                                onclick: () => {
                                    vnode.attrs.onFilterOptionSelected(optionSelection.option);
                                }
                            }, optionSelection.option.label)
                        ),
                        
                        vnode.attrs.programmingLanguages.map(lang => 
                            m("div", {
                                class: "text-secondary"
                            }, lang.name)
                        )

                    ]
                    
                )
            );
        }
    }
}