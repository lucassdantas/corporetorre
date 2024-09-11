type ContactInfo = {
    info:string;
    url:string;
}

type ContactInfoMap = {
    [key: string]: ContactInfo;
}

export const address:ContactInfo = {
    info:'Av. Dom Hélder Câmara, 5200, Torre do Norte Shopping – salas 512/513 – Cachambi',
    url:'https://maps.app.goo.gl/SqwUAycoe2FUzYrw7'
}

export const phoneNumber:ContactInfoMap = {
    phone01:{
        info:'(21) 3439-1514',
        url:'tel:+552134391514'
    },
    phone02:{
        info:'(21) 4106-6191',
        url:'tel:+552141066191'
    },
    whatsApp:{
        info:'(21) 98189-7315',
        url:'https://api.whatsapp.com/send/?phone=5521981897315&text&type=phone_number&app_absent=0'
    }
}

export const socialMedia:ContactInfoMap = {
    facebook:{
        info:'/Corporetorrenorte',
        url:'https://www.facebook.com/Corporetorrenorte',
    },
    instagram:{
        info:'corporetorre',
        url:'https://www.instagram.com/corporetorre/',
    },
}

export const email:ContactInfo = {
    info:'contato@corporetorre.com.br',
    url:'mailto:contato@corporetorre.com.br'
}
