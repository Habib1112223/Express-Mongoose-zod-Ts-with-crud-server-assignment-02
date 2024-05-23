import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/modules/product/product.route';
import { OrderRoute } from './app/modules/orders/order.route';

const app: Application = express();


app.use(express.json());
app.use(cors());


app.get('/', (req: Request, res: Response) => {
    res.send('server is running for the backend')
});


app.use('/api', ProductRoute);
app.use('/api', OrderRoute);


app.all('*', (req: Request, res: Response) => {

    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

export default app;