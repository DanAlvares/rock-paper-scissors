import "core-js/stable";
import "regenerator-runtime/runtime";

import { Game } from "./game";
import logger from './logger';

import '../scss/index.scss';

logger('it works well!');

const game = new Game();
game.initialize()
