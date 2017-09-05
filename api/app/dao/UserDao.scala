package dao

import scala.concurrent.{ExecutionContext, Future}
import javax.inject.Inject

import models.User
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfigProvider
import slick.jdbc.JdbcProfile

class UserDao @Inject()
(protected val dbConfigProvider: DatabaseConfigProvider)
(implicit executionContext: ExecutionContext)
  extends HasDatabaseConfigProvider[JdbcProfile] {

  import profile.api._

  private val Users = TableQuery[UserTable]

  def all(): Future[Seq[User]] = db.run(Users.result)

  def insert(user: User): Future[Unit] = db.run(Users += user).map { _ => () }

  private class UserTable(tag: Tag) extends Table[User](tag, "user") {

    def id = column[Long]("id", O.PrimaryKey)
    def email = column[String]("email")
    def name = column[String]("name")
    def surname = column[String]("surname")
    def password = column[String]("password")

    def * = (id, email, name, surname, password) <> (User.tupled, User.unapply)
  }

}