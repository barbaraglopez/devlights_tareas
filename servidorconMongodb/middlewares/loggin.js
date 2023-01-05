const loggin = (req, res, next)=>{
    console.log("Recibi rsta:",`${req.baseUrl}${req.path}`, req.method);
    next();
}

module.exports = loggin;