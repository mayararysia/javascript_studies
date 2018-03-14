var minhaData = new Date();

//getDay() - mostra o dia da semana
minhaData.getDay();

//getMonth() - mostra o mês
minhaData.getMonth();

//getYear() - mostra o número de anos após 1900
minhaData.getYear();

minhaData.getFullYear();
minhaData.getHours();
minhaData.getMinutes();
minhaData.getSeconds();//data que instanciou o objeto e não a atual

/*timeStamp - número de milisegundos que passaram */
minhaData.getTime();

+new Date();

//set
minhaData.setTime(0);

minhaData.setDate(23);

minhaData.setMonth(1);

minhaData.setYear(1970);

minhaData.setDate(23);

minhaData.setMonth(11);

minhaData.setYear(2017);

minhaData

minhaData.setMinutes(0);

minhaData.setMilliseconds(0);

minhaData

minhaData = new Date(2017, 11, 23);//começa do 0 à 11 (12 meses)

minhaData = new Date(2017, 11, 23, 10, 47, 30, 500);

minhaData.getMilliseconds();

minhaData = new Date("2017/12/23");//não é recomendado pq diferentes browsers interpretam de maneira diferente