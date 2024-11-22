import infinityWorldItems from "../infinity-world-subitems";
import MiniMenu from "../min-menu"

export default function MiniMenuCais({ enterprises }) {
    const subPageItems = infinityWorldItems({ enterprises });
    return <MiniMenu marginTop="mt-[18vh]" items={subPageItems.map((s) => ({
        icon: s.icon,
        text: s.text,
        path: '/infinity-world/'+s.path,
        // onClick: (ev) => changeScreen(ev, s),
      }))} />;
}
