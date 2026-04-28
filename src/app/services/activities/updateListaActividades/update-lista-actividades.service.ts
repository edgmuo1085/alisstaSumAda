import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ParsedResponse } from 'src/app/intarfaces/interfaces';

@Injectable({
    providedIn: 'root',
})
export class UpdateListaActividadesService {

    constructor(private storage: Storage) { }

    /**
     * Actualiza la lista de actividades en almacenamiento local:
     * - Horas ejecutadas y pendientes de la empresa según la respuesta del backend.
     * - Elimina de listaActividadesMigradas aquellas actividades que ya fueron
     *   migradas (presentes en TTA_lista del acta gestionada).
     *
     * @param response Respuesta parseada del backend al crear el acta.
     * @param actaAsesoriaGestionada Objeto del acta que contiene TTA_lista.
     */
    async update(
        response: ParsedResponse,
        actaAsesoriaGestionada: { TTA_lista?: any[] }
    ): Promise<void> {
        try {
            const listaActividades: any[] =
                (await this.storage.get('listaActividades')) || [];

            if (!Array.isArray(listaActividades)) {
                return;
            }

            const ttaLista = actaAsesoriaGestionada?.TTA_lista ?? [];

            for (const actividad of listaActividades) {
                // Actualiza horas de la empresa que coincide
                if (
                    actividad.Modulo === response.modulo &&
                    actividad.id === response.idEmpresa
                ) {
                    actividad.intHorasEjecutadas = response.acumulado;
                    actividad.intHorasPendientes = response.pendiente;
                }

                // Remueve actividades migradas presentes en TTA_lista
                const actividadesMigradas = actividad.listaActividadesMigradas;
                if (!Array.isArray(actividadesMigradas)) {
                    continue;
                }

                const idsToRemove: number[] = [];

                for (const element of actividadesMigradas) {
                    const idActividad = element.id;
                    const encontrado = ttaLista.find((x: any) => x.id === idActividad);

                    if (encontrado) {
                        idsToRemove.push(idActividad);
                    }
                }

                if (idsToRemove.length > 0) {
                    actividad.listaActividadesMigradas = actividadesMigradas.filter(
                        (a: any) => !idsToRemove.includes(a.id)
                    );
                }
            }

            await this.storage.set('listaActividades', listaActividades);
        } catch (err) {
            console.error('UpdateListaActividadesService.update error:', err);
        }
    }
}
