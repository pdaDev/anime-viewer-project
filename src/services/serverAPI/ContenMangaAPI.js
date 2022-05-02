
const getMangaChapters = () => ({resultCode: 0,
    data:[
        {id: 1, number: 1, title: 'Восстание титанов', date: '20-12-2021' },
        {id: 2, number: 1.2, title: 'Восстание сверхтитанов', date: '21-12-2021' },
        {id: 3, number: 3, title: 'Восстание овертитанов', date: '22-12-2021' },
        {id: 4, number: 4, title: 'Восстание гигатитанов', date: '32-13-2033' },
        {id: 5, number: 5, title: 'Восстание титанов', date: '20-12-2021' },
        {id: 6, number: 6, title: 'Восстание сверхтитанов', date: '21-12-2021' },
        {id: 7, number: 7, title: 'Восстание овертитанов', date: '22-12-2021' },
        {id: 8, number: 8, title: 'Восстание гигатитанов', date: '32-13-2033' },
        {id: 9, number: 9, title: 'Восстание титанов', date: '20-12-2021' },
        {id: 10, number: 10, title: 'Восстание сверхтитанов', date: '21-12-2021' },
        {id: 11, number: 11, title: 'Восстание овертитанов', date: '22-12-2021' },
        {id: 12, number: 12, title: 'Восстание гигатитанов', date: '32-13-2033' },
        {id: 13, number: 13, title: 'Восстание титанов', date: '20-12-2021' },
        {id: 14, number: 14, title: 'Восстание сверхтитанов', date: '21-12-2021' },
        {id: 15, number: 15, title: 'Восстание овертитанов', date: '22-12-2021' },
        {id: 16, number: 16, title: 'Восстание гигтитанов', date: '32-13-2033' },
        {id: 17, number: 17, title: 'Восстание титанов', date: '20-12-2021' },
        {id: 18, number: 18, title: 'Восстание сверхтитанов', date: '21-12-2021' },
        {id: 19, number: 19, title: 'Восстание овертитанов', date: '22-12-2021' },
        {id: 20, number: 20, title: 'Восстание гигантитановв', date: '32-13-2033' },
        {id: 21, number: 21, title: 'Восстание титанов', date: '20-12-2021' },
        {id: 22, number: 22, title: 'Восстание сверхнтитанов', date: '21-12-2021' },
        {id: 23, number: 23, title: 'Восстание овертитанов', date: '22-12-2021' },
        {id: 24, number: 24, title: 'Восстание гигатитанов', date: '32-13-2033' },
        {id: 25, number: 25, title: 'Восстание титанов', date: '20-12-2021' },
        {id: 26, number: 26, title: 'Восстание сверхтитанов', date: '21-12-2021' },
        {id: 27, number: 27, title: 'Восстание овертитанов', date: '22-12-2021' },
        {id: 28, number: 28, title: 'Восстание гигтитанов', date: '32-13-2033' },
        {id: 29, number: 29, title: 'Восстание нетитанов', date: '20-12-2021' },
        {id: 30, number: 30, title: 'Восстание ститанов', date: '21-12-2021' },
        {id: 31, number: 31, title: 'Восстание овертитановв', date: '22-12-2021' },
        {id: 32, number: 32, title: 'Восстание гиганчадов', date: '32-13-2033' },
    ]}

)

const getMangaInfo = () => ({
    resultCode: 0,
    data: {
        title: {
            ru: 'Атака титанов',
            eng: 'Attack on titans'
        },
        img: `https://i.pinimg.com/736x/a1/81/7b/a1817b7fc36baa21a9799daaea6b1952.jpg`,
        genres: [{id: 1, name: 'Сёнэн'}, {id: 2, name: 'Драма'},
            {id: 3, name: 'Фантастика'}, {id: 4, name: 'Приключения'},
            {id: 5, name: 'Сэйнен'}, {id: 6, name: 'Ужасы'},
            {id: 7, name: 'Артхаус'}, {id: 8, name: 'Яой'}],
        description: 'Японская постапокалиптическая манга, написанная и иллюстрированная Исаяма Хадзимой. Выпускалась в ежемесячном журнале Bessatsu Shonen Magazine японского издательства «Коданся» с октября 2009 года по апрель 2021 года. Действие манги происходит в вымышленной вселенной, напоминающей Европу XIX века, где человечество живёт на территориях, окружённых тремя огромными стенами, защищающими их от гигантских существ, поедающих человека, называемых Титанами.',
        ageDistinction: 18,
        author: [{id: 1, name: 'Исаяма гений'}, {id: 2, name: 'точно гений'}],
        status: 'Вышла',
        animeId: 1,
        releaseDate: '2009',
        rate: '5.0',
    }
})


export const contentMangaAPI = {
    getMangaChapters,
    getMangaInfo

}
