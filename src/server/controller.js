module.exports = {
    getHouseList: (req, res) => {
        const db=req.app.get('db');
        db.get_houseList().then(houses =>{
            res.status(200).send(houses)
        })
        .catch(err => {
            res.status(500({errorMessage: 'Something went wrong.'}))
            console.log(err)
        })
    },

    addNewProperty: (req, res) =>{
        const {name, address, city, propertystate, zipcode, img, mortgage,} = req.body 
        console.log('req.body', name, address, city, propertystate, zipcode, img, mortgage, rent).then(() =>{
        const db = req.app.get('db');
        db.add_new_property(name, address, city, propertystate, zipcode, img, mortgage, rent)
            res.sendStatus(200)
        })
        .catch(err =>{
            res.status(500).send({errorMessage: "Something went wrong."})
        })
    },

    deleteProperty: (req, res) =>{
        const db = req.app.get('db');
        const { params } = req;
        db.delete_property(params.id).then(()=>{
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send({errorMessage: 'Something went wrong.'})
            console.log(err)
        })
    }


}