var Plantas = require('../models/plantas');

exports.list = () => {
    return Plantas.find()
                .sort({"Id": 1})
                .then(res => {
                    return res
                })
                .catch(err => {
                    return err
                })
}

exports.detail = (id) => {
    return Plantas.findById(id)
                .then(res => {
                    return res
                })
                .catch(err => {
                    return err
                })
}

exports.especies = (especie) => {
    return Plantas.find({"Espécie": especie})
                .then(res => {
                    return res
                })
                .catch(err => {
                    return err
                })
}

exports.implant = (implantacao) => {
    return Plantas.find({"Implantação": implantacao})
                .then(res => {
                    return res
                })
                .catch(err => {
                    return err
                })
}

exports.freguesias = () => {
    return Plantas.distinct({"Freguesia": 1})
                .sort({"Freguesia": 1})
                .then(res => {
                    return res
                })
                .catch(err => {
                    return err
                })
}

exports.plantas_ord = () => {
    return Plantas.distinct({"Espécie": 1})
                .sort({"Espécie": 1})   
                .then(res => {
                    return res
                })
                .catch(err => {
                    return err
                })
}

exports.insert = (data) => {
    return Plantas.create(data)
                .then(res => {
                    return res
                }
                )
                .catch(err => {
                    return err
                })
}

exports.delete = (id) => {
    return Plantas.findByIdAndDelete(id)
                .then(res => {
                    return res
                })
                .catch(err => {
                    return err
                })
}
