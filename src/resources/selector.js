export var loadCountries = () => {
  let paises=[]
  fetch("https://static.openfoodfacts.org/data/taxonomies/countries.json")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (array) {
      for (let obj in array) {
        let country = array[obj].name.en;
        if (country !== "") {
          paises.push(country)
        }
      }
    })
    .catch(function (error) {
      console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
  return paises;

}; 

export let getFood=(paises)=>{
  let comidaPaises={};
  let paisesSplit=paises.split(",");
  for (let indice in paisesSplit){
    let pais = paisesSplit[indice];
    fetch(`https://world.openfoodfacts.org/country/${pais}.json`)
      .then(function (resultado) {
        return resultado.json();
       
      }).then(function (objeto){
        let productos=objeto.products;
        comidaPaises[pais]=productos;
      });
  }
  return comidaPaises;
}


