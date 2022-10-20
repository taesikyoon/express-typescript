import * as express  from 'express';
const app: express.Express = express();
const port = 8000;


app.get(`/`, (req:express.Request,res:express.Response)=>{
  console.log(req);
  res.send({name:`taesikyoon97`,age:`26`,friends:[`유`,`상`,`민`]});
});

app.listen(port,()=>{
  console.log(`Server Runing http://localhost:${port}`);
});