export default {
  async fetch(request) {
    const data = {
      Method: request.method,
      Url: request.url,
      IP: {
        IP: request.headers.get('CF-Connecting-IP'),
        Continent: request.cf.continent,
        Country: request.cf.country,
        IsEU: request.cf.isEUCountry,
        Region: request.cf.region,
        RegionCode: request.cf.regionCode,
        City: request.cf.city,
        Latitude: request.cf.latitude,
        Longitude: request.cf.longitude,
        PostalCode: request.cf.postalCode,
        MetroCode: request.cf.metroCode,
        Colo: request.cf.colo,
        ASN: request.cf.asn,
        ASOrganization: request.cf.asOrganization,
        Timezone: request.cf.timezone
      },
    };
    var dataJson = JSON.stringify(data, null, 4);
    if (request.url.includes("full")){
      return new Response(dataJson, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      
    }
    return new Response(request.headers.get('CF-Connecting-IP'));
  },
};
