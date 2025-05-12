---
# Seo Meta React Modal

유연하게 커스터마이징 가능한 Compound Modal과 Alert/Confirm/Prompt 등 빠르게 사용할 수 있는 고수준 모달 컴포넌트를 제공합니다.
---

## 🔹 설치

```bash
npm install seo-meta-react-modal
```

---

## 🔹 기본 사용법 (Compound Pattern)

직접 모달의 구성 요소를 조립하여 원하는 형태로 구성할 수 있습니다.

```tsx
<Modal isOpen={isOpen} onClose={handleClose} position="center" size="medium">
  <Modal.BackDrop />
  <Modal.Content>
    <Modal.Title>제목</Modal.Title>
    <p>내용입니다</p>
    <Modal.CloseButton>닫기</Modal.CloseButton>
  </Modal.Content>
</Modal>
```

### 📘 구성 컴포넌트

| 컴포넌트            | 설명                                               |
| ------------------- | -------------------------------------------------- |
| `Modal`             | 루트 컴포넌트. ESC 키, 외부 클릭, 스크롤 차단 내장 |
| `Modal.BackDrop`    | 배경 오버레이                                      |
| `Modal.Content`     | 콘텐츠 영역. 위치 및 사이즈 지정                   |
| `Modal.Title`       | 제목                                               |
| `Modal.CloseButton` | 닫기 버튼                                          |
| `Modal.Footer`      | 푸터 정렬 컨테이너                                 |

---

## 🔹 빠르게 사용하는 고수준 컴포넌트 (Alert / Confirm / Prompt)

직접 `Modal.*`를 조립하지 않고도, 빠르게 사용할 수 있는 **간단한 API**입니다.

### ✅ AlertModal

```tsx
<AlertModal isOpen={isOpen} onClose={handleClose} message="비밀번호가 틀렸습니다." />
```

### ✅ ConfirmModal

```tsx
<ConfirmModal isOpen={isOpen} onClose={handleClose} title="삭제하시겠습니까?" message="복구할 수 없습니다." onConfirm={handleDelete} />
```

### ✅ PromptModal

```tsx
<PromptModal isOpen={isOpen} onClose={handleClose} title="쿠폰 코드를 입력해 주세요" onConfirm={(code) => console.log('입력값:', code)} />
```

> 내부적으로 `Modal` 컴포넌트를 사용하며, 스타일/기능 확장도 가능합니다.

---

## 🧩 언제 어떤 걸 써야 하나요?

| 목적                       | 추천 컴포넌트            |
| -------------------------- | ------------------------ |
| 빠른 확인/입력용 모달      | Alert / Confirm / Prompt |
| 커스터마이징이 필요한 경우 | Modal Compound API       |

---

## 📄 라이선스

MIT License
© 2025 youdame,
