// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2915bbd6-1252-405f-8173-6c00428146d9',
    name: 'Batch-MatthChr',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .delete('/certificates(thumbprintAlgorithm=sha1,thumbprint=59833fd835f827e9ec693a4c82435a6360cc6271)?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd397943e-9f2f-4ad5-890f-236c100043c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '20044437-ebf4-4b71-b6a6-0eabce4a5f73',
  dataserviceversion: '3.0',
  date: 'Wed, 03 Aug 2016 23:58:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .delete('/certificates(thumbprintAlgorithm=sha1,thumbprint=59833fd835f827e9ec693a4c82435a6360cc6271)?api-version=2016-07-01.3.1&timeout=30')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd397943e-9f2f-4ad5-890f-236c100043c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '20044437-ebf4-4b71-b6a6-0eabce4a5f73',
  dataserviceversion: '3.0',
  date: 'Wed, 03 Aug 2016 23:58:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/certificates(thumbprintAlgorithm=sha1,thumbprint=59833fd835f827e9ec693a4c82435a6360cc6271)?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#certificates/@Element\",\"thumbprint\":\"59833fd835f827e9ec693a4c82435a6360cc6271\",\"thumbprintAlgorithm\":\"sha1\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/certificates(thumbprintAlgorithm=sha1,thumbprint=59833fd835f827e9ec693a4c82435a6360cc6271)\",\"state\":\"deleting\",\"stateTransitionTime\":\"2016-08-03T23:58:01.1848713Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-08-03T23:57:59.0908186Z\",\"publicData\":\"MIIDSTCCArKgAwIBAgIQaleE9RaQtoVKrBwEt2q6RzANBgkqhkiG9w0BAQsFADBnMSswKQYDVQQLDCJDcmVhdGVkIGJ5IGh0dHA6Ly93d3cuZmlkZGxlcjIuY29tMRUwEwYDVQQKDAxET19OT1RfVFJVU1QxITAfBgNVBAMMGERPX05PVF9UUlVTVF9GaWRkbGVyUm9vdDAeFw0xNTAxMTAxNDAwNDVaFw0yMTAxMDkxNDAwNDVaMFoxKzApBgNVBAsMIkNyZWF0ZWQgYnkgaHR0cDovL3d3dy5maWRkbGVyMi5jb20xFTATBgNVBAoMDERPX05PVF9UUlVTVDEUMBIGA1UEAwwLKi5hYm91dC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDZEWc01Lku+PtDJXq9UMFRTpC9ITo/swlKcEODdOT/M+L7zv6OH8dEa9FOVquKoMjFCe6mv4s8c5/vVpaXseMDrWbU1v4OrZ6u3BtLVpcNg8SOUl5+s3gvWM7KTSjtEc4RQTKd5eZEj1vDKLbdyvbog9yCSoTrIfSpbN6S0G3utVBPD68evt8CQgQHPjy8DzElqemiPXVhKF5iJdaKn8JXSvjrcCiWG8A8y/+mFJHIW1jsbMevHSVat7ZPjyroR5PtImqtpXcgsZMiVuRVT0B/x7t3D3VlHp6Jb99d0rmci6DemF+ZyVtAgg+TBtqZEq24RS/nS+2/uVxTHDU3giApAgMBAAGjfzB9MA4GA1UdDwEB/wQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAWBgNVHREEDzANggsqLmFib3V0LmNvbTAfBgNVHSMEGDAWgBSEeNrHb5Vx0ZxM797sUj1T7Bx+FTAdBgNVHQ4EFgQUp7MhHnwP4+9nNjGy9cx4PlHH3AQwDQYJKoZIhvcNAQELBQADgYEAEMFcH3KmCNT8r5oRtKL+JiBN/HIRIjzYT1ILlSnn57rDSlx6yQgMxTjLqcpCvt5vR62QhwcdSSkOBTnpbO5qACrC70CBKJ4cPu9pb0Ncs3IO+l1aIGWpxbwESqiKoraAVNkSaJvU8R6sx20n74JHgxZCVZeC8Rg9UHFhfSeAAOo=\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c53e0037-fff8-4dc9-beee-3dd37a853b4d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '633e6b60-09cc-4ae3-a2e2-9269caa15e87',
  dataserviceversion: '3.0',
  date: 'Wed, 03 Aug 2016 23:58:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/certificates(thumbprintAlgorithm=sha1,thumbprint=59833fd835f827e9ec693a4c82435a6360cc6271)?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#certificates/@Element\",\"thumbprint\":\"59833fd835f827e9ec693a4c82435a6360cc6271\",\"thumbprintAlgorithm\":\"sha1\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/certificates(thumbprintAlgorithm=sha1,thumbprint=59833fd835f827e9ec693a4c82435a6360cc6271)\",\"state\":\"deleting\",\"stateTransitionTime\":\"2016-08-03T23:58:01.1848713Z\",\"previousState\":\"active\",\"previousStateTransitionTime\":\"2016-08-03T23:57:59.0908186Z\",\"publicData\":\"MIIDSTCCArKgAwIBAgIQaleE9RaQtoVKrBwEt2q6RzANBgkqhkiG9w0BAQsFADBnMSswKQYDVQQLDCJDcmVhdGVkIGJ5IGh0dHA6Ly93d3cuZmlkZGxlcjIuY29tMRUwEwYDVQQKDAxET19OT1RfVFJVU1QxITAfBgNVBAMMGERPX05PVF9UUlVTVF9GaWRkbGVyUm9vdDAeFw0xNTAxMTAxNDAwNDVaFw0yMTAxMDkxNDAwNDVaMFoxKzApBgNVBAsMIkNyZWF0ZWQgYnkgaHR0cDovL3d3dy5maWRkbGVyMi5jb20xFTATBgNVBAoMDERPX05PVF9UUlVTVDEUMBIGA1UEAwwLKi5hYm91dC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDZEWc01Lku+PtDJXq9UMFRTpC9ITo/swlKcEODdOT/M+L7zv6OH8dEa9FOVquKoMjFCe6mv4s8c5/vVpaXseMDrWbU1v4OrZ6u3BtLVpcNg8SOUl5+s3gvWM7KTSjtEc4RQTKd5eZEj1vDKLbdyvbog9yCSoTrIfSpbN6S0G3utVBPD68evt8CQgQHPjy8DzElqemiPXVhKF5iJdaKn8JXSvjrcCiWG8A8y/+mFJHIW1jsbMevHSVat7ZPjyroR5PtImqtpXcgsZMiVuRVT0B/x7t3D3VlHp6Jb99d0rmci6DemF+ZyVtAgg+TBtqZEq24RS/nS+2/uVxTHDU3giApAgMBAAGjfzB9MA4GA1UdDwEB/wQEAwIEsDATBgNVHSUEDDAKBggrBgEFBQcDATAWBgNVHREEDzANggsqLmFib3V0LmNvbTAfBgNVHSMEGDAWgBSEeNrHb5Vx0ZxM797sUj1T7Bx+FTAdBgNVHQ4EFgQUp7MhHnwP4+9nNjGy9cx4PlHH3AQwDQYJKoZIhvcNAQELBQADgYEAEMFcH3KmCNT8r5oRtKL+JiBN/HIRIjzYT1ILlSnn57rDSlx6yQgMxTjLqcpCvt5vR62QhwcdSSkOBTnpbO5qACrC70CBKJ4cPu9pb0Ncs3IO+l1aIGWpxbwESqiKoraAVNkSaJvU8R6sx20n74JHgxZCVZeC8Rg9UHFhfSeAAOo=\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'c53e0037-fff8-4dc9-beee-3dd37a853b4d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '633e6b60-09cc-4ae3-a2e2-9269caa15e87',
  dataserviceversion: '3.0',
  date: 'Wed, 03 Aug 2016 23:58:02 GMT',
  connection: 'close' });
 return result; }]];