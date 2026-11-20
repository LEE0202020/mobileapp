# 폰트 사용 방법 (페이지별)

## 공통 규칙

- 폰트는 **`Text` 컴포넌트에만** 적용됩니다. `View`나 페이지에 클래스를 걸어도 자식 `Text`에는 상속되지 않으니, 글자를 쓰는 `Text`마다 클래스를 붙여야 합니다.
- 기본 글꼴은 아직 바뀌지 않았습니다. 폰트를 쓰지 않은 `Text`는 기존 시스템 폰트로 보입니다.
- 방법은 두 가지입니다.
  - Tailwind 클래스: `<Text className="font-pretendard-bold">`
  - style 속성: `<Text style={{ fontFamily: 'Pretendard-Bold' }}>`

## 사용 가능한 클래스

| 클래스 | 폰트 |
| --- | --- |
| `font-pretendard-thin` / `-extralight` / `-light` | Pretendard Thin / ExtraLight / Light |
| `font-pretendard` | Pretendard Regular |
| `font-pretendard-medium` / `-semibold` / `-bold` / `-extrabold` / `-black` | Pretendard 각 굵기 |
| `font-nanum-round-light` | NanumSquareRound Light |
| `font-nanum-round` | NanumSquareRound Regular |
| `font-nanum-round-bold` / `font-nanum-round-extrabold` | NanumSquareRound Bold / ExtraBold |

## 페이지별 적용 예시

### 인증·시작

- `src/app/index.tsx` (시작 화면)
  - 제목: `font-pretendard-bold text-2xl`
- `src/app/(user)/login/index.tsx` (로그인)
  - 안내 문구: `font-pretendard text-base`
  - 버튼 문구: `font-pretendard-semibold`
- `src/app/(user)/onboarding/index.tsx` (온보딩)
  - 단계 제목: `font-pretendard-bold`
  - 설명: `font-pretendard text-gray-600`

### 커뮤니티

- `src/app/(user)/(member)/community/index.tsx` (목록)
  - 게시글 제목: `font-pretendard-semibold`
  - 작성자·날짜: `font-pretendard-light text-sm`
- `src/app/(user)/(member)/community/[postId]/index.tsx` (상세)
  - 본문: `font-pretendard text-base leading-6`
- `src/app/(user)/(member)/community/new/index.tsx` (작성)
  - 입력 라벨: `font-pretendard-medium`

### 마이페이지

- `src/app/(user)/(member)/my/index.tsx` (마이)
  - 사용자 이름: `font-pretendard-bold`
- `src/app/(user)/(member)/my/account/index.tsx` (계정)
  - 항목 이름: `font-pretendard-medium`
- `src/app/(user)/(member)/my/notifications/index.tsx` (알림)
  - 알림 내용: `font-pretendard`

### 임신 기록 (`pregnancies/[pregnancyId]`)

- 상세 홈 `index.tsx`: 주차·D-day 강조 `font-pretendard-black`
- `album/index.tsx`, `records/index.tsx`, `calendar/index.tsx`, `care/index.tsx`, `survey/index.tsx`, `guardians/index.tsx`, `end-request/index.tsx`
  - 페이지 제목: `font-pretendard-bold`
  - 본문: `font-pretendard`
- `pregnancies/new/index.tsx` (신규 등록)
  - 입력 라벨: `font-pretendard-medium`

### 기타
