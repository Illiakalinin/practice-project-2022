# Инструкции для запуска приложения

## Запуск серверной части

1. Считая, что вы находитесь в корне проекта, перейти в папку с серверной частью приложения:

   - `cd server`

1. Установить npm-пакеты (один раз, перед первым запуском):

   - `npm i`

1. Запустить серверную часть приложения:

   - `npm start`

## Запуск клиентской части

1. Перемкнутися на 16 версіюNode.js

   - `nvm use 16`

1. Считая, что вы находитесь в корне проекта, перейти в папку с клиентской частью приложения:

   - `cd client`

1. Запустить ReactApp в dev режиме (При первом запуске не забудьте предварительно загрузить все пакеты: `npm i`):

   - `npm start`

- Приложение будет доступно в браузере по адресу [http://localhost:3000](http://localhost:3000) (или на другом свободном порту).

## Примечания

- При работе приложения в dev-режиме понадобятся данные тестовых банковских карт:

  - для оплаты работы с карты buyer`а при создании контеста:
    - Card number: 4111111111111111
    - Expires end: 09/23
    - cvc/cvv: 505
  - для вывода средств на карту creator`а:
    - Card number: 5105105105105100
    - Expires end: 09/23
    - cvc/cvv: 510

###

- Данные пользователей:

  - для роли buyer (он же customer):
    - email: buyer@gmail.com
    - password: buyer@gmail.com
  - для роли creative (он же creator):
    - email: creative@gmail.com
    - password: creative@gmail.com
