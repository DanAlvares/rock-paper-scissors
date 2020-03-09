
export type choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';

export interface IPlayer {
    name: string;
    score: number;
}

export interface IResultDescription {
    [key: string]: string;
}