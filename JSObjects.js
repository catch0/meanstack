let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(let s in students){
  console.log('Name:', students[s]['name'], ',', 'Cohort: ', students[s]['cohort']);
}


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for(let u in users){
   console.log(u.toUpperCase());
   if(u == 'employees'){
     for(let e in users['employees']){
       console.log(e, '-',users['employees'][e]['last_name'], ',', users['employees'][e]['first_name'])
      }
      }
      else{
       for(let m in users['managers']){
         console.log(m, '-', users['managers'][m]['last_name'], ',', users['managers'][m]['first_name'])
          }
      }
   }
