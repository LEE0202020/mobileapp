/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
      "./app/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // 커스텀 폰트 패밀리 (src/constants/fonts.ts 에서 useFonts 로 로드한 이름과 일치해야 함)
      fontFamily: {
        'pretendard-thin': ['Pretendard-Thin'],
        'pretendard-extralight': ['Pretendard-ExtraLight'],
        'pretendard-light': ['Pretendard-Light'],
        'pretendard': ['Pretendard-Regular'],
        'pretendard-medium': ['Pretendard-Medium'],
        'pretendard-semibold': ['Pretendard-SemiBold'],
        'pretendard-bold': ['Pretendard-Bold'],
        'pretendard-extrabold': ['Pretendard-ExtraBold'],
        'pretendard-black': ['Pretendard-Black'],
        'nanum-round-light': ['NanumSquareRound-Light'],
        'nanum-round': ['NanumSquareRound-Regular'],
        'nanum-round-bold': ['NanumSquareRound-Bold'],
        'nanum-round-extrabold': ['NanumSquareRound-ExtraBold'],
      },
    },
  },
  plugins: [],
}

