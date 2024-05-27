



function proverka() {
    mail = document.form.email.value;
    num = document.form.number.value;
    nameU = document.form.name.value;
    text = document.form.message.value;
    dog = mail.indexOf('@');
    dot = mail.indexOf('.');
    mailConf = false;
    numberConf = false;
    nameConf = false;
    textComf = false;
    if (nameU == 0) {
        alert("Введите имя ")
    }
    else {
        nameConf = true;
    }

    if ((dog >= 4) && (dot >= dog + 4) && !mail == 0) {
        mailConf = true;


    }
    else {
        alert("Почта не введена или введена не правильно ")
    }
    numLeng = num.length;
    if (!num == 0) {
        if (typeof num === "number" && numLeng == 11) {
            numberConf = true;
        }
        else {
            alert("Неверно введен номер ")
        }
    }
    else {
        alert("Номер не введен");
    }
    if (text == 0) {
        alert("Введите текст ")
    }
    else {
        textComf = true;
    }
    if (nameConf && mailConf && nameConf && textComf) {
        alert("Сообщение отправленно ")
    }
    else {
        alert("Ошибка ")
    }


}






