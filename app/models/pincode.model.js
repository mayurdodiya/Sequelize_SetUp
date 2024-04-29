module.exports = (sequelize, Sequelize) => {

    const Pincode = sequelize.define('pincodes', {
        pincode: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
        },
    });
    return Pincode

};