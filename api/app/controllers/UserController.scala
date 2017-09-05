package controllers

import java.time.LocalDate
import java.time.Month

import play.api.mvc._
import play.api.libs.json._
import javax.inject.Inject

import dao.UserDao
import models.User
import play.api.libs.json.Json
import play.api.mvc.Action

import scala.concurrent.ExecutionContext

class UserController @Inject()(private val users: UserDao) extends Controller {

  implicit val context: ExecutionContext = play.api.libs.concurrent.Execution.Implicits.defaultContext
  implicit val format = Json.format[User]

  def findAll = Action.async(users.all map (list => Ok(Json.toJson(list))))

}