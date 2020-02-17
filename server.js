const express       =   require('express');
const session = require('express-session');
const app = express();
const  cors = require('cors')
// const sessionOptions = {
//     secret: '123456',
//     cookie: {
//         maxAge:269999999999
//     },
//     saveUninitialized: true,
//     resave:true
// };

const cookieParser  =   require ('cookie-parser');
const bodyParser    =   require('body-parser');

// const ALLOWED_ORIGINS = [
//     'https://geizer6991.github.io',
// ]

     // app.use(session(sessionOptions));
     app.use(cookieParser ());
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({ extended: true }));
     app.use(cors());


let  login,UseR,z,f,s,x,password,user,randomNumber,UsER,post,options
    ,messageText,profile,idProf,userID,UserID,people
    ,X,useRR,postSS,messagEE,fottoSS,fullname,frienDD
    ,UserName,UserFoto,fIndex,pic,optionsMoment
    ,allPeople,ListFriendMass,TextPost,sendUser,acceptUser
    ,userStatus,textStatus,ProfileId, ListStatus ;

let People,ListPeople,friend,FriendProfile,ProfilePot=[];
let ServerMessage,UserLoginId,ProfilePage,m={};

    options={
        maxAge: 900000,
        httpOnly: true,
    };
    optionsMoment={
    maxAge: 50000,
    httpOnly: true,
};
    randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);

//###############################################################
    useRR       =[
        {id:1,login:'q',password:'q'},
        {id:2,login:'w',password:'w'},
        {id:3,login:'e',password:'e'},
        {id:4,login:'r',password:'r'},
        {id:5,login:'t',password:'t'},
        {id:6,login:'y',password:'y'},
        {id:7,login:'u',password:'u'},
        {id:8,login:'i',password:'i'},
        {id:9,login:'o',password:'o'},
        {id:10,login:'p',password:'p'},
        {id:11,login:'a',password:'a'},
        {id:12,login:'s',password:'s'},
        {id:13,login:'d',password:'d'}

    ];
    fullname    =[
        {id:1 , aboutUser: {
                statuss:'I am Boss'
              , city:'Los', country:'Brasil'
              , name:'11111', lastName:'1'
              , friend:[2,3,4,5]
              , dialog:[ 111, 222, 333, 444  ] }},

        {id:2 , aboutUser:{ statuss:'I am LOS'
              , city:'Los', country:'dfgsdfg'
              , name:'2222', lastName:'2'
              , friend:[2,3,4,5,6]
              , dialog:[ 111, 222, 333, 444  ]}},

        {id:3 , aboutUser:{ statuss:'I am ROS'
              , city:'Los', country:'Brassssssssssil'
              , name:'3333', lastName:'3'
              , friend:[2,6,4,5]
              ,dialog:[ 111, 222, 333, 444  ]}},

        {id:4 , aboutUser:{ statuss:'I am TOD'
              , city:'Los', country:'Braaaaaaaaaasil'
              , name:'44444', lastName:'4'
              , friend:[2,3,4,5]
              ,dialog:[ 111, 222, 333, 444  ]}},

        {id:5   , aboutUser:{ statuss:'I am VOIeS'
                , city:'Los', country:'Braaaaaaaaaxggsil'
                , name:'55555', lastName:'5'
                , friend:[2,3,4,5],dialog:[ 111, 222, 333, 444  ]}},

        {id:6   , aboutUser:{ statuss:'I am WAS'
                , city:'Los', country:'Bragggggggggggsil'
                , name:'66666', lastName:'6'
                , friend:[2,3,4,5]
                , dialog:[ 111, 222, 333, 444  ]}},

        {id:7 , aboutUser:{ stauss:'I am WED'
              , city:'Los', country:'Brahhhhhhhhhhhsil'
              , name:'77777', lastName:'7'
              , friend:[2,3,4,5]
              , dialog:[ 111, 222, 333, 444  ]}},

        {id:8 , aboutUser:{ statuss:'I am RTY'
              , city:'Los', country:'Brasjjjjjjjjjjil'
              , name:'88888', lastName:'8'
              , friend:[2,3,4,5]
              , dialog:[ 111, 222, 333, 444  ]}},

        {id:9 , aboutUser:{ statuss:'I am GFD'
              , city:'Los', country:'Brakkkkkkkkkkkksil'
              , name:'99999', lastName:'9'
              , friend:[2,3,4,5]
              , dialog:[ 111, 222, 333, 444  ]}},

        {id:10 , aboutUser:{ statuss:'I am DCV'
               , city:'Los', country:'Brmmmmmmmmmmmmasil'
               , name:'100000', lastName:'10'
               , friend:[2,3,4,5]
               , dialog:[ 111, 222, 333, 444  ]}},

        {id:11 , aboutUser:{ statuss:'I am FFF'
               , city:'Los', country:'Brbbbbbbbbbbbbbbasil'
               , name:'110000', lastName:'11'
               ,friend:[2,3,4,5]
              , dialog:[ 111, 222, 333, 444  ]}},

        {id:12 , aboutUser:{ statuss:'I am RRR'
               , city:'Los', country:'Bracccccccccccsil'
               , name:'1200000', lastName:'12'
               ,friend:[2,3,4,5]
              , dialog:[ 111, 222, 333, 444  ]}},

        {id:13 , aboutUser:{ statuss:'I am AAAA'
               , city:'Los', country:'Braxxxxxxxxxxsil'
               , name:'130000', lastName:'13'
               ,friend:[2,3,4,5]
              , dialog:[ 111, 222, 333, 444  ]}},
    ];
    fottoSS     =[
         {id:1,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:2,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:3,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:4,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:5,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:6,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:7,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:8,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:9,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:10,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:11,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:11,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:12,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
        ,{id:13,max:"https://img2.goodfon.ru/original/320x240/b/b2/pulemet-6-stvor-metall-oruzhie.jpg"}
    ];
    postSS      =[
        {
            id:1, post:[
                {user: 1, post:'df6sf6fs'}
               ,{user: 1, post:'sdf5sdf'}
               ,{user: 1, post:'sdf23323sdf'}
               ]
        },{
            id:2, post:[
                {user: 2, post:'df6sf6fs'}
                ,{user: 2, post:'sdf5sdf'}
                ,{user: 2, post:'sdf23323sdf'}
                   ]
        }  ,{
            id:3, post:[
                {user: 3, post:'df6sf6fs'}
                ,{user: 3, post:'sdf5sdf'}
                ,{user: 3, post:'sdf23323sdf'}
            ]
        },{
            id:4, post:[
                {user: 1, post:'df6sf6fs'}
                ,{user: 4, post:'sdf5sdf'}
                ,{user: 1, post:'sdf23323sdf'}
            ]
        },{
            id:5, post:[
                {user: 1, post:'df6sf6fs'}
                ,{user: 51, post:'sdf5sdf'}
                ,{user: 1, post:'sdf23323sdf'}
            ]
        },{
            id:6, post:[
                {user: 1, post:'df6sf6fs'}
                ,{user: 6, post:'sdf5sdf'}
                ,{user: 1, post:'sdf23323sdf'}
            ]
        },{
            id:7, post:[
                {user: 1, post:'df6sf6fs'}
                ,{user: 7, post:'sdf5sdf'}
                ,{user: 1, post:'sdf23323sdf'}
            ]
        },{
            id:8, post:[
                {user: 1, post:'df6sf6fs'}
                ,{user: 8, post:'sdf5sdf'}
                ,{user: 1, post:'sdf23323sdf'}
            ]
        },{
            id:9, post:[
                {user: 1, post:'df6sf6fs'}
                ,{user: 9, post:'sdf5sdf'}
                ,{user: 1, post:'sdf23323sdf'}
            ]
        },{
            id:10, post:[
                {user: 1, post:'df6sf6fs'}
                ,{user: 10, post:'sdf5sdf'}
                ,{user: 1, post:'sdf23323sdf'}
            ]
        },{
            id:11, post:[
                {user: 1, post:'df6sf6fs'}
                ,{user: 4, post:'sdf5sdf'}
                ,{user: 1, post:'sdf23323sdf'}
            ]
        },{
            id:12, post:[
                {user: 1, post:'df6sf6fs'}
                ,{user: 5, post:'sdf5sdf'}
                ,{user: 1, post:'sdf23323sdf'}
            ]
        },{
            id:13, post:[
                {user: 1, post:'df6sf6fs'}
                ,{user: 13, post:'sdf5sdf'}
                ,{user: 1, post:'sdf23323sdf'}
            ]
        }

    ];
    messagEE    =[
        {id1:1 , id2:1 , message:[
                            { user:1, message:'Hallo bitch'}
                       ]
        },
    ];
//###############################################################

    //###############################################################
app.route('/exit')
    // очищение куков на стороне браузера
   .get((req,res)=>{
       res.cookie('userLogin','',optionsMoment);
       ServerMessage={text:'User deleted',status:true};
       res.json(ServerMessage)
   });
//###############################################################
app.route('/login')
   //получение пользоватетя из куков
    .get((req,res)=>{
       userID=parseInt(req.cookies.userLogin);
       UserLoginId={id:NaN, login:""};
       if (userID && userID!==" ") {
         UserLoginId=useRR.filter(x=>(x.id===userID));
         UserLoginId= {
            id:UserLoginId[0].id
           ,login:UserLoginId[0].login
         };
         ServerMessage =
            {status: true,text: "It`s cookie User"}
       }else {
         ServerMessage =
           {status: false,text: "It`s not cookie User"}
       }

        res.json([ServerMessage,UserLoginId]);
    })
    // проверка есть ли в списке юзер  с таким логином или паролем
    .post((req,res,next)=>{
       login=req.body.login;
       password=req.body.password;
       UserLoginId={id:NaN, login:""};
      if (login && password) {
        UsER=useRR.filter(x=>(x.login === login && x.password === password));
        if(UsER.length!==0){
          req.body.remember
          ?res.cookie('userLogin',`${UsER[0].id}`,options )
          :res.cookie('userLogin',`${UsER[0].id}`,optionsMoment );
          UserLoginId= {
               id:UsER[0].id
              ,login:UsER[0].login
          };
          ServerMessage=
             {status:true,text:"Login & password is corrected"}
        }else{
          ServerMessage={status:false,text:"Login & password is undefined"}
        }
      }else{ServerMessage=
          {text:"It`s not Login or Password ",status:undefined}
      }

        res.json([ServerMessage,UserLoginId ]);
    next();
    });
//###############################################################
app.route('/profile/:ProfileId')
// возвращает пользователя с таким ID
    .get((req, res)=>{
      ProfileId
      ?ProfileId=parseInt(req.params.ProfileId)
      :ProfileId=parseInt(req.cookies.userLogin);
        ProfilePage={
            id:NaN
            ,status:''
            ,location:{city:'',country:''}
            ,fullName:{name:'',lastName:''}
            ,friend:[]
        };

      if (ProfileId) {


        UseR = fullname.filter(x => x.id === ProfileId);
        pic = fottoSS.filter(x => x.id === ProfileId);
        ProfilePage={
             id:UseR[0].id
            ,status:UseR[0].aboutUser.statuss
            ,location:{
              city:UseR[0].aboutUser.city
              ,country:UseR[0].aboutUser.country
             }
              ,fullName:{
               name:UseR[0].aboutUser.name
              ,lastName:UseR[0].aboutUser.lastName
               }
              ,friend:UseR[0].aboutUser.friend
              ,picture:pic[0].max
        };
        ServerMessage = {status: true,text: "It`s profile List"}
      }
      else{
        ServerMessage = {status: false,text: "It`s not profile List"}
      }
    res.json([ServerMessage, ProfilePage]);
    });
app.route('/profile/post/:ProfileId')
//получение списка постов
   .get((req,res)=>{
     ProfileId=parseInt(req.params.ProfileId);

     if (ProfileId) {
        post=postSS.filter(x=>(x.id===ProfileId));
        ProfilePot=post[0].post;
        ServerMessage = {status: true,text: "It`s user"}
     }else{
        ServerMessage = {status: false,text: "It`s not user"}
     }
   res.json( [ServerMessage,ProfilePot] )
   })
   //добавить пост
   .post((req,res,next)=>{
       sendUser =parseInt(req.cookies.userLogin);
       acceptUser =parseInt(req.params.ProfileId);
       TextPost=req.body.post;
       if(sendUser && acceptUser && TextPost){
          profile=postSS.filter(x=> x.id === acceptUser);
          profile[0].post.push({ user:sendUser,post:TextPost });
          ServerMessage= {text: "Post is corrected!",status: true}
       }else{ServerMessage= {
           text: "Post is not corrected!(empty or undefined)"
          ,status: false
            }
       }
   res.json(ServerMessage)
   });

app.post('/profile/status',(req,res)=>{
    userStatus=parseInt(req.cookies.userLogin);
    textStatus=req.body.status+'';
    if(textStatus && textStatus!==' '){
        fullname.filter(x=>(x.id===userStatus)?x.aboutUser.statuss=textStatus:'');
        ServerMessage = {
            text: "Status is corrected!"
           ,status: true
        }
    }
    else{
        ServerMessage = {
            text: "Status is not corrected!(empty or undefined)"
           ,status: false
        }
    }
    res.json(ServerMessage);
});
//###############################################################
// app.route('message/friend')
// // возвращает пользователя с таким ID
//     .get((req, res)=>{
//         userID?userID=parseInt(req.params.id):userID=parseInt(req.cookies.userLogin);
//         ProfilePage={
//             id:NaN
//             ,status:''
//             ,location:{city:'',country:''}
//             ,fullName:{name:'',lastName:''}
//             ,friend:[]
//         };
//         if (userID) {
//             UseR = fullname.filter(x => x.id === userID);
//             pic = fottoSS.filter(x => x.id === userID);
//             ProfilePage={
//                 id:UseR[0].id
//                 ,status:UseR[0].aboutUser.statuss
//                 ,location:{city:UseR[0].aboutUser.city,country:UseR[0].aboutUser.country}
//                 ,fullName:{name:UseR[0].aboutUser.name,lastName:UseR[0].aboutUser.lastName}
//                 ,friend:UseR[0].aboutUser.friend
//                 ,picture:pic[0].max
//             };
//             ServerMessage = {
//                 status: true
//                 ,text: "It`s profile List"
//             }
//         }else{
//             ServerMessage = {
//                 status: false
//                 ,text: "It`s not profile List"
//
//             }
//         }
//         res.json([ServerMessage, ProfilePage]);
//     });
//###############################################################
    //получить список друзей

app.route('/message/friend')
   .get((req,res)=> {
      userID = parseInt(req.cookies.userLogin);
      FriendProfile=[];

      if(userID){
        UserName = fullname.filter(x => (x.id === userID));
        UserFoto = fottoSS.filter(x => (x.id === userID));
        let LoginPeople=[...UserName[0].aboutUser.friend]


        for (let i = 0; i < LoginPeople.length; i++) {

            UserName = fullname.filter(x => (x.id === LoginPeople[i]));
            UserFoto = fottoSS.filter(x => (x.id === LoginPeople[i]));

            friend={
             user:UserName[0].id
            ,name:UserName[0].aboutUser.name
            ,lastName:UserName[0].aboutUser.lastName
            ,status:UserName[0].aboutUser.statuss
            ,picture: UserFoto[0].max
            };
            FriendProfile.push(friend);
            }
      }else{
        ServerMessage = {
            text: "User is not corrected!(empty or undefined)"
           ,status: false
        }
      }

      res.json([ServerMessage,FriendProfile]);
      FriendProfile=[]
});//не плохо но можно и лучше$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    //получить список сообщений
app.route('/message/list/:ProfileId')
   .get((req,res)=>{
      user=parseInt(req.cookies.userLogin);
      profile=parseInt(req.params.ProfileId);
      console.log(req.cookies.userLogin)

      if (user && !isNaN(profile)) {
           X = messagEE.filter
           (x=>(x.id1===user && x.id2===profile)||(x.id1===profile && x.id2===user));
           X.length===0 ? messagEE.push({id1:user,id2:profile,message:[]}):'';

           X = messagEE.filter
           (x=>(x.id1===user && x.id2===profile)||(x.id1===profile && x.id2===user));
           res.cookie('profileLogin',`${profile}`);

           ServerMessage = {
             text: "User & Profile corrected!(empty or undefined)"
            ,status: true
           }
      }
      else{
           ServerMessage = {
             text: "User & Profile is not corrected!(empty or undefined)"
            ,status: false
           }
      }
    res.json([ServerMessage,X[0].message] );
   })
    //отправить сообщение
   .post((req,res,next)=>{
     userID = parseInt( req.cookies.userLogin );
     profile = parseInt( req.cookies.profileLogin );
     messageText=req.body.messageText;

     if(userID && profile && messageText && messageText!==" ") {
       let X = messagEE.filter
       (x => (x.id1 === userID && x.id2 === profile) || (x.id1 === profile && x.id2 === userID));
        X[0].message.push({user: userID, message: messageText});

        ServerMessage = {
             text: "User & Profile & message is not empty!"
            ,status: true
        }
     }
     else{
        ServerMessage = {
             text: "User & Profile & message is not corrected!(empty or undefined)"
            ,status: false
        }
     }
   res.json(ServerMessage);
   next();
   });
//###############################################################
    app.route('/subscribers')
    // это возвращает всех пользователей в списке по сколько нужно
    .get((req, res)=>{
        userID = parseInt(req.cookies.userLogin);
        z = parseInt(req.query.page);//страница
        x = parseInt(req.query.coun);//по сколько на странице
        People=[];

        if(userID && userID!==0) {
          fullname.filter(x => (x.id === userID) ? ListFriendMass = x.aboutUser.friend : '');

          for (let i = 0; i < fullname.length; i++) {
             ListStatus = ListFriendMass.filter(x => x === fullname[i].id);
              ListStatus.length !== 0
             ? ListPeople = {
             ...fullname[i].aboutUser
             , fotto: fottoSS[i].max
             , id: fullname[i].id
             , friend: true
               }
             : ListPeople = {
                     ...fullname[i].aboutUser
                     , fotto: fottoSS[i].max
                     , id: fullname[i].id
                     , friend: false
               };
             People.push(ListPeople)
          }
          f = z * x - x;
          s = x * z;
          allPeople = fullname.length;
          s > fullname.length ? s = fullname.length :
          f = parseInt(f);
          s = parseInt(s);
          people = People.slice(f, s);
          ServerMessage = {
            text: `${z} List People & ${allPeople} all People is corrected!`
           ,status: true
          }
        }else{
          ServerMessage = {
             text: " List People all People is not corrected!`!(empty or undefined)"
            ,status: false
          }
        }

          res.json([people, allPeople,ServerMessage]);
          people = [];
          People = [];
    })
    //подписаться и отписаться

    .post((req,res,next)=>{
        UserID=parseInt(req.cookies.userLogin);

        idProf=req.body.id;
        frienDD=req.body.friend;


            if(idProf && UserID){
                f=fullname.filter(s=>(s.id===UserID))
                fIndex=f[0].aboutUser.friend.indexOf(idProf,0)
                fIndex < 0
                ?fullname.filter(s=>(s.id===UserID)?s.aboutUser.friend.push(idProf):'')

                :fullname.filter(s=>(s.id===UserID)?s.aboutUser.friend.splice(fIndex,fIndex+1):'')

                ServerMessage = {
                    text: "User or ID profile or status Friend is corrected!`!(empty or undefined)"
                    ,status: true
                }
            }else{
                ServerMessage = {
                    text: "User or ID profile or status Friend is not corrected!`!(empty or undefined)"
                    ,status: false
                }
            }
        res.json([ServerMessage])

        });
//###############################################################
    app.listen(process.env.PORT || 5000, ()=>  console.log(`Server listens`));