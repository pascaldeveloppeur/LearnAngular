export enum MonsterType {
	PLANT = 'plant',
	ELECTRIC = 'electric',
	FIRE = 'fire',
	WATER = 'water',
}

export interface IMonsterProperties {
	imageUrl: string;
	color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
	[MonsterType.PLANT]: {
		imageUrl: 'assets/img/pngegg1.png',
		color: 'rgba(135, 255, 124)'
	},
	[MonsterType.ELECTRIC]: {
		imageUrl: 'assets/img/pngegg2.png',
		color: 'rgb(255, 255, 104)'
	},
	[MonsterType.FIRE]: {
		imageUrl: 'assets/img/pngegg3.png',
		color: 'rgb(255, 104, 104)'
	},
	[MonsterType.WATER]: {
		imageUrl: 'assets/img/pngegg2.png',
		color: 'rgba(118, 234, 255)'
	},
}