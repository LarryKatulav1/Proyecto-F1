import UltimasNoticias from '../Components/default/UltimasNoticias';
import En_Directo from '../Components/secciones/SeccionEn_Directo';
import Proximas_carreras from '../Components/secciones/SeccionProximasCarreras';
import SeccionCalendarioCarreras from "../Components/secciones/SeccionCalendarioCarreras";
import SeccionClasificaciones from '../Components/secciones/SeccionCalificaciones';
import SeccionEquipos from '../Components/secciones/SeccionEquipos';
import SeccionUltimasNoticias from "../Components/secciones/SeccionUltimasNoticias";

export default function Home() {
    return (
        <div className="bg-black text-white">
            <En_Directo />
            <Proximas_carreras />
            <SeccionCalendarioCarreras />
            <SeccionClasificaciones />
            <SeccionEquipos />
            <SeccionUltimasNoticias />
            {/*<UltimasNoticias />*/}
        </div>
    );
}
