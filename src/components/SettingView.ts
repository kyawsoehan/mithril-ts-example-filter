import * as m from 'mithril';

export default function SettingComponent(): m.Component<{}> {
    return {
        view(vnode) {
            return m("a", {
                class:"btn btn-sm btn-secondary mt-2",
                href:"#"
            }, "Settings");
        }
    }
}