<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

</br>
</br>

# NestJS_basic


### > 해당 Repository에서 학습한 NestJS의 내용은 다음과 같습니다. 

</br>

▶︎ NestJS의 구조

- scr 폴더: 대부분의 비즈니스로직이 들어가는곳
- eslintrc.js: 특정 규칙을 갖고 코드를 깔끔히 짤 수 있게 도와주는 라이브러리.
- .prettierrc: 주로 코드 형식을 맞추는데 사용
- nest-cli.json: nest 프로젝트 자체를 위해 특정한 설정을 할 수 있는 json 파일
- tsconfig.json: 타입스크립스틑 어떻게 컴파일 할지 설정
- tsconfig.build.json: tsconfig.json의 연장선상의 파일

</br>

▶︎ 모듈과 로직 흐름 이해
1. Client request
2. Controller handler receive
3. Service handle the requests
4. Controller response

</br>

▶︎ Type Script

</br>

▶︎ 게시판 CRUD

- Model 정의
- DTO(Data Transfer Object) 적용 data 제어
- @Param, @Body 이용 data 통신

</br>

▶︎ Pips

- Injectable() 데코레이터로 주석이 달린 class
- For data transformation, data validation
- 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동.
- NestJs는 메소드가 호출되기 직전 파이프를 삽입, 
  파이프틑 메소드로 향하는 인수를 수신하고 이에 대해 작동.
- Custom Pipes: Use transform method

<br/>

▶︎ Exception filters

- Throw new NotFoundException()
- Throw new BadRequestException()
- Custom exception: Insert error message at function parameter

<br/>

▶︎ DataBase 연결 / ORM 사용

- Postgre 연결
- typeORM 사용법 / DB with Entity
- repository(REQuest -> CONtroller -> SERvice -> REPository -> CON ~ SER -> response)

<br/>

▶︎ DataBase 및 TyprORM 설정 후 CRUD
- controller -> service -> repository with entity
- 게시물 CRUD
- 게시물 작성 시 DTO로 데이터 흐름을 안정적으로 만들어줌