const PersonModel = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    birth: DataTypes.DATE,
    office: DataTypes.STRING
  })
  Person.associate = ({ User }) => {
    Person.hasOne(User)
  }
  return Person
}

module.exports = PersonModel