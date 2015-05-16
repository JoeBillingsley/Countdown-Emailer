var mailer = require('nodemailer');

var sender = 'countdown@josephbillingsley.co.uk';
var receivers = 'user@anywhere.co.uk, otheruser@somewhere.com';

var transport = mailer.createTransport({
	service: 'Gmail',
	auth: {
		user: sender,
		pass: '*****'
	}
});

var mailOptions = {
	from: 'Countdown Mailer <' + sender + '>',
	to: receivers,
	subject: 'Test email',
	text: '1 2 3 4 5'
};

transport.sendMail(mailOptions, function(error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Message sent: ' + info.response);
	}
});