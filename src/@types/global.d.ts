declare global {}
export interface UserDocumentInfo {
    "id": number,
	"plaque": string,
	"nomProp": string,
	"photoProp": string,
	"photoVehicule": string,
	"assurance": boolean,
	"vignette": boolean,
	"carteRose": boolean,
	"permiDeConduire": boolean,
	"controleTechnique": boolean,
	"vitreTinte": boolean,
	"createdAt": string,
	"updatedAt": string
}
export interface UserLoginInfo{
	"id": number,
	"userName": string,
	"password": string,
}
