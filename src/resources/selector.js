let loadCountries = () => {
  let paises=[]
  fetch("https://static.openfoodfacts.org/data/taxonomies/countries.json")
    .then(function (resultado) {
      console.log(resultado.json)
      return resultado.json();
    })
    .then(function (array) {
      for (let obj in array) {
        let country = array[obj].name.en;
        if (country != "") {
          paises.push(country)
        }
      }
    })
    .catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
  return paises;

}; 
export default loadCountries;