// const yargs = require('yargs')

const {tulisPertanyaan, simpanContact, listContact, detailContact, deleteContact} = require('./contacts')


const main = async () => {
  const nama = await tulisPertanyaan('Masukan nama anda : ')
  const email = await tulisPertanyaan('Masukan email anda : ')
  const noHp = await tulisPertanyaan('Masukan noHp anda : ')

  simpanContact(nama, email, noHp)
}

const findNama = async () => {
  const nama = await tulisPertanyaan('Masukan nama : ')
  detailContact(nama)
}

const findDeleteNama = async () => {
  const nama = await tulisPertanyaan('Masukan nama : ')
  deleteContact(nama)
}

const command = process.argv[2]
if(command === 'add') {
  main()
} else if(command === 'list') {
  listContact()

  // yargs.command({
  //   command: 'list',
  //   describe: 'Menampilkan semua nama & noHp contact',
  //   handler() {
  //     listContact()
  //   }
  // })
} else if(command === 'detail') {
  findNama()
} else if( command === 'delete') {
  findDeleteNama()
}




// rl.question('Masukan nama anda : ', nama => {
//     rl.question('Masukan nomor anda : ', noHp => {
//         const contact = {nama, noHp}
//         const file = fs.readFileSync('data/contacts.json', 'utf-8')
//         const contacts = JSON.parse(file)
//         contacts.push(contact)

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
//         rl.close()
//         console.log(`Terimakasih ${nama} telah memasuki data`)
//     })
// })

