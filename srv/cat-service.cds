using {sap.capire.incidents as my} from '../db/schema';
using { metadata  } from './external/metadata';

service CatalogService {
    entity Products as projection on metadata.Products;
}
/**
 * Service used by support personell, i.e. the incidents' 'processors'.
 */
service ProcessorService {
    entity Incidents as projection on my.Incidents;
    entity Customers as projection on my.Customers;
    action readCreditCardNumber(Customer: String) returns String
}

/**
 * Service used by administrators to manage customers and incidents.
 */
service AdminService {
    entity Customers as projection on my.Customers;
    entity Incidents as projection on my.Incidents;
}
