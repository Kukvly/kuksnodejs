const jwt = require('jsonwebtoken');

const { Domain, User } = require('../models');

exports.createToken = async (req, res) => {
    const { clientSecret } = req.body;
    try{
        const domain = await Domain.findOne({
            where: { clientSecret },
            include: {
                model: User,
                attribute: ['nick', 'id'],
            },
        });
        
        if(!domain) {
            return res.status(401).json({
                code: 401,
                message: 'The domain is not registrated. First registrate the domain.'
            });
        }

        const token = jwt.sign({
            id: domain.User.Id,
            nick: domain.User.nick,
        }, process.env.JWT_SECRET, {
            expiresIn: '1m', // 1 minute
            issuer: 'kukssns',
        });
        return res.json({
            code: 200,
            message: 'Token has been issued.',
            token,
        });
    } catch(error){
        console.error(error);
        return res.status(500).json({
            code: 500,
            message: 'Server Error',
        });
    }
};

exports.tokenTest = (req, res) => {
    res.json(res.locals.decoded);
};