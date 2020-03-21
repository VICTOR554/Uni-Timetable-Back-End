const models = require('../../../models/model')
const moment = require('moment')

const getAllWeeks = function(req, res){
    models.Week.find()
  .then(d => {
    res.send(d);
  })
  .catch(e => {
    console.log(e);
    res.send(e);
  });

}

const getOneWeekByNumber = function(req, res){
    models.Week.findOne({ number: req.params.number })
      .then(d => {
        res.send(d);
      })
      .catch(e => {
        console.log(e);
        res.send(e);
      });
}

const getOneWeekByDate = function(req, res){
    date = req.params.date
    console.log(date, 'loool')
    let start_date = moment.unix(date).startOf('day').format('X')
    console.log(start_date)

    let end_date = moment.unix(date).endOf('day').format('X')
    console.log(end_date)

    //     start
    // 1584547916400

   
    //     input               db
    // 1584547951487   1584493200000

    //     end
    // 1584548002799

    let found = false
    let foundWeek
    models.Week.find()
    .then(d => {
        for(i=0;i<d.length;i++){
            dates = d[i].dates
            
            if(found == false){
                for(j=0; j<dates.length;j++){
                    console.log(dates[j])
                    if(dates[j]>start_date && dates[j]<end_date){
                        // console.log(Date(moment(date).toString()))
                        // console.log(moment(moment.unix(dates[j]), 'YYYY').isSame(moment(moment.unix(date), 'YYYY'), 'year'))
                        // console.log(moment.unix(dates[j]).isSame(moment.unix(date), 'd'))
                //     if(moment(dates[j]).isSame(moment(date), 'year') === true ){
                        found = true
                        foundWeek = d[i]
                        console.log(foundWeek)
                        res.send(d[i])
                    }                    
                }
            }else{
                i = d.length
            }
        }
        if(found==false){
        res.send(`couldn't find a week, check the date you input`)
        }
    })
    .catch(e => {
        console.log(e);
        res.send(e);
    });
}

module.exports={
    getOneWeekByNumber,
    getOneWeekByDate,
    getAllWeeks,
}