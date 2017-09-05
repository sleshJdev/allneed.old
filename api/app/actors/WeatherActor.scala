package actors

import akka.actor._

class WeatherActor extends Actor {

  override def receive: Actor.Receive = {
    case WeatherMessage(city) => ???
  }

}