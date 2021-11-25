module.exports = (sequelize, dataTypes) => {
  const modelName = "User";
  const props = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      primaryKey: true,
    },
  };

  const options = {
    tableName: "users",
    timestamps: false, //createdAt, updateAt
  };

  const User = sequelize.define(modelName, props, options);

  // relations
  // User.associate = function (models) {
  //   User.hasMany(models.Tasks, {
  //     as: "tasks",
  //     foreignKey: "id_user",
  //   });
  // };

  return User;
};
