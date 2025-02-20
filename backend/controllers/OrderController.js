const orderModel = require('../models/orderModel')

exports.createOrder = async (req,res,next) => {
    try
    {
        const cartItems = req.body;
        const amount = cartItems.reduce((acc, item)=>(acc + item.product.price * item.qty),0);
        const status = "pending";
        const order = await orderModel.create({cartItems,amount,status});

        res.json({
            success: true,
            message : order
        })
    }
    catch(error)
    {
        res.json({
            success: false,
            message : "Something Went wrong"
        })
    }
}