const express = require('express');
const axios = require('axios');

const app = express();
const port = 3007;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Consulta de Animales</h1>
        <form action="/buscar-wikipedia" method="get"> <!-- Cambiado a /buscar-wikipedia -->
          <label for="animal">Nombre del animal:</label>
          <input type="text" id="animal" name="query"> <!-- Cambiado a 'query' -->
          <button type="submit">Buscar</button>
        </form>
      </body>
    </html>
  `);
});

app.get('/buscar-wikipedia', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.send('Por favor, ingrese una consulta válida.');
  }

  try {
    const response = await axios.get(`https://es.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: query,
      },
    });

    const searchResults = response.data.query.search;
    
    // Mostrar los resultados en forma de lista
    const resultsList = searchResults.map(result => `
      <h2>${result.title}</h2>
      <p>${result.snippet}</p>
    `).join('');

    res.send(`
      <html>
        <body>
          <h1>Resultados de Wikipedia</h1>
          ${resultsList}
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send('Error al buscar en Wikipedia.');
  }
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
