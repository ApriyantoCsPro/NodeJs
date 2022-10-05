const fs = require('fs')
const readline = require('readline')
const validator = require('validator')

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

const dirPath = './data'
if(!fs.existsSync(dirPath)) {
  fs.mkdir(dirPath)
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, nama => {
            resolve(nama)
        })
    })
}

const loadContact = () => {
  const file = fs.readFileSync('data/contacts.json', 'utf-8')
  const contacts = JSON.parse(file)
  return contacts
}

const simpanContact = (nama, email, noHp) => {
  const contact = {nama, email, noHp}
  // const file = fs.readFileSync('data/contacts.json', 'utf-8')
  // const contacts = JSON.parse(file)
  const contacts = loadContact()

  // Cek duplikat 
  const duplikat = contacts.find((contact) => contact.nama === nama)
  if (duplikat) {
    console.log(`Nama sudah digunakan, silahkan gunakan nama lain!`)
    rl.close()
    return false
  }

  // Cek validator email
  if(email) {
    if(!validator.isEmail(email)) {
      console.log(`Email tidak valid!`)
      rl.close()
      return false
    }
  }

  //Cek validator noHp
  if(noHp) {
    if(!validator.isMobilePhone(noHp, 'id-ID')) {
      console.log(`Nomor Hp tidak valid!`)
      rl.close()
      return false
    }
  }

  contacts.push(contact)

  fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
  
  console.log(`Terimakasih ${nama} telah memasuki data`) 
  rl.close()
}

const listContact = () => {
  const contacts = loadContact()
  console.log('Daftar Kontak : ')
  contacts.forEach((contact, i) => {
    console.log(`${i+1}. ${contact.nama} - ${contact.noHp}`)
  })
  rl.close()
}

//Mencari detail nama
const detailContact = (nama) => {
  const contacts = loadContact()
  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
  if(!contact){
    console.log(`${nama} tidak ditemukan!`)
  }
  console.log(`nama : ${contact.nama}`)
  console.log(`noHp : ${contact.noHp}`)
  console.log(`email : ${contact.email}`)
  rl.close()
}

const deleteContact = (nama) => {
  const contacts = loadContact()
  const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase())
  if(contacts.length === newContacts.length){
    console.log(`${nama} tidak ditemukan!`)
  } else {
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))
    console.log(`Data contact ${nama} berhasil dihapus`)
  }
  rl.close()
}


module.exports = {tulisPertanyaan, simpanContact, listContact, detailContact, deleteContact}