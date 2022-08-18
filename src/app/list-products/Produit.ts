export interface IBurger {
	id: number;
	nom: string;
	image: string;
	prix: number;
	qte:number;
};


export interface IProduit {
	id: number;
	nom: string;
	image: string;
	prix: number;
	qte:number;
	burgers?:IBurger[];
	frites?:IFrite[];
	boissons?:IBoisson[];
	tailleBoissons?:any[];

};
export interface ITaille {
	id: number;
	nom: string;
	size: string;
	tailleBoissons?:ITailleBoissons[];
};

export interface Boisson {
	id: number;
	nom: string;
	image: string;
	prix:number
	isEtat:boolean
};

export interface IBoisson {
	id: number;
	nom: string;
	image: string;
	prix: number;
	quantite:number;
	taille?:ITaille;
	boisson?:IProduit[]
};



export interface ITailleBoissons {
	id: number;
	boisson?:IProduit;
	stock:number
};


export interface IFrite {
	id: number;
	nom: string;
	image: string;
	prix: number;
	qte:number
	burgers?:IBurger[];
	frite?:IFrite[];
	boissons?:IBoisson[];
};

export interface IMenu {
	id: number;
	nom: string;
	prix: number;
	image: string;
	qte:number
	burgers?:IBurger[];
	frites?:IFrite[];
	boissons?:IBoisson[];
};

export interface Catalogue {
	burgers: IBurger[];
	menus: IMenu[];
}
export interface Size{
	id:number
	size:string
}
export interface Complement {
	boisson: Boisson;
	taille: Size[];
}

export interface IProd{
	id: number;
	image: string;
	nom: string;
	prix: number;
}
export interface Details {
	produit: IProd;
	quantite: number;
}

export interface Commande{
	id:number,
	isEtat:boolean,
	prixTotal:number
	client:any,
	Produits:IProd,
	dateCreation:Date
}
