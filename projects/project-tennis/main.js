import Rackets from "./Rackets.js";
import Ball from "./Ball.js";

let ball = new Ball(function() {
	this.ballMove();
});
ball.init();