exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 PENDAFTARAN 」*\n\n*Cara daftar ${prefix}daftar nama|umur* \n*contoh ${prefix}daftar aine|22*`
}

exports.rediregis = () => {
	return`*「 SUDAH TERDAFTAR 」*\n\n*Kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner AINEBOT, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA NEGARA 」*\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting!`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

//anjing INFO DEVELOPER jangan di ganti bangsat!!
//cuma numpang nama doang lu !!
//kalau INFO DEVELOPER ga di ganti gw ikhlas !!
//---------------------------
//Fuck dont change INFO DEVELOPER !!
//You only get your name fuck !!
//If INFO DEVELOPER not in change, its okey!!
exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `「 *AINE BOT* 」

◪ *INFO DEVELOPER*
  ❏ Nama: Muhammad Ridwan Reynaldy
  ❏ Wa: wa.me/62895330379186
  ❏ Ig: https://instagram.com/anemio999
  ❏ Fb: https://facebook.com/ridwan228
  ----------------------------------
◪ *INFO AINEBOT*
  ❏ Nama: AINEBOT 
  ❏ Nomor: wa.me/12195159558
  ❏ Fb: https://facebook.com/ainneboot
  ----------------------------------
◪ *YOUR INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nama: ${pushname}
  ❏ Uang mu : Rp${uangku}
  ❏ Nomer: ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Pangkat : ${role}
  ❏ Level: ${getLevelingLevel(sender)}
  ❏ User register : ${_registered.length}
            *Rules* - *Simple*
▬▭▬▭▬▭▬▭▬▭▬▭▬
  ❏ *Spam : Auto Block!*
  ❏ *Beri Jeda 10detik Saat Menggunakannya!!*
  ❏ *Bug/Error Harap Cht Owner!*
  ❏ *Untuk Memastikan Bot Off Atau On*
  ❏ *Ketik ${prefix}bot*
  ❏ *Untuk Melihat Sisa Limit Kamu*
  ❏ *Ketik ${prefix}limit*
  ❏ *Harap Sabar Dengan Bug²nya!*
  ❏ *Gunakan Bot Sebaik-baiknya!*
▬▭▬▭▬▭▬▭▬▭▬▭▬
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}lpr
  ├─ ❏ ${prefix}infodev
  ├─ ❏ ${prefix}infoadmin
  ├─ ❏ ${prefix}del [premium]
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}requestlimit
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  ├─ ❏ ${prefix}buypremium
  ├─ ❏ ${prefix}hargaprem
  ├─ ❏ ${prefix}gcainebot
  ├─ ❏ ${prefix}menupict
  └─ ❏ ${prefix}menuowner

◪ *MAKER*
  │
  ├─ ❏ ${prefix}nulis [teks]
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}tomp3 [premium]
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}blood [teks]
  ├─ ❏ ${prefix}text3d [teks]
  ├─ ❏ ${prefix}bplogo [teks]
  ├─ ❏ ${prefix}glitch [teks]|[teks]
  ├─ ❏ ${prefix}hartatata [teks]
  ├─ ❏ ${prefix}imgmaker [link jpg/png]
  └─ ❏ ${prefix}calendermaker [link jpg/png]

◪ *OTHER FITUR*
  │
  ├─ ❏ ${prefix}ssweb [link]
  ├─ ❏ ${prefix}halah [teks]
  ├─ ❏ ${prefix}hilih [teks]
  ├─ ❏ ${prefix}huluh [teks]
  ├─ ❏ ${prefix}heleh [teks]
  ├─ ❏ ${prefix}holoh [teks]
  ├─ ❏ ${prefix}alay [teks] ❌
  ├─ ❏ ${prefix}say [teks]
  ├─ ❏ ${prefix}wiki [teks]
  ├─ ❏ ${prefix}kbbi [teks]
  ├─ ❏ ${prefix}map [teks]
  ├─ ❏ ${prefix}kalkulator [teks]
  ├─ ❏ ${prefix}fml
  ├─ ❏ ${prefix}lirik [teks]
  ├─ ❏ ${prefix}brainly [teks]
  ├─ ❏ ${prefix}bitly [link]
  ├─ ❏ ${prefix}chord [teks]
  ├─ ❏ ${prefix}katacinta 
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}resepmakanan [teks]
  ├─ ❏ ${prefix}sms
  ├─ ❏ ${prefix}kodepos
  ├─ ❏ ${prefix}cerpen 
  ├─ ❏ ${prefix}kata [text]
  ├─ ❏ ${prefix}faktaunik 
  ├─ ❏ ${prefix}translate [lang|text]❌
  ├─ ❏ ${prefix}pantun
  ├─ ❏ ${prefix}ccgenerator
  ├─ ❏ ${prefix}namaninja [teks]
  └─ ❏ ${prefix}artinama [teks]

◪ *KERANG AJAIB*
  │
  ├─ ❏ ${prefix}gantengcek [teks]
  ├─ ❏ ${prefix}cantikcek [teks]
  ├─ ❏ ${prefix}sangecek [teks]
  ├─ ❏ ${prefix}gaycek [teks]
  ├─ ❏ ${prefix}lesbicek [teks]
  ├─ ❏ ${prefix}watak [teks]
  ├─ ❏ ${prefix}hobby [teks]
  ├─ ❏ ${prefix}apakah [teks]
  ├─ ❏ ${prefix}kapankah [teks]
  ├─ ❏ ${prefix}bisakah [teks]
  ├─ ❏ ${prefix}bagaimanakah [teks]
  └─ ❏ ${prefix}rate [teks]

◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}1cak
  ├─ ❏ ${prefix}pinterest [teks]
  ├─ ❏ ${prefix}ytmp3 [link][premium]
  ├─ ❏ ${prefix}ytmp4 [link][premium]
  ├─ ❏ ${prefix}play [teks][premium]
  ├─ ❏ ${prefix}play2 [teks][premium]
  ├─ ❏ ${prefix}fbmp4 [link][premium] ❌
  ├─ ❏ ${prefix}tiktokdl [link][premium] ❌
  └─ ❏ ${prefix}joox [teks][premium]

◪ *MEME*
  │
  ├─ ❏ ${prefix}meme ❌
  └─ ❏ ${prefix}memeindo 

◪ *FIND TARGET*
  │
  ├─ ❏ ${prefix}mutual [premium]
  └─ ❏ ${prefix}next [premium]

◪ *SPAM*
  │
  ├─ ❏ ${prefix}spam5
  ├─ ❏ ${prefix}spam10
  ├─ ❏ ${prefix}spamcall [premium]
  └─ ❏ ${prefix}spamsms [premium]

◪ *QUOTES*
  │
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}quoteskehidupan
  ├─ ❏ ${prefix}quotesislami
  ├─ ❏ ${prefix}quotesmuslim 
  ├─ ❏ ${prefix}quotesnasehat
  ├─ ❏ ${prefix}quotescinta
  ├─ ❏ ${prefix}quotesmotivasi
  ├─ ❏ ${prefix}twichquotes
  └─ ❏ ${prefix}animequotes

◪ *LIMIT & UANG & LB*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit [nominal]
  ├─ ❏ ${prefix}buypremiumlimit [nominal]
  ├─ ❏ ${prefix}transfer [nomor|nominal]
  └─ ❏ ${prefix}leaderboard

◪ *SOUND*
  │
  ├─ ❏ ${prefix}aine
  ├─ ❏ ${prefix}sayang ku
  ├─ ❏ ${prefix}terima kasih
  ├─ ❏ ${prefix}hai [premium]
  ├─ ❏ ${prefix}hallo [premium]
  ├─ ❏ ${prefix}huaaa [premium]
  ├─ ❏ ${prefix}soundplaydate [premium]
  ├─ ❏ ${prefix}soundbakahentai [premium]
  ├─ ❏ ${prefix}sayonichan [premium]
  └─ ❏ ${prefix}gtts [premium]

◪ *ISLAM*
  │
  ├─ ❏ ${prefix}jadwalsholat [teks]
  ├─ ❏ ${prefix}niatshalat [teks]
  ├─ ❏ ${prefix}findnabi [teks]
  ├─ ❏ ${prefix}asmaulhusna
  ├─ ❏ ${prefix}niatshalat
  └─ ❏ ${prefix}quran

◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk [teks]
  ├─ ❏ ${prefix}igstalk [teks]
  └─ ❏ ${prefix}igstalk2 [teks]

◪ *GAME*
  │
  └─ ❏ ${prefix}tebakgambar

◪ *MEDIA*
  │
  ├─ ❏ ${prefix}trendtwit
  ├─ ❏ ${prefix}beritahoax
  └─ ❏ ${prefix}tribunews 

◪ *APK*
  ├─ ❏ ${prefix}apkpure [teks]
  ├─ ❏ ${prefix}happymod [teks]
  └─ ❏ ${prefix}moddroid [teks]

◪ *18+ Nsfw*
  |
  ├─ ❏ ${prefix}blowjob [premium]
  └─ ❏ ${prefix}randomhentai [premium]

◪ *FUN*
  │
  ├─ ❏ ${prefix}truth
  ├─ ❏ ${prefix}dare
  ├─ ❏ ${prefix}slap
  ├─ ❏ ${prefix}nangis
  ├─ ❏ ${prefix}cium
  ├─ ❏ ${prefix}simi
  └─ ❏ ${prefix}simii

◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}infonomor
  ├─ ❏ ${prefix}infocuaca [teks]
  └─ ❏ ${prefix}covid

◪ *GROUP*
  │
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}wakillist
  ├─ ❏ ${prefix}premiumlist
  ├─ ❏ ${prefix}banlist
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}grup [buka/tutup]
  ├─ ❏ ${prefix}antibadword [1/0]
  ├─ ❏ ${prefix}welcome [1/0]
  ├─ ❏ ${prefix}antilink [1/0]
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]

◪ *OTHER*
  │
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  ├─ ❏ ${prefix}wait [premium]
  ├─ ❏ ${prefix}neonime
  └─ ❏ ${prefix}afk
◪ *POWERED BY AINEBOT*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
  ❏ Nama : ${pushname}
  ❏ Nomer : ${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Limit :  +3
  ❏ Pangkat :  ${role}
  ❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/62895330379186\n\n*Note : Kami akan berikan random dari 1-10*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}
