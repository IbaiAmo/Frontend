function loadDoc(e) {
    const file = e.target.files[0];
  
    readDoc(file).then(parseDoc).then(showDocInTable).catch(onError)
  }
  
  function readDoc(file) {
    const reader = new FileReader()
  
    return new Promise((ok) => {
      reader.readAsText(file)
      reader.onload = function() {
        ok(reader.result)
      }
    })
  }
  
  function parseDoc(rawXML) {
    const parser = new DOMParser()
    const xml = parser.parseFromString(rawXML, 'text/html')
    return xml
  }
  
  function showDocInTable(xml) {
    const table = document.querySelector('tbody')
    const datasource = xml.querySelector('cinesa')
    const cinesa = datasource.querySelectorAll('pelicula')
  
    table.removeChild(table.children[0])
  
    Array.from(cinesa).map((pelicula, i) => {
      const tr = document.createElement('tr')
      const titulo = tagToData(pelicula.querySelector('titulo'))
      const sinopsis = tagToData(pelicula.querySelector('sinopsis'))
      const duracion = tagToData(pelicula.querySelector('duracion'))
      const actores = tagToData(pelicula.querySelector('actores'))
  
      tr.append(titulo, sinopsis, duracion, actores)
      table.appendChild(tr)
    })
  }
  
  function tagToData(tag) {
    const td = document.createElement('td')
    td.textContent = tag.textContent
    return td
  }
  
  function onError(reason) {
    console.error(reason)
  }