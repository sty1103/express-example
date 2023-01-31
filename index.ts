import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import userRouter from './src/user/routes/UserRouter';
require('./src/configs/env');

const app = express();

/*
 *  미들웨어 설정
 */
if ( app.get('env')=='local' ) app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*
 *  서비스 라우팅을 미들웨어에 추가
 */
app.use('/api/user', userRouter);

/*
 *  전역 라우팅 설정
 */
app.get('/api', (req: Request, res: Response) => {
  res.send({hello: 'world'});
});

/*
 *  - GKE가 앱의 Health를 체크할 때 사용되는 URL
 *  - Body 내용은 상관없이 200 상태 코드를 응답해야 함
 */
app.get('/api/healthz', (req: Request, res: Response) => {
  res.status(200);
});

app.listen('8080', () => {
  console.log(`Server listening on port: 8080`);
});