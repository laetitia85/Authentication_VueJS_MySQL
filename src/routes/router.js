const express = require("express");
const app = express.Router();
const sql = require("../database/database.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
require("dotenv").config();


app.post("/sign-up", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {                                                                                                                 //crypte le msg entré par l'utilisateur

    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: hash,
    };

    sql.query("INSERT INTO user SET ?", newUser, (err, result) => {
      if (err) {
        console.log("error:", err);
      }
        res.status(200).send(result);
      // console.log("created user:" , {id: res.insertId, ...newUser});
    });
  });
});

app.post("/sign-in", (req, res) => {
  sql.query(
    `SELECT * FROM user WHERE email = '${req.body.email}'`,
    (err, result) => {
    
      bcrypt.compare(req.body.password, result[0].password, function (erro,resultat) {                                                              //compare le mdp entré par l'utilisateur avoir le mdp crypt
        if (resultat) {                                                                                                                             //si c'est true renvoie le résultat
          let token = jwt.sign({id:result[0].id, name: result[0].name}, process.env.jwtKey, { expiresIn: 86400 // expires in 24 hours
          })
          res.status(200).send({auth: true, token: token });
        } else {                                                                                                                                    //sinon c'est false alors renvoie le msg d'erreur
          res.status(404).send({
            msg: "Sorry, we don't know this user",
          });
        }
      });
    }
  );
});

app.post("/add-new-contact", (req,res) => {
  
  const newContact = {
    name: req.body.name,
    email: req.body.email,
    user_affiliate: req.body.user_affiliate,
  };

  sql.query("INSERT INTO contact SET ?", newContact, (err, result) => {
    if (err) {
       console.log("error", err);
    }
       res.status(200).send(result);

      });
    }),

  app.get("/get-contacts/:id", (req,res) => {
  //   sql.query("SELECT * FROM contact ", (err,results) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     res.status(200).send(results);
  //   })
  // }); 

  sql.query(`SELECT * FROM user INNER JOIN contact ON  user.id = contact.user_affiliate WHERE contact.user_affiliate = ${req.params.id}`, (err, resultat) => {                                        //met en relation les 2 tables et vérifie si l id de l'user table1 est identique à l'id des users affiliés ds la table 2
          if (resultat) {                                                                                                                                                                             //si c'est true renvoie le résultat
          res.status(200).send(resultat);
        } else {                                                                                                                                                                                      //sinon c'est false alors renvoie le msg d'erreur
          res.status(500).send({
            msg: "Sorry, we don't add this user",
          });
        };
      });
   });
    

// });

// if (result.length > 0 ){
//     res.status(200).send({
//   msg: "you are authenticated" })

//   } else if (result.length == 0) {
//       res.status(404).send({
//           msg: "Sorry, we don't know this user" ,
//       });
//   }

module.exports = app;
