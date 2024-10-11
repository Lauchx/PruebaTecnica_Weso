const express = require('express');
const cors = require('cors');
const crypto = require('node:crypto')

const app = express();
app.disable('X-Powered-By')
const PORT = process.env.PORT ?? 3000;

//Usando solo origenes que vos quieras que tengan  acceso a tu API
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:3001', 'http://localhost:4200'];
        if (allowedOrigins.includes(origin) || !origin) {
            return callback(null, true)
        }
        return callback(new Error('Not allowed by CORS'))
    }
}))
app.use(express.json())
const apiKey = 'd355bd35ee32483fba09a438677c6daf'

app.get('/latest', (req, res) => {
    const url = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`
    getFetch(url).then(ExchangeJson => {
        res.status(200).json(ExchangeJson.rates)
    }).catch(error => {
        res.status(500).json({ error: error.message });
    })
})

app.get('/currencies', (req, res) => {
    const url = `https://openexchangerates.org/api/currencies.json?app_id=${apiKey}`
    getFetch(url).then(currenciesJson => {
        res.status(200).json(currenciesJson)
    }).catch(error => {
        res.status(500).json({ error: error.message });
    })
})
app.get('/historical/:year-:month-:day', (req, res) => {
    const { year, month, day } = req.params
    const url = `https://openexchangerates.org/api/historical/${year}-${month}-${day}.json?app_id=${apiKey}`
    getFetch(url).then(apiHistorical => {
        res.status(200).json(apiHistorical.rates)
    }).catch(error => {
        res.status(500).json({ error: error.message });
    })
})


function getFetch(url) {
    return fetch(url).then(api => {
        if (!api.ok) {
            throw new Error("Error en el servidor: " + api.statusText + "/" + api.status)
        }
        return api.json()
    })
}
//-----------------------------------------------------------------------------------------------------------//
// Endpoint para agregar un nuevo dato
// app.post('/products', (req, res) => {
//     const result = validateProduct(req.body)

//     if (!result.success) {
//         return res.status(422).json({ error: result.error.issues })
//     }
//     const newProduct = {
//         id: crypto.randomUUID(),
//         ...result.data,
//     }

//     dataProducts.push(newProduct);
//     res.status(201).json(newProduct);
// })


// app.put('/products/:id', (req, res) => {
//     const { id } = req.params;
//     const result = validateProduct(req.body)

//     if (!result.success) {
//         return res.status(422).json({ error: result.error.issues })
//     }
//     const productIndex = dataProducts.findIndex(p => p.id === id)

//     if (productIndex === -1) {
//         return res.status(404).send('Item not found');
//     }
//     const updatedProduct = {
//         ...dataProducts[productIndex],
//         ...result.data,
//     }
//     dataProducts[productIndex] = updatedProduct;

//     res.status(200).json(updatedProduct);
// })

// // Endpoint para eliminar un dato
// app.delete('/products/:id', (req, res) => {
//     //const id = parseInt(req.params.id);
//     const id = req.params.id;
//     console.log(id + "ID")

//     const productIndex = dataProducts.findIndex(p => p.id === id)

//     if (productIndex === -1) {
//         return res.status(404).send('Item not found');
//     }
//     dataProducts.splice(productIndex, 1)
//     return res.json({ message: "Product deleted" })

// })

// //seleccionar por id
// app.get('/products/:id', (req, res) => {
//     const { id } = req.params;
//     const product = dataProducts.find(product => product.id === id);

//     if (product) {
//         return res.json(product);
//     }
//     return res.status(404).json({ error: 'Item not found' });

// })

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`API listening at http://localhost:${PORT}`);
})