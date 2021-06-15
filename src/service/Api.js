export default class Api {
    constructor () {
        this.data = [
            {
              name: 'Samara',
              lat: '53.195873',
              lon: '50.100193',
              id: 1
            },
            {
              name: 'Tolyatty',
              lat: '53.507836',
              lon: '49.420393',
              id: 2
            },
            {
              name: 'Saratov',
              lat: '51.533557',
              lon: '46.034257',
              id: 3
            },
            {
              name: 'Cazan',
              lat: '55.796127',
              lon: '49.106405',
              id: 4
            },
            {
              name: 'Krasnodar',
              lat: '45.035470',
              lon: '38.975313',
              id: 5
            },
          ];

          this._apiBase = 'https://api.openweathermap.org/data/2.5/onecall';
          this.apiKey = '662448886311aa69f48eddf74c980114';


    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error('Something gone wrong');
        }
        return await res.json();
    }
    

    getWeekWeather = async ({lat, lon}) => {
        const res = await this.getResource(`?lat=${lat}&lon=${lon}&units=metric&exclude=alerts,hourly,current&appid=${this.apiKey}`);
        return res;
        
    }

    getDayWeather = async ({lat, lon, dt}) => {
      console.log(lat, lon, dt);
      const res = await this.getResource(`/timemachine?lat=${lat}&lon=${lon}&dt=${Date.parse(dt)}&appid=${this.apiKey}`);
      return res;
    }

    getDay = (unix_timestamp) => {
      const monthName = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
      const date = new Date(unix_timestamp * 1000);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();

      return `${day > 10 ? day : '0' + day} ${monthName[month]} ${year}`;   
  } 


}