function getList(req, res){

    // get all orders from DB
    res.body = orders;
    return res

}