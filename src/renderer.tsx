import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { hot } from "react-hot-loader";

import '@sweetalert2/theme-dark/dark.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'


import { library } from '@fortawesome/fontawesome-svg-core'

import { 
    faFaceGrinTongueWink, faCheckSquare, faCubes, faHouseLaptop, faMap, faCashRegister, faPeopleLine, faBoltLightning,
    faChartSimple, faBullseye, faDisplay, faXmark, faChevronLeft, faBars, faHome, faHouse, faMicrochip, faHandshakeAngle,
    faChartBar, faDesktop, faCheckToSlot, faPoop, faQuidditch, faVial, faTrash, faPlane, faEllipsis, faEllipsisVertical, faHand,
    faUtensils, faPersonBooth, faCalendarCheck, faCircleInfo, faNewspaper, faClipboardList, faSquarePollVertical, faPrint, 
    faFileWaveform, faCog, faSpinner, faBell, faHardDrive, faScrewdriverWrench, faPallet, faDiagramProject, faUserLock, faClipboard,
    faPeopleGroup, faWarehouse, faPlusSquare, faPencilSquare, faSearch
} from '@fortawesome/free-solid-svg-icons'

import { Main } from "./main";
import "./index.css";

library.add(
    faBars,
    faBoltLightning,
    faBullseye,
    faCashRegister,
    faChartBar, 
    faChartSimple,
    faCheckSquare,
    faCheckToSlot, 
    faChevronLeft,
    faCubes,
    faDesktop, 
    faDisplay,
    faFaceGrinTongueWink, 
    faHandshakeAngle,
    faHome,
    faHouse,
    faHouseLaptop,
    faMap,
    faMicrochip, 
    faPeopleLine,
    faPoop,
    faXmark,
    faQuidditch,
    faVial,
    faTrash,
    faPlane,
    faEllipsis,
    faEllipsisVertical,
    faHand,
    faUtensils, 
    faPersonBooth,
    faCalendarCheck,
    faCircleInfo,
    faNewspaper,
    faClipboardList,
    faSquarePollVertical,
    faPrint,
    faFileWaveform,
    faCog,
    faSpinner,
    faBell,
    faHardDrive,
    faScrewdriverWrench,
    faPallet,
    faDiagramProject,
    faUserLock,
    faClipboard,
    faPeopleGroup,
    faWarehouse,
    faPlusSquare,
    faPencilSquare,
    faSearch

);

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.createRoot( document.getElementById("root") as HTMLElement).render(
    <Main />
);

export default hot(module)(Main);
