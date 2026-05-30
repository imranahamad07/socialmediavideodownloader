import { app } from "./src/app.js";
import 'dotenv/config';

app.get('/',(req,res)=>{
    return res.status(200).json({
        message:'server is running',
    })
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT ${process.env.PORT}`)
})