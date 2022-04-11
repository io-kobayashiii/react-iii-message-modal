import * as React from 'react'
import ReactDOM from 'react-dom'
import { IoCloseOutline } from 'react-icons/io5'
import { MessageModalConfig } from '../configs'

type ModalType = 'default' | 'error' | 'caution'

type ShowPropsType = {
	modalType: ModalType
	headingText?: string
	message: string
}

class MessageModal {
	bodyElement: HTMLBodyElement
	modalElement: HTMLDivElement
	modalBackgroundElement: HTMLDivElement
	modalContentElement: HTMLDivElement
	modalHeaderElement: HTMLDivElement
	modalHeaderTextElement: HTMLDivElement
	modalHeaderCloseButtonElement: HTMLDivElement
	modalBodyElement: HTMLDivElement
	constructor() {
		console.log(`log ::: ${this.constructor.name}.constructor`)
		this.bodyElement = document.getElementsByTagName('body')[0]
		this.modalElement = document.createElement('div')
		this.modalBackgroundElement = document.createElement('div')
		this.modalContentElement = document.createElement('div')
		this.modalHeaderElement = document.createElement('div')
		this.modalHeaderTextElement = document.createElement('div')
		this.modalHeaderCloseButtonElement = document.createElement('div')
		this.modalBodyElement = document.createElement('div')
	}
	initialize() {
		console.log(`log ::: ${this.constructor.name}.initialize`)
		this.createModalElements()
		this.setClasses()
		this.applyStyles()
		this.setEvent()
		this.createAnimationStyle()
		this.bodyElement.append(this.modalElement)
	}
	createModalElements() {
		this.modalElement.append(this.modalBackgroundElement, this.modalContentElement)
		this.modalContentElement.append(this.modalHeaderElement, this.modalBodyElement)
		this.modalHeaderElement.append(this.modalHeaderTextElement, this.modalHeaderCloseButtonElement)
		ReactDOM.render(<IoCloseOutline size={32} />, this.modalHeaderCloseButtonElement)
	}
	setClasses() {
		this.modalContentElement.classList.add('message-modal__content')
	}
	applyStyles() {
		this.setStyles(this.modalElement, MessageModalConfig.style.modal)
		this.setStyles(this.modalBackgroundElement, MessageModalConfig.style.modalBackground)
		this.setStyles(this.modalContentElement, MessageModalConfig.style.modalContent)
		this.setStyles(this.modalHeaderElement, MessageModalConfig.style.modalHeader)
		this.setStyles(this.modalHeaderCloseButtonElement, MessageModalConfig.style.modalCloseButton)
		this.setStyles(this.modalBodyElement, MessageModalConfig.style.modalBody)
	}
	setStyles(element: HTMLElement, styles: Partial<CSSStyleDeclaration>) {
		for (const property in styles) element.style[property] = styles[property]!
	}
	setEvent() {
		this.modalBackgroundElement.addEventListener('click', () => this.hide())
		this.modalHeaderCloseButtonElement.addEventListener('click', () => this.hide())
	}
	createAnimationStyle() {
		const styleElement = document.createElement('style')
		styleElement.innerHTML = MessageModalConfig.planeTextStyle.activationAnimation
		document.getElementsByTagName('head')[0].append(styleElement)
	}
	getModalTypeColor(modalType: ModalType) {
		switch (modalType) {
			case 'default': {
				return '#6c757d'
			}
			case 'caution': {
				return '#ffc107'
			}
			case 'error': {
				return '#dc3545'
			}
		}
	}
	async show({ modalType, headingText, message }: ShowPropsType) {
		console.log(`log ::: ${this.constructor.name}.show`)
		this.modalHeaderElement.style.backgroundColor = this.getModalTypeColor(modalType)
		this.modalHeaderTextElement.innerText = headingText || ''
		this.modalBodyElement.innerText = message
		this.modalElement.style.display = 'flex'
		this.modalContentElement.classList.add('activate')
		await new Promise((resolve) => setTimeout(resolve, 300))
		this.modalContentElement.classList.remove('activate')
	}
	async hide() {
		console.log(`log ::: ${this.constructor.name}.hide`)
		this.modalContentElement.classList.add('inactivate')
		await new Promise((resolve) => setTimeout(resolve, 280))
		this.modalElement.style.display = 'none'
		await new Promise((resolve) => setTimeout(resolve, 20))
		this.modalHeaderElement.style.backgroundColor = '#fff'
		this.modalHeaderTextElement.innerText = ''
		this.modalBodyElement.innerText = ''
		this.modalContentElement.classList.remove('inactivate')
	}
}

export const useMessageModal = () => {
	const [MessageModalInstance] = React.useState(new MessageModal())
	return MessageModalInstance
}
