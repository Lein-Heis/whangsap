const promise = require('bluebird')

const initOptions = {
    promiseLib: promise
}

const pgp = require('pg-promise')(initOptions)

const db = pgp({
    connectionString: 'postgres://egzrnwahlvugzv:adb67adcc11ca1171f87ae431e14babd6d482818046463eade7db428c8ea1fa6@ec2-54-205-183-19.compute-1.amazonaws.com:5432/dftnnqufqaurui',
    ssl: {
      rejectUnauthorized: false
    }
})

// read data
const getDataLeveling = async () => new Promise((resolve, reject) => {
    db.any(`SELECT leveling FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].leveling)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataAntilink = async () => new Promise((resolve, reject) => {
    db.any(`SELECT antilink FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].antilink)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataLevels = async () => new Promise((resolve, reject) => {
    db.any(`SELECT levels FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].levels)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataRegistered = async () => new Promise((resolve, reject) => {
    db.any(`SELECT registered FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].registered)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataWelkom = async () => new Promise((resolve, reject) => {
    db.any(`SELECT welkom FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].welkom)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataNsfw = async () => new Promise((resolve, reject) => {
    db.any(`SELECT nsfw FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].nsfw)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataSamih = async () => new Promise((resolve, reject) => {
    db.any(`SELECT samih FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].samih)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataEvent = async () => new Promise((resolve, reject) => {
    db.any(`SELECT events FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].events)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataLimits = async () => new Promise((resolve, reject) => {
    db.any(`SELECT limits FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].limits)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataUang = async () => new Promise((resolve, reject) => {
    db.any(`SELECT uang FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].uang)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataBanned = async () => new Promise((resolve, reject) => {
    db.any(`SELECT banned FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].banned)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataPrem = async () => new Promise((resolve, reject) => {
    db.any(`SELECT prem FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].prem)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataWakil = async () => new Promise((resolve, reject) => {
    db.any(`SELECT wakil FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].wakil)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataBad = async () => new Promise((resolve, reject) => {
    db.any(`SELECT bad FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].bad)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataBadword = async () => new Promise((resolve, reject) => {
    db.any(`SELECT badword FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].badword)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataAfk = async () => new Promise((resolve, reject) => {
    db.any(`SELECT afk FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].afk)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataSession = async () => new Promise((resolve, reject) => {
    db.any(`SELECT sessions FROM public.leinbot WHERE id_data = 1;`)
    .then((data) => {
        resolve(data[0].sessions)
    })
    .catch((error) => {
        reject(error)
    })
})

// update data
const updateDataLeveling = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET leveling = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataAntilink = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET antilink = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataLevels = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET levels = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataRegistered = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET registered = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataWelkom = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET welkom = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataNsfw = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET Nsfw = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataSamih = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET samih = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataEvent = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET event = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataLimits = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET limits = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataUang = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET uang = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataBanned = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET banned = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataPrem = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET Prem = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataWakil = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET Wakil = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataBad = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET Bad = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataBadword = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET Badword = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataAfk = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET afl = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataSession = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET sessions = '${databaru}' WHERE id_data = 1;`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

module.exports = {
    getDataLeveling,
    getDataAntilink,
    getDataLevels,
    getDataRegistered,
    getDataWelkom,
    getDataNsfw,
    getDataSamih,
    getDataEvent,
    getDataLimits,
    getDataUang,
    getDataBanned,
    getDataPrem,
    getDataWakil,
    getDataBad,
    getDataBadword,
    getDataAfk,
    getDataSession,
    updateDataLeveling,
    updateDataAntilink,
    updateDataLevels,
    updateDataRegistered,
    updateDataWelkom,
    updateDataNsfw,
    updateDataSamih,
    updateDataEvent,
    updateDataLimits,
    updateDataUang,
    updateDataBanned,
    updateDataPrem,
    updateDataWakil,
    updateDataBad,
    updateDataBadword,
    updateDataAfk,
    updateDataSession
}