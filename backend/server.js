import { app } from "./src/app.js";
import 'dotenv/config';

const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    return res.status(200).json({
        message:'server is running',
    })
})

app.listen(port, () => {
    console.log(`server is running on PORT ${process.env.PORT}`)
})