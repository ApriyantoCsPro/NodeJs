const fs = require('fs')
const readline = require('readline')

// // menuliskan  string ke file (synchronous)
// try{
//  fs.writeFileSync('data/test.txt', 'Menulis string menggunakan nodeJs')
// }catch(e){ console.log(e) }

// // menuliskan  string ke file (Asynchronous)
// fs.writeFile('data/Atest.txt', 'Menulis string menggunakan nodeJs', (e) => {
//     console.log(e)
// })

//Membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8')
// console.log(data)

// //Membaca isi file (Asynchronous)
// fs.readFile('data/Atest.txt','utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data) 
// })


//READLINE
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})




rl.question('Masukan nama anda : ', nama => {
    rl.question('Masukan nomor anda : ', noHp => {
        const contact = {nama, noHp}
        const file = fs.readFileSync('data/contacts.json', 'utf-8')
        const contacts = JSON.parse(file)
        contacts.push(contact)

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
        rl.close()
        console.log(`Terimakasih ${nama} telah memasuki data`)
    })
})

