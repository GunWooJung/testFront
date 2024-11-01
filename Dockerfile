# Node.js 기본 이미지 사용
FROM node:16

# 작업 디렉토리 설정
WORKDIR /root/my-node-app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 종속성 설치
RUN npm install

# 애플리케이션 소스 코드 복사
COPY . .

# 포트 노출
EXPOSE 3000

# 애플리케이션 시작
CMD ["node", "app.js"]
