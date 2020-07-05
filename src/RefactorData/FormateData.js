const returnMonth = (date) => {
    var months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Des"];
    return months[date]
}

const splitMe = (countryData) => {

    let res = countryData.split("-");
    // console.log(res)
    res = res[1]
    return res = parseInt(res[1])

}
export const monthlyStats = (countryData) => {

    let current_month = 0;
    let x = 0;
    let last_month_value = countryData.length;
    let country_Decised = new Array([])
    let country_Recovered = new Array([])
    let country_Confirmed = new Array([])
    let months = new Array([])


    current_month = splitMe(countryData[0].Date)
    let decised_ = 0;
    let recovered_ = 0;
    let confirmed_ = 0;
    for (x; x < countryData.length;) {

        decised_ = countryData[x].Deaths;
        confirmed_ = countryData[x].Confirmed;
        recovered_ = countryData[x].Active;
        // console.log(decised_)

        while (true) {

            let updated_month = splitMe(countryData[x].Date)
            if (current_month !== updated_month) {

                // read the month name
                // console.log(`current ${current_month}  updated ${updated_month}`)
                months.push(returnMonth(current_month - 1))
                let current_decised = countryData[x].Deaths;
                let current_conformed = countryData[x].Confirmed;
                let current_recovered = countryData[x].Active;

                country_Decised.push(Math.abs(current_decised - decised_))
                country_Recovered.push(Math.abs(current_recovered - recovered_))
                country_Confirmed.push(Math.abs(current_conformed - confirmed_))
                // console.log(`Month : ${current_month}   Deths : ${current_decised - decised_}  `)
                current_month = updated_month

                break
            }
            x++
            if (x >= countryData.length) {
                break
            }
        }

    }

    //  Last month datas
    months.push(returnMonth(current_month - 1))
    country_Decised.push(Math.abs(countryData[x - 2].Deaths - countryData[last_month_value - 1].Deaths))
    country_Recovered.push(Math.abs(countryData[x - 2].Recovered - countryData[last_month_value - 1].Recovered))
    country_Confirmed.push(Math.abs(countryData[x - 2].Active - countryData[last_month_value - 1].Active))

    const Country_All_Data = {
        months: months,
        recoverd_persons: country_Recovered,
        decised_persons: country_Decised,
        conformed_persons: country_Confirmed
    }
    return(Country_All_Data)

}