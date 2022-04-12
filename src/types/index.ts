export type ModalType = 'default' | 'warning' | 'error'

export type OptionsType = {
	modalTypeColor?: {
		[key in ModalType]?: string
	}
}
