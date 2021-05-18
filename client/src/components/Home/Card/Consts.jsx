import { RiMacbookLine, RiGamepadFill } from "react-icons/ri";
import { GiGamepadCross } from "react-icons/gi";
import e from '../../../images/e.png'
import t from '../../../images/t.png'
import m from '../../../images/m.png'
import a from '../../../images/a.png'
import rp from '../../../images/rp.png'

import {
    SiPlaystationvita,
    SiPlaystation,
    SiXbox,
    SiWindows,
    SiAndroid,
    SiNintendoswitch,
    SiNintendo3Ds,
    SiNintendo,
    SiApple,
    SiNintendogamecube,
    SiLinux,
    SiWiiu,
    SiWii,
} from "react-icons/si";

export const esrb = {
    'everyone': <img src={e} alt='' />,
    'everyone-10-plus': <img src={e} alt='' />,
    'teen': <img src={t} alt='' />,
    'mature': <img src={m} alt='' />,
    'adults-only': <img src={a} alt='' />,
    'default': <img src={rp} alt='' />,
}

export const icons = {
    'pc': <SiWindows />,
    'playstation5': <SiPlaystation />,
    'playstation4': <SiPlaystation />,
    'xbox-one': <SiXbox />,
    'xbox-series-x': <SiXbox />,
    'nintendo-switch': <SiNintendoswitch />,
    'ios': <SiApple />,
    'android': <SiAndroid />,
    'nintendo-3ds': <SiNintendo3Ds />,
    'nintendo-ds': <SiNintendo />,
    'nintendo-dsi': <SiNintendo />,
    'macos': <RiMacbookLine />,
    'linux': <SiLinux />,
    'xbox360': <SiXbox />,
    'xbox-old': <SiXbox />,
    'playstation3': <SiPlaystation />,
    'playstation2': <SiPlaystation />,
    'playstation1': <SiPlaystation />,
    'ps-vita': <SiPlaystationvita />,
    'psp': <GiGamepadCross />,
    'wii-u': <SiWiiu />,
    'wii': <SiWii />,
    'gamecube': <SiNintendogamecube />,
    'nintendo-64': <SiNintendo />,
    'game-boy-advance': <SiNintendo />,
    'windows': <SiWindows />,
    'default': <RiGamepadFill />,
}