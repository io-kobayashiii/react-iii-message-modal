# 概要
画面中央に通知用のモーダルを表示できます。  
DOM要素は自身で生成し、表示終了時にDOMツリーから消去されます。  
テキストを表示することを目的としており、エラー（赤系）、注意（黄色系）、正常（青系）のヘッダーカラーを表示時に指定できます。  
また、クローズ時にwindowオブジェクトに対して特定のイベントをdispatchするので、必要に応じてモーダルを閉じる際のイベントを登録してください。

<br>
<br>
<br>
<br>
<br>

# インストール
```bash
# npm
npm install -D react-iii-message-modal

# yarn
yarn add -D react-iii-message-modal
```

<br>
<br>
<br>
<br>
<br>

# 使い方
1. `useMessageModal()` を使用してインスタンスを取得
2. `useEffect` の中などDOMツリー生成が保証されているタイミングで `MessageModal.initialize()`
3. `MessageModal.show()` でモーダルタイプ、ヘッダーテキスト、表示メッセージを渡すとモーダルが表示される

```typescript
import * as React from 'react'
import { useMessageModal} from 'react-iii-message-modal'

export const SampleComponent = () => {
	const MessageModal = useMessageModal()
	React.useEffect(() => {
		MessageModal.initialize()
	}, [])
  const someAsynchronousFunction = async () => {
    await myPromise()
      .then((response) => MessageModal.show({ modalType: 'default', headingText: '成功', message: '成功しました。'})
      .catch((error) => MessageModal.show({ modalType: 'error', headingText: 'エラー', message: 'エラーが発生しました。'})
  }
}

export default SampleComponent
```
