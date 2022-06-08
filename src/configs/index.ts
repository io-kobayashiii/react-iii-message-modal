export const MessageModalConfig = {
	style: {
		modal: {
			position: 'fixed',
			top: '0',
			left: '0',
			height: '100%',
			width: '100%',
			zIndex: '200',
			padding: '30px',
			display: 'none',
			justifyContent: 'center',
			alignItems: 'center',
		},
		modalBackground: {
			position: 'absolute',
			top: '0',
			left: '0',
			height: '100%',
			width: '100%',
			backgroundColor: 'rgba(0, 0, 0, 0.3)',
			cursor: 'pointer',
		},
		modalContent: {
			maxHeight: '500px',
			width: '100%',
			maxWidth: '500px',
			backgroundColor: '#fff',
			borderRadius: '8px',
			overflow: 'hidden',
			position: 'relative',
		},
		modalHeader: {
			padding: '30px',
			color: '#fff',
			fontWeight: 'bold',
			position: 'relative',
		},
		modalCloseButton: {
			position: 'absolute',
			top: '0',
			right: '0',
			height: '100%',
			width: '48px',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
		},
		modalBody: {
			padding: '30px',
			borderTop: '1px solid #dddddd',
		},
	},
	plainTextStyle: {
		activationAnimation: `
.message-modal__content.activate {
	animation: 0.3s activate-modal ease;
}
.message-modal__content.inactivate {
	animation: 0.3s activate-modal ease;
	animation-direction: reverse;
}

@keyframes activate-modal {
	0% {
		transform: scale(0.8);
	}
	50% {
		transform: scale(1.05);
	}
	100% {
		transform: scale(1);
	}
}`,
	},
}
