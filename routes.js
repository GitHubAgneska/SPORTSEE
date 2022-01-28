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

/**
 * @route   GET api/user/:id
 * @desc    Get user basic info
 * @access  Public
 */
router.get('/:id', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserById(Number(userId))

    return handleNoUserData(res, userData)
})

/**
 * @route   GET api/user/:id/activity
 * @desc    Get user activity info
 * @access  Public
 */
router.get('/:id/activity', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserActivityById(Number(userId))

    return handleNoUserData(res, userData)
})

/**
 * @route   GET api/user/:id/average-sessions
 * @desc    Get user average-sessions info
 * @access  Public
 */
router.get('/:id/average-sessions', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserAverageSession(Number(userId))

    return handleNoUserData(res, userData)
})

/**
 * @route   GET api/user/:id/performance
 * @desc    Get user performance info
 * @access  Public
 */
router.get('/:id/performance', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserPerformance(Number(userId))

    return handleNoUserData(res, userData)
})

module.exports = router
