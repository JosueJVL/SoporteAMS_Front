import { Injectable } from '@angular/core';


/**
 * Clase para el LocalStorage
 */
@Injectable()
export class CacheService {
    constructor(){}

    /**
     * Metodo que almacena informacion en el LocalStorage
     * @param options Contiene la Informacion a alamacenar en el LocalStorage
     */
    save(options: LocalStorageSaveOptions){
        options.expirationMins = options.expirationMins || 0;
        const expirationMS = options.expirationMins !== 0 ? options.expirationMins : 10;

        let date = new Date();

        const record = {
            value: typeof options.data === 'string' ? options.data : options.data,
            expiration: expirationMS !== 0 ? date.setMinutes(date.getMinutes()  + expirationMS) : null,
            hasExpiration: expirationMS !== 0 ? true : false
        }

        localStorage.setItem(this.prepareKey(options.key), JSON.stringify(record));
    }

    /**
     * Metodo que carga busca la informacion por medio de un Identificador
     * @param key Identificador a buscar en el LocalStorage
     * @returns Retorna la Infomacion almacenada
     */
    load(key: string) {
        key = this.prepareKey(key);
        const item = localStorage.getItem(key)
        if (item !== null) {
            const record = JSON.parse(item)
            const now = new Date().getTime()
            if(record.hasExpiration && record.expiration >= now){
                return record.value;
            }else{
                this.remove(key);
                return null;
            }
        }

        return null
    }

    /**
     * Metodo que elimina la Informacion del LocalStorage
     * @param key Identificador de la Informacion Almacenada
     */
    remove(key: string) {
        key = this.prepareKey(key);
        localStorage.removeItem(key)
    }

    cleanLocalStorage() {
        localStorage.clear()
    }

    /**
     * Metodo que convierte a Mayusculas a los Identificadores
     * @param key Valor a convertir
     * @returns Retorna el Identificador en Mayusculas
     */
    prepareKey(key: string){
        return key.toUpperCase();
    }
}

/**
 * Modelo que contiene la Informacion Almacenar
 */
export class LocalStorageSaveOptions {
    key: string
    data: any
    expirationMins?: number
}
  