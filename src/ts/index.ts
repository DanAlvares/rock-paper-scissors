import "core-js/stable";
import "regenerator-runtime/runtime";

import { Game } from "./game";
import { logger } from './logger';

import '../scss/index.scss';
import '../images/logo.jpg'

logger('it works well!');

const game = new Game();
game.initialize()

