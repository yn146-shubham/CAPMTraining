sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"incidentui/test/integration/pages/CustomersList",
	"incidentui/test/integration/pages/CustomersObjectPage",
	"incidentui/test/integration/pages/AddressesObjectPage"
], function (JourneyRunner, CustomersList, CustomersObjectPage, AddressesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('incidentui') + '/test/flp.html#app-preview',
        pages: {
			onTheCustomersList: CustomersList,
			onTheCustomersObjectPage: CustomersObjectPage,
			onTheAddressesObjectPage: AddressesObjectPage
        },
        async: true
    });

    return runner;
});

