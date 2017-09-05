package models;

import play.api.libs.json.Json

case class User(
                 id: Long,
                 email: String,
                 name: String,
                 surname: String,
                 password: String
               )
