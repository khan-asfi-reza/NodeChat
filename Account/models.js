module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      username: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      "email":{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      }
    });
  
    return User;
  };