id (id by default)
email
password
salt

googleId (remove from database?)

creditCardInfo, need own table?

sequelize model:create --name Person --attributes fullname:string,birthdate:date,cardnbr:string

sequelize model:create --name CreditCard --attributes cardname:string,cardnbr:string,expired_date:string

credit card validator?: https://www.npmjs.com/package/card-validator
