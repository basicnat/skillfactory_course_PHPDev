const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Наташа",
            "id_2": "Лена",
            "id_3": "Женя",
            "id_4": "Ирина",
            "id_5": "Оксана",
            "id_6": "Регина",
            "id_7": "Аня",
            "id_8": "Юля",
            "id_9": "Алёна",
            "id_10": "Любовь"
        }
    }`,

    

    
    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    }, 
    
    randomGender: function () {           
        let i = Math.round(Math.random());
    
        if(i == 0) {            
            this.person.gender = this.GENDER_MALE
        } else {
            this.person.gender = this.GENDER_FEMALE
        }
        return this.person.gender
    },
    
    

    randomFirstName: function() {            
           if(this.person.gender === 'Женщина') {                        
               return this.randomValue(this.firstNameFemaleJson);
            } else {
            return this.randomValue(this.firstNameMaleJson);
        }
    },

    randomSurName: function() {
            if(this.person.gender === 'Женщина') {
                return this.randomValue(this.surnameJson) + "a";
            } else {
            return this.randomValue(this.surnameJson);
        }
    },


    randomBirthYear: function() {
        const min = 1990;
        const max = 2023;
        let year = Math.floor(Math.random()* (max - min) + min);
        return year + ' года рождения'
    },

    randomOccupation: function() {
        if(this.person.gender === 'Женщина') {
            return this.randomValue(this.occupationJson)
        } else {

            return this.randomValue(this.occupationJson)
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurName();
        this.person.birthYear = this.randomBirthYear();
        
        return this.person;
    }
};
