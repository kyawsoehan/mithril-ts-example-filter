import * as m from 'mithril';
import {ProgrammingLanguage, FilterOption, FilterOptionSelection} from '../models';

interface Attrs {
    programmingLanguages : ProgrammingLanguage[],
    filterOptionSelections: FilterOptionSelection[],
    onMoreOptionsClick: () => void,
    onFilterOptionSelected : (option:FilterOption) => void
}

export default function ResultFilterComponent(): m.Component<Attrs> {
    return {
        view(vnode) {
            return m("div",                
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

                    m("button", {
                        href:"#",
                        class:"btn btn-sm btn-link",
                        onclick: () => {
                            vnode.attrs.onMoreOptionsClick();
                        }
                    }, "More"),
                    
                    vnode.attrs.programmingLanguages.map(lang => 
                        m("div", lang.name)
                    )
                ]
            );
        }
    }
}