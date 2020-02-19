/**
 * Najlepszy-Trener
 * API zapisywania i listowania na treningi sportowe
 *
 * OpenAPI spec version: 1.0.0
 * Contact: najlepszyterner@com.pl
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { RezerwacjaTreningu } from './rezerwacjaTreningu';


export interface Training { 
    id?: number;
    name?: string;
    date?: string;
    beginTime?: string;
    endTime?: string;
    status?: string;
    place?: string;
    price?: number;
    clientLimit?: number;
    actualClientNumber?: number;
    description?: string;
    trainerId?: number;
    booking?: Array<RezerwacjaTreningu>;
}
