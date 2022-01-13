import Player from "./Player.js";
import Cards from "./Cards.js";
import GameLogic from "./GameLogic.js";
let player = new Player;
player.startGame();
let card = new Cards;
card.getLevel();
let b = new GameLogic;
b.gaming();