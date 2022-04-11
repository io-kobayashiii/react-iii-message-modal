import * as React from 'react'
import { MessageModal } from './MessageModal'

export const useMessageModal = () => {
	const [MessageModalInstance] = React.useState(new MessageModal())
	return MessageModalInstance
}
