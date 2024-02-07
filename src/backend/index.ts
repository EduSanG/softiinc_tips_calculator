import express, { Express, Request, Response } from "express"

const app: Express = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    res.send('Setup Succesful!! App Running!!')
})

app.listen(port, () => {
    console.log('backend running on port ' + port);
})