const ProductModel = require('../models/productmodel')

exports.getProducts = async(req,res,next) => {
    try{
        const query = req.query.keyword?{
            name : {
                $regex : req.query.keyword,
                $options : 'i'
            }
        }:{}
        const Products = await ProductModel.find(query);
        res.status(201).json({
            success: true,
            Products
        })
    }
    catch(error)
    {
        res.status(404).json({
            success: false,
            message : error
        })
    }
}

exports.getSingleProduct = async(req,res,next) => {
    try
    {
        const Product = await ProductModel.findById(req.params.id)
        res.status(401).json({
            success: true,
            Product
        })
    }
    catch(error)
    {
        res.status(404).json({
            success: false,
            message: error
        })
    }
}