import Player from "./Player.js";
import Cards from "./Cards.js";
import GameLogic from "./GameLogic.js";

let card = new Cards;
card.createCards(10);

let b = new GameLogic;
b.gaming();