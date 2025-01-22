import MenuItem from "./MenuItem";
import Home from "@/assets/images/icon-home.svg?react";
import Search from "@/assets/images/icon-search.svg?react";
import Archive from "@/assets/images/icon-archive.svg?react";
import Tags from "@/assets/images/icon-tag.svg?react";
import Settings from "@/assets/images/icon-settings.svg?react";
import { useState } from "react";
import Separator from "./Separator";

type MenuItem = 'home' | 'search' | 'archived' | 'tags' | 'settings'

const MenuBar = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem>('home')

    return (
        <div className="flex flex-row justify-between items-center py-3 px-8 h-[74px] shadow-menu dark:shadow-menuDark dark:bg-neutral-950">
            <MenuItem icon={<Home />} label="Home" checked={selectedMenuItem === 'home'} onChange={() => setSelectedMenuItem('home')} />
            <Separator />
            <MenuItem icon={<Search />} label="Search" checked={selectedMenuItem === 'search'} onChange={() => setSelectedMenuItem('search')} />
            <Separator />
            <MenuItem icon={<Archive />} label="Archived" checked={selectedMenuItem === 'archived'} onChange={() => setSelectedMenuItem('archived')} />
            <Separator />
            <MenuItem icon={<Tags />} label="Tags" checked={selectedMenuItem === 'tags'} onChange={() => setSelectedMenuItem('tags')} />
            <Separator />
            <MenuItem icon={<Settings />} label="Settings" checked={selectedMenuItem === 'settings'} onChange={() => setSelectedMenuItem('settings')} />
        </div>
    )
}

export default MenuBar;

