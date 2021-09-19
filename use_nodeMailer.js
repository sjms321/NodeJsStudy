const nodemailer =require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "259a36d385bb59",
    pass: "fc915f72809742"
  }
}

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option,(error,info) => {
        if(error){
        }else{
            console.log(info);
            return info.response;
        }
    })
}


let email_data ={
    from:"rlaalstjr831@gmail.com",
    to: "sjms321@naver.com",
    subject:"제목입니다",
    text:"내용입니다"
}

send(email_data)