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
import { TrenerID } from './trenerID';


export interface Dodanieopini extends TrenerID { 
    name?: string;
    email?: string;
    rating?: number;
    description?: string;
}
