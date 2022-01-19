const express = require('express')
const idx = require('idx')
const path = require('path')
const router = express.Router()

const {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance
} = require('./models')

const { handleNoUserData } = require('./middleware')


router.get('/api/user/:id', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserById(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/api/user/:id/activity', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserActivityById(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/api/user/:id/average-sessions', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserAverageSession(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/api/user/:id/performance', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserPerformance(Number(userId))

    return handleNoUserData(res, userData)
})

// Resolve any address with built index.html (where spa root lives)
// DEV
// router.get("/*", (_, res) => { res.sendFile(path.join(__dirname, "client/public/index.html")) })

// PROD
router.get('/*', (_, res) => { res.sendFile(path.join(__dirname, 'client/build/index.html'))})

module.exports = router
