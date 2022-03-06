const express = require('express');
const { user, product, review } = require('../data/data')
const PORT = 7000


const app = express();
app.use(express.json())


//BASIC API VERB
// GET ALL PRODUCT
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: product
    })
});

// POST or CREATE PRODUCT
app.post('/', (req, res) => {
    const { name, price, category, review, desc } = req.body
    responseData = {
        name: name,
        price: price,
        category: category,
        review: review,
        desc: desc
    }
    res.status(201).json({
        success: true,
        data: responseData,
        allproduct: [...product, responseData]
    })
});

//GET A SINGLE PRODUCT
app.get('/:id', (req, res) => {
    const { id } = req.params
    const SingleProduct = product.find(
        e => e.id === id
    )
    res.status(200).json(SingleProduct)
});

//GET A REVIEW BASED ON REVIEW
app.get('/product/:productid/review/:reviewid', (req, res) => {
    const { productid, reviewid } = req.params
    const SingleReview = review.find(
        (e) => e.product === productid && e.id === Number(reviewid)
    )
    res.status(200).json(SingleReview)
})

//UPDATE A SINGLE PRDOUCT
app.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const SingleProduct = product.find(e => e.id === id)

    if (!SingleProduct) {
        return res.status(404).json('No product Found')
    }
    const NewProduct = product.map((e) => {
        if (e.id === id) {
            e.name = name
        }
        return e
    });
    res.status(200).json(NewProduct);
});

app.patch('/:id'); // UPDATE A SINGLR PRODUCT

// DELETE A SINGLR PRODUCT
app.delete('/:id', (req, res) => {
    const { id } = req.params
    const SingleProduct = product.find((e) => e.id === id)
    if (!SingleProduct) {
        return res.status(404).json('No product Found')
    }
    const NewProduct = product.filter(e => e.id !== id);

    res.status(200).json(NewProduct);

});

//ADVENCE API VERB 
//SEARCH PRODUCT
app.get('/product/query', (req, res) => {
    const { search, limit, sort } = req.query
    let SortedData = [...product]
    if (search) {
        SortedData = SortedData.filter(e => { return e.name.startsWith(search) })
    }

    if (limit) {
        SortedData = SortedData.slice(0, Number(limit))
    }

    if (sort === 'name') {
        SortedData = SortedData.sort((x, y) => {
            let a = x.name.toUpperCase(), b = x.name.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
    }
    else if (sort === 'price') {
        SortedData = SortedData.sort((x, y) => {
            return x.price - y.price
        });
    }
    else if (sort === 'category') {
        SortedData = SortedData.sort((x, y) => {
            let a = x.category.toLowerCase(), b = x.category.toLowerCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
    }
    else if (sort === 'review') {
        SortedData = SortedData.sort((x, y) => {
            let a = x.review.toLowerCase(), b = x.review.toLowerCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
    }
    else {
        SortedData = SortedData.sort();
    }

    if (SortedData.length < 1) {
        return res.status(200).json('No data found')
    }


    res.status(200).json(SortedData);
})





app.get('/login') //LOGIN FOR VIEW


app.listen(PORT, () => {
    console.log(`Sever is Connected on http://127.0.0.1:${PORT}`);
})

