const promise = require('bluebird')

const initOptions = {
    promiseLib: promise
}

const pgp = require('pg-promise')(initOptions)

const db = pgp({
    connectionString: 'postgres://ryabtygryxmkui:f4122b649607d861d0368774941074b888f91bc2ab07cc1cefa012cd49bf7d7b@ec2-3-214-3-162.compute-1.amazonaws.com:5432/d81suo34iivrei',
    ssl: {
      rejectUnauthorized: false
    }
})

// read data
const getDataLeveling = async () => new Promise((resolve, reject) => {
    db.any(`SELECT leveling FROM public.leinbot`)
    .then((data) => {
        resolve(data[0].leveling)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataLevels = async () => new Promise((resolve, reject) => {
    db.any(`SELECT levels FROM public.leinbot`)
    .then((data) => {
        resolve(data[0].levels)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataRegistered = async () => new Promise((resolve, reject) => {
    db.any(`SELECT registered FROM public.leinbot`)
    .then((data) => {
        resolve(data[0].registered)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataWelkom = async () => new Promise((resolve, reject) => {
    db.any(`SELECT welkom FROM public.leinbot`)
    .then((data) => {
        resolve(data[0].welkom)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataSamih = async () => new Promise((resolve, reject) => {
    db.any(`SELECT samih FROM public.leinbot`)
    .then((data) => {
        resolve(data[0].samih)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataEvent = async () => new Promise((resolve, reject) => {
    db.any(`SELECT event FROM public.leinbot`)
    .then((data) => {
        resolve(data[0].event)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataLimits = async () => new Promise((resolve, reject) => {
    db.any(`SELECT limits FROM public.leinbot`)
    .then((data) => {
        resolve(data[0].limits)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataUang = async () => new Promise((resolve, reject) => {
    db.any(`SELECT uang FROM public.leinbot`)
    .then((data) => {
        resolve(data[0].uang)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataBanned = async () => new Promise((resolve, reject) => {
    db.any(`SELECT banned FROM public.leinbot`)
    .then((data) => {
        resolve(data[0].banned)
    })
    .catch((error) => {
        reject(error)
    })
})

const getDataSession = async () => new Promise((resolve, reject) => {
    db.any(`SELECT sessions FROM public.leinbot`)
    .then((data) => {
        resolve(data[0].sessions)
    })
    .catch((error) => {
        reject(error)
    })
})

// update data
const updateDataLeveling = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET leveling = '${databaru}'`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataLevels = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET levels = '${databaru}'`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataRegistered = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET registered = '${databaru}'`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataWelkom = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET welkom = '${databaru}'`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataSamih = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET samih = '${databaru}'`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataEvent = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET event = '${databaru}'`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataLimits = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET limits = '${databaru}'`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataUang = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET uang = '${databaru}'`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataBanned = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET banned = '${databaru}'`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

const updateDataSession = async (databaru) => new Promise((resolve, reject) => {
    db.any(`UPDATE public.leinbot SET sessions = '${databaru}'`)
    .then((data) => {
        resolve(true)
    })
    .catch((error) => {
        reject(error)
    })
})

module.exports = {
    getDataLeveling,
    getDataLevels,
    getDataRegistered,
    getDataWelkom,
    getDataSamih,
    getDataEvent,
    getDataLimits,
    getDataUang,
    getDataBanned,
    getDataSession,
    updateDataLeveling,
    updateDataLevels,
    updateDataRegistered,
    updateDataWelkom,
    updateDataSamih,
    updateDataEvent,
    updateDataLimits,
    updateDataUang,
    updateDataBanned,
    updateDataSession
}