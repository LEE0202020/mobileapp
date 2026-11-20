/**
 * 커스텀 폰트 등록 목록.
 * 키(패밀리 이름)는 global.css 변수, tailwind.config.js fontFamily, style 의 fontFamily 와 동일해야 합니다.
 * 경로는 이 파일 기준 상대 경로입니다. (tsconfig 의 "@/assets/*" 별칭은 "@/*" 에 가려지므로 사용하지 않음)
 */
export const fontAssets = {
  'Pretendard-Thin': require('../../assets/fonts/pretendard/Pretendard-Thin.otf'),
  'Pretendard-ExtraLight': require('../../assets/fonts/pretendard/Pretendard-ExtraLight.otf'),
  'Pretendard-Light': require('../../assets/fonts/pretendard/Pretendard-Light.otf'),
  'Pretendard-Regular': require('../../assets/fonts/pretendard/Pretendard-Regular.otf'),
  'Pretendard-Medium': require('../../assets/fonts/pretendard/Pretendard-Medium.otf'),
  'Pretendard-SemiBold': require('../../assets/fonts/pretendard/Pretendard-SemiBold.otf'),
  'Pretendard-Bold': require('../../assets/fonts/pretendard/Pretendard-Bold.otf'),
  'Pretendard-ExtraBold': require('../../assets/fonts/pretendard/Pretendard-ExtraBold.otf'),
  'Pretendard-Black': require('../../assets/fonts/pretendard/Pretendard-Black.otf'),
  'NanumSquareRound-Light': require('../../assets/fonts/nanumsquareround/NanumSquareRoundL.ttf'),
  'NanumSquareRound-Regular': require('../../assets/fonts/nanumsquareround/NanumSquareRoundR.ttf'),
  'NanumSquareRound-Bold': require('../../assets/fonts/nanumsquareround/NanumSquareRoundB.ttf'),
  'NanumSquareRound-ExtraBold': require('../../assets/fonts/nanumsquareround/NanumSquareRoundEB.ttf'),
} as const;
