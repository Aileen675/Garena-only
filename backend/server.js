const express =require('express');
const app = express();
PORT = 4000;

app.use(express.json());

let data = ['Thanapoom']

app.get('/', (req, res) => {
    res.send('ยินดีต้อนรับสู่ร้านขนมของเรา!');
});

app.get('/snacklist', (req, res) => {
 res.send('รายการขนม: ข้าวเกรียบ มันฝรั่งทอด ลูกประคำ ฃ็อกโกแลตมิสเตอร์บีส');
});

app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.send(data)
});

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    res.sendStatus(201)
    data.push(newEntry.name)
})

app.listen(PORT, () =>{
    console.log (`Server is runing on port ${PORT}`);
});