# 설치 방법

```
npm install luxo-react-modal
```

# 적용 방법

```jsx
import { Modal } from "luxo-react-modal";
```

```jsx
// tsx 컴포넌트에서
const [isOpen, setIsOpen] = useState(false);

const closeModal = () => setIsOpen(false);

return(
  ...
  <Modal isOpen={isOpen} closeModal={closeModal}>
  ...
)
```
