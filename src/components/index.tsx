import * as React from 'react'
import { MessageModal } from './MessageModal'
import { OptionsType } from '../types'

export const useMessageModal = (options?: OptionsType) => {
	const [MessageModalInstance] = React.useState(new MessageModal(options))
	return MessageModalInstance
}
