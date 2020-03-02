const User = require('./models/User');

const All = require('./models/All');

const express       =   require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('config');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const app = express();

app.use(cookieParser ());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || config.get('port') || 5000;
const MONGO = config.get('mongoUri');

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

async function start() {
    try {
        await mongoose.connect(MONGO, {
            useNewUrlParser: true
            , useUnifiedTopology: true
            , useCreateIndex: true
            , autoIndex: false
        });
        app.listen(PORT, console.log(`Server start ${PORT}`))
    } catch (e) {
        console.log('server error', e.message)
        process.exit(1);
    }
}

start();

options = {maxAge: 900000, httpOnly: true,};
optionsMoment = {maxAge: 20000, httpOnly: true,};
randomNumber=Math.random().toString();
randomNumber=randomNumber.substring(2,randomNumber.length);

//###############################################################
app.route('/login')
    .get((req, res) => {
        let id = req.cookies.code;
        if (id) {
            User.find({_id: id}).exec((err, user) => {
                res.send({
                    _id: user[0]._id
                    , status: true
                    , message: "User, Entry"
                })
            })
        } else {
            res.json({mess: 'error cookie undefined', status: false, user: ''})
        }
    })
    .post((req, res) => {
        let log = String(req.body.login);
        let pass = String(req.body.pass);

        User.find({login: log, password: pass}).exec((err, user) => {

            if (user.length !== 0) {
                res.cookie('code', user[0]._id, options);

                res.send({
                    _id: user[0]._id
                    , status: true
                    , message: "User, Entry"
                })
            } else {
                res.json({mess: 'Enrty, corrected login or password', status: false})
            }
        })
    });
//#######################################################################
app.route('/registration')
    .post((req, res) => {
        let log = req.body.login;
        let pass = req.body.pass;
        let name = req.body.name;

        User.find({login: log, password: pass}).exec((err, user) => {

            if (user.length === 0) {
                let NewUser = new User({
                    login: log
                    , password: pass
                    , description: {
                        name: name
                        , photo: null
                        , Count: 'Third Planet from the Sun'
                        , status: 'World for me, I`m for World'
                    }
                });
                NewUser.save((err) => {
                    if (!err) {
                        console.log('Exelent')
                    } else {
                        console.log('err01', err)
                    }
                });
                res.send({mess: 'OK', status: true})
            } else {
                res.send({mess: 'User exists. login with your username or password', status: true})
            }
        })
    });
//############################################################################
app.route('/exit')
// очищение куков на стороне браузера
    .get((req, res)=>{
        res.cookie('code', undefined, optionsMoment);
        res.json({mess: 'User deleted', status: false})
    });
//###############################################################
app.route('/profile/:profile')
    .get((req, res) => {
        let profile = new ObjectId(req.params.profile);
        User.findOne({_id: profile}).exec((err, prof) => {
            console.log(prof._id, '22')
            if (prof) {
                // console.log(prof,'33')
                res.send({profile: prof.description, mess: 'Profile found', status: true})
            } else {
                res.send({mess: 'profile, in corrected', status: false})
            }
        });
    });

app.post('/photo/ava', (req, res, next) => {
    let id = req.cookies.code;
    console.log(id)
    let photo = req.body.photo
    console.log(photo)
    User.findOne({_id: id}).exec((err, user) => {
        console.log(user)
        if (user) {
            user.description.photo = photo;
            user.save();
        } else {
            res.json({mess: 'error cookie undefined', status: false, user: ''})
        }
    })
})


app.post('/status', (req, res, next) => {
    let id = req.cookies.code;
    console.log(id)
    let status = req.body.status
    console.log(status)
    User.findOne({_id: id}).exec((err, user) => {
        console.log(user)
        if (user) {
            user.description.status = status;
            user.save();
        } else {
            res.json({mess: 'error cookie undefined', status: false, user: ''})
        }
    })
})


// app.route('/message/:profile')
//    .get((req,res)=>{
//       let code=parseInt(req.cookies.code);
//       let profile=parseInt(req.params.profile);
//
//       Message.find({_id1:code, _id2:profile})
//           .exec((err,mess)=>{
//               if(mess){
//                   res.json({mess:mess.message, status:true })
//               }else {
//                   Message.find({_id1: profile, _id2: code})
//                       .exec((err, mess) => {
//                           if (mess) {
//                               res.send({mess: mess.message, status: true})
//                           } else {
//                               new Message({_id1: code, _id2: profile, message: []});
//                               Message.find({_id1: code, _id2: profile}).exec((err, mess) => {
//                                   res.json({mess: mess.message, status: true})
//                               })
//                           }
//                       })
//               }
//           })
//    })
//отправить сообщение
//    .post((req,res,next)=>{
//      userID = parseInt( req.cookies.userLogin );
//      profile = parseInt( req.cookies.profileLogin );
//      messageText=req.body.messageText;
//
//      if(userID && profile && messageText && messageText!==" ") {
//        let X = messagEE.filter
//        (x => (x.id1 === userID && x.id2 === profile) || (x.id1 === profile && x.id2 === userID));
//         X[0].message.push({user: userID, message: messageText});
//
//         ServerMessage = {
//              text: "User & Profile & message is not empty!"
//             ,status: true
//         }
//      }
//      else{
//         ServerMessage = {
//              text: "User & Profile & message is not corrected!(empty or undefined)"
//             ,status: false
//         }
//      }
//    res.json(ServerMessage);
//    next();
//    });
// //###############################################################
//     app.route('/subscribers')
//     // это возвращает всех пользователей в списке по сколько нужно
//     .get((req, res)=>{
//         userID = parseInt(req.cookies.userLogin);
//         z = parseInt(req.query.page);//страница
//         x = parseInt(req.query.coun);//по сколько на странице
//         People=[];
//
//         if(userID && userID!==0) {
//           fullname.filter(x => (x.id === userID) ? ListFriendMass = x.aboutUser.friend : '');
//
//           for (let i = 0; i < fullname.length; i++) {
//              ListStatus = ListFriendMass.filter(x => x === fullname[i].id);
//               ListStatus.length !== 0
//              ? ListPeople = {
//              ...fullname[i].aboutUser
//              , fotto: fottoSS[i].max
//              , id: fullname[i].id
//              , friend: true
//                }
//              : ListPeople = {
//                      ...fullname[i].aboutUser
//                      , fotto: fottoSS[i].max
//                      , id: fullname[i].id
//                      , friend: false
//                };
//              People.push(ListPeople)
//           }
//           f = z * x - x;
//           s = x * z;
//           allPeople = fullname.length;
//           s > fullname.length ? s = fullname.length :
//           f = parseInt(f);
//           s = parseInt(s);
//           people = People.slice(f, s);
//           ServerMessage = {
//             text: `${z} List People & ${allPeople} all People is corrected!`
//            ,status: true
//           }
//         }else{
//           ServerMessage = {
//              text: " List People all People is not corrected!`!(empty or undefined)"
//             ,status: false
//           }
//         }
//
//           res.json([people, allPeople,ServerMessage]);
//           people = [];
//           People = [];
//     })
//     //подписаться и отписаться
//     .post((req,res,next)=>{
//         UserID=parseInt(req.cookies.userLogin);
//
//         idProf=req.body.id;
//         frienDD=req.body.friend;
//
//
//             if(idProf && UserID){
//                 f=fullname.filter(s=>(s.id===UserID))
//                 fIndex=f[0].aboutUser.friend.indexOf(idProf,0)
//                 fIndex < 0
//                 ?fullname.filter(s=>(s.id===UserID)?s.aboutUser.friend.push(idProf):'')
//
//                 :fullname.filter(s=>(s.id===UserID)?s.aboutUser.friend.splice(fIndex,fIndex+1):'')
//
//                 ServerMessage = {
//                     text: "User or ID profile or status Friend is corrected!`!(empty or undefined)"
//                     ,status: true
//                 }
//             }else{
//                 ServerMessage = {
//                     text: "User or ID profile or status Friend is not corrected!`!(empty or undefined)"
//                     ,status: false
//                 }
//             }
//         res.json([ServerMessage])
//
//         });
// ###############################################################