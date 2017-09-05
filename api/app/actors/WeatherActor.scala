package actors

import akka.actor._

class WeatherActor extends Actor {

  def receive(message: WeatherMessage): Actor.Receive = {
    case (city) => //a http call to the weather api
  }

}