dev:
	yarn run dev

start:
	yarn start

docker-build:
	docker build -t newfaceof/quiz-telegram-bot:latest .
docker-run:
	docker run newfaceof/quiz-telegram-bot