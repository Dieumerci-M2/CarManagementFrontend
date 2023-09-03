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
	"created": string,
	"token" : string
}
export interface ContextInfo{
	"user"?: UserLoginInfo,
	"setUser"?: React.Dispatch<React.SetStateAction<UserLoginInfo | undefined>>,
	"modalDelete"?: boolean,
	"setModalDelete"?: React.Dispatch<React.SetStateAction<boolean>>
	"toastOptions"?: any,
	"LogName"?: string,
	"setLogName"?: React.Dispatch<React.SetStateAction<string>>,
	"LogPassword"?: string,
	"setLogPassword"?: React.Dispatch<React.SetStateAction<string>>
}