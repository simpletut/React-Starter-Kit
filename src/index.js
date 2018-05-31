import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import bodyParser from 'body-parser';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(['/*/:param', '*'], (req, res) => {
    
    const ParamValue = req.params.param ? req.params.param : null;

    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, ParamValue) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if(context.url){
            return res.redirect(301, context.url);
        }

        // check if 404
        if(context.notFound){
            res.status(404);
        }
        res.send(content);
    });
    
});

app.post('/sendmail', (req, response) => {

    var mailer = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '',
            pass: ''
        }
    });

    mailer.use('compile', hbs({
        viewPath: 'build/assets/email_templates',
        extName: '.hbs'
    }));

    mailer.sendMail({
        from: '',
        to: '',
        subject: 'Contact Form',
        template: 'contactForm',
        context: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            message: req.body.message
        }
    }, function(err, res){
        if(err){
            console.log(err)
            response.status(500).send('500 - Internal Server Error')
        }
        response.status(200).send('200 - The request has succeeded.') 
    });

});

app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});