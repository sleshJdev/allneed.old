package controllers

import javax.inject.Inject
import play.api.mvc._
import play.api.libs.ws._

class ApiController @Inject()(private val ws: WSClient) extends Controller {


}