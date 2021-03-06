const express = require('express');
const app = express();

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

// My Stock Data.
const stockAvailability=[
    {
        part: '47000',
        stock: 300
    },
    {
        part: '23405',
        stock: 340
    }
]

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

// Stock Route
app.get('/stock', function(req, res) {
    res.json({
        success: true,
        message: "Stock Availability",
        stock: stockAvailability
    })
})

app.get('/stock/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: "Stock for one part",
        stock: req.params.id
    })
})

app.listen(8000,function(){console.log('server is listening')})