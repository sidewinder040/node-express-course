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

// Stock Route
app.get('/stock', function(req, res) {
    res.json({
        success: true,
        message: "Stock Availability",
        stock: stockAvailability
    })
})

app.listen(8000,function(){console.log('server is listening')})