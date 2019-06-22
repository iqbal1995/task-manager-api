const sgMail = require('@sendgrid/mail')
//const sendgridApiKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'briell.az.zatunnur@gmail.com',
        subject: 'this is use sendgrid api',
        text:  `welcome the app, ${name}. let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'briell.az.zatunnur@gmail.com',
        subject: 'sorry to see you go!',
        text: `good bye ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}