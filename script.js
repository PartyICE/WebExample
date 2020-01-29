let aboutItems = [
    {
        text: `Мы - команда профессионалов в туризме с опытом работы более 10
        лет и опытом личных путешествий более чем в 45 странах мира. Офис компании
        в Акапулько стал третьим офисом сети наряду с офисами, открытыми ранее в
        Афинах и Лондоне. Мы знаем об отдыхе практически все, продолжая совершенствовать свои знания
        каждый год. Мы много путешествуем и открываем новые страны и маршруты, чтобы
        предложить их Вам.`,
        label: 'Наша команда'
    },
    {
        text: `Мы гордимся тем, что наши клиенты (около 45% из них!) советуют нас своим
        друзьям, родственникам и знакомым. А около 30% пользуются нашими услугами постоянно, снова
        и снова возвращаясь к нам. Мы, в свою очередь, делаем все возможное, чтобы сделать
        ваш отдых позитивным и незабываемым, стараемся обеспечить всем необходимым: документами, 
        страховками, дополнительной информацией и пр., чтобы Вы чувствовали себя уверенно во время
        подготовки и непосредственно в путешествии.`,
        label: 'Горящие путёвки'
    },
    {
        text: `Наша команда единомышленников – профессионалов, длительное время работающих в сфере туризма.
        За это время мы лично объездили большинство курортных стран, чтобы дать Вам самую правдивую
        и точную информацию об отдыхе и грамотно подобрать тот вариант, который подойдет именно Вам.`,
        label: 'Контакты'
    }
]

function tab(idn, s) {
    menu = document.querySelectorAll('.tb1 > div');
    menu.forEach(function (item, i, menu) {
        item.setAttribute('class', 'colorOff')
    });
    elem = document.getElementById(idn)
    elem.setAttribute('class', 'colorOn')
    // aboutSwitch(s);
    txt.style.opacity = 0;
    lnk.style.opacity = 0;

    setTimeout(() => aboutSwitch(s), 400);
}

function aboutSwitch(index) {
    switch (index) {
        case 0: {
            txt.innerHTML = aboutItems[index].text;
            lnk.innerHTML = aboutItems[index].label;
            txt.style.opacity = 1;
            lnk.style.opacity = 1;
            break;
        }

        case 1: {
            txt.innerHTML = aboutItems[index].text;
            lnk.innerHTML = aboutItems[index].label;
            txt.style.opacity = 1;
            lnk.style.opacity = 1;
            break;
        }

        case 2: {
            txt.innerHTML = aboutItems[index].text;
            lnk.innerHTML = aboutItems[index].label;
            txt.style.opacity = 1;
            lnk.style.opacity = 1;
            break;
        }
    }
}