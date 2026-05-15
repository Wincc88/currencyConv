


// if date on monday i.e on the website === date last friday --- then holiday 
        // if date on previous day is same as today then holiday. mark HOLIDAY
        // IF DATE FALLS ON WEEKEND i.e Saturday or Sunday -- then no change in rate. mark weekend or just show the rate
            
            todaysDate = document.querySelector('.dateInfo p');
            todaysDate.textContent = `${new Date().toLocaleDateString()} `;

            const middleResultDisplay = document.querySelector('.resultMiddle p');
            document.querySelector('.resultRight p').textContent = '2ndfetchedfromAPI same way'; 

            const convertBtn1 = document.querySelector('#convert-btn1'); 


          //  convertBtn1.addEventListener('click', function() {  
            const fromCurrency = document.querySelector('#from').value.split(' ')[1]; // Extract 'from' currency code

            let toCurrency = document.querySelector('#to'); //.value.split(' ')[1]; // Extract 'to' currency code

 
            const amountDefault = document.querySelector('#amount').value;
            
             const ratesDisplays = document.querySelector('.rateSection p');
            // ratesDisplays.textContent = "put here currency rate from API";
         

            //  using eg from below   start here 
            async function getRates() {
                
                try {
                    
                    // const response = await fetch(`https://v6.exchangerate-api.com/v6/88c2c34f1805cfde6c567bef/latest/${fromCurrency}`);
                    
                  //  const response = await fetch(`https://data.fixer.io/api/latest?access_key=b6d9b7275a4b9f5b550f8644d84eff53`);
                    
                    const currData = await response.json();
                 
                    console.log(currData);
                    console.log(currData.base);


                    console.log(currData.rates.USD);
                    
                    
                    const allRates = currData.rates;    //      const allRates = currData.conversion_rates;
                    const rateKeys = Object.keys(allRates);
                    const rateValues = Object.values(allRates);

                    
                       /*
                    function timeFromCurrData () {
                        // const todayYearMonth = new Date();
                        //console.log(todayYearMonth);

                        
                        const apiDateTime = currData.time_last_update_utc;
                        // format apitime like formatDate 

                        const apiTime = new Date(apiDateTime);
                        
                        
                        const formatDate = d => d.toISOString().split('T')[1]; // gets the time part 000z is timezone
                        //  const localTime = todayYearMonth.toLocaleTimeString();

                        console.log(`${formatDate(apiTime)}`);
                        //  console.log(localTime);
                    
                    }
                    timeFromCurrData(); 
                    */
                     
                    
                    // for our today and other dates display rate, static chosen at specific ti,mes of the day
                    function checkTodayRate() {
                            if (todaysDate) {
                                
                                const staticChosen = `EUR to USD: ${currData.rates.USD}` //${currData.conversion_rates.EUR}`;
                                const displayRate = ratesDisplays.textContent = staticChosen;
                                

                            // console.log('Today is the same as the date on the website. It might be a holiday. Mark as HOLIDAY.');
                            // somthingsomething.textContent = 'HOLIDAY';

                                return displayRate;

                            }     
                    };
                    checkTodayRate();



                               /*  cont here
                        function yesterdaysRates() {
                            // check time for yesterdays rate 
                            if(apiTime !== getTimeYesterday) {
                                alert(`get it here ${getTimeYesterday}`)
                            }
                        } 
                              */

                        


                    //  console.log(`USD to EUR: ${currData.conversion_rates.EUR}`);
                    console.log(allRates);
                    console.log(rateKeys);
                    //  console.log(rateValues);

                   

                    function currValueSelected() {

                        // get value of the selected option from the dropdown
                        const chosenOption = toCurrency.options[toCurrency.selectedIndex].value; 
                             // can use .text also to choose text instead of value, but value is better for API calls
                        console.log(`Selected here: ${chosenOption}`);
                        return chosenOption;
                    }
                        
                        /* filter the keys to find the one that matches(true) the selected currency value
                                const justFilrtkeys = rateKeys.filter(currValueSelected()); 
                                    console.log(`Filtered keys: ${justFilrtkeys}`);
                        */
                        
                    toCurrency.addEventListener('change', function() {
                        const selectedCurrency = toCurrency.options[toCurrency.selectedIndex].value;
                        if (allRates[selectedCurrency]) {
                            console.log(`USD to ${selectedCurrency}: ${allRates[selectedCurrency]}`);
                            middleResultDisplay.textContent = allRates[selectedCurrency];

                        } else {
                            console.log(`No rate for ${selectedCurrency} in response`);
                            middleResultDisplay.textContent = `No rate for ${selectedCurrency} available  ..yet!`;
                        }
                        console.log(`Selected currency on change: ${selectedCurrency}`);
                    });
                                   
                            // Set EUR rate on load -- it awaits and takes the result from fetch to select EUR  
                                 // another api use eur as base, so need to switch 
                               
                            // i dont need special windows onload or DOMContentLoaded event listeners..
                            //.. because the script is at the end of the body, so it will run after the DOM is loaded.
                    middleResultDisplay.textContent = currData.rates.EUR;    //`${currData.conversion_rates.EUR}`;
                    console.log(`selected on load EUR = ${currData.rates.EUR}`)          //(`Selected currency on load: EUR = ${currData.conversion_rates.EUR}`); // Log the default selected currency on load
                   // ratesDisplays.textContent = currData.rates.EUR


                    } catch (error) {
                    console.error('Error fetching rates:', error);
                    middleResultDisplay.textContent = 'Error fetching rates';
                    }
                }
            
                getRates(); 
                
            
      
                              
                     


            const allDateDisplay = document.querySelector('.dateSection p');
            allDateDisplay.textContent = `${new Date().toLocaleDateString()}`;

            

           
            



            const todayElement = document.querySelector('.today'); 

            const todayYearMonth = new Date();
              //console.log(todayYearMonth);

            const yesterdayYearMonths = new Date(todayYearMonth);
            yesterdayYearMonths.setDate(todayYearMonth.getDate() - 1);
              //console.log(yesterdayYearMonths);

            const getTimeYesterday = new Date(todayYearMonth);
            getTimeYesterday.setDate(todayYearMonth.getDate() - 1);
            getTimeYesterday.setHours(23, 0, 0, 0); // Set to 11:00 PM GMT +8
            console.log(getTimeYesterday); 
            
            const formatDate = d => d.toISOString().split('T')[0];
            
            todayElement.textContent = `${formatDate(todayYearMonth)}`;

           // todayElement.textContent = `Today: ${formatDate(todayYearMonth)}, Yesterday: ${formatDate(yesterday)}`;
 
            const yesterdayElement = document.querySelector('.yesterday');
            yesterdayElement.textContent = `${formatDate(yesterdayYearMonths)}`;
            
            const previousDaysElement = document.querySelector('.previous-days');
            const weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const weekStartDay = 0; // Sunday
            
            // Get the start of the week (Sunday)
            const startOfWeek = new Date(todayYearMonth);
            const daysSinceSunday = (todayYearMonth.getDay() - weekStartDay + 7) % 7;
            startOfWeek.setDate(todayYearMonth.getDate() - daysSinceSunday);
            
            


            const weekDays = [];
             
            for (let i = 0; i < 7; i++) {
                const weekDay = new Date(startOfWeek);
                weekDay.setDate(startOfWeek.getDate() + i);
                const dayName = weekDayNames[weekDay.getDay()];
                const dayDate = formatDate(weekDay);
                weekDays.push(`${dayName} ${dayDate}`);
            }

            previousDaysElement.textContent = weekDays.join(', '); 

            
            
            



            const previousmonthsElement = document.querySelector('.previous-months');
            const previousMonth = document.querySelector('.previousMonth p');
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const currentMonth = todayYearMonth.getMonth();
            const currentYear = todayYearMonth.getFullYear();
            const currentMonthName = `${monthNames[currentMonth]} ${currentYear}`;
            const nextMonth = new Date(currentYear, currentMonth + 1, 1);
            const nextMonthName = `${monthNames[nextMonth.getMonth()]} ${nextMonth.getFullYear()}`;
            
            const yearMonths = [];
            for (let i = 0; i < 12; i++) {
                const month = new Date(currentYear, currentMonth - i, 1);
                const monthName = `${monthNames[month.getMonth()]} ${month.getFullYear()}`;
                yearMonths.push(monthName);
            }

            previousMonth.textContent = currentMonthName;
            previousmonthsElement.textContent = yearMonths.join(', ');

            // Create months object with weekly days
            const monthsDaysDisplay = document.querySelector('.months-days-display');
            const currentMonthheader = document.querySelector('.months-days h4');
            const showDaysAsHeader = document.querySelector('.weeklyDaysinMonth h4');
            let monthandyear = '';
            let showDaysAsHeaderText = '';
            const monthsObject = {};
            
            for (let i = 0; i < 7; i++) {
                const weekDay = new Date(startOfWeek);
                weekDay.setDate(startOfWeek.getDate() + i);
               // console.log(weekDay);
                
                const dayName = weekDayNames[weekDay.getDay()];
                // console.log(dayName);
                const dayDate = formatDate(weekDay);
                // console.log(dayDate);
                const monthKey = `${monthNames[weekDay.getMonth()]} ${weekDay.getFullYear()}`;
                //console.log(monthKey);
                
                if (!monthsObject[monthKey]) {
                    monthsObject[monthKey] = [];
                   // console.log(`Created new month key: ${monthKey}`);
                  //  console.log(`this is done here: ${monthsObject}`);
                } 
                    
                monthsObject[monthKey].push(`${dayName} ${dayDate}`);
                  console.log(monthsObject);
                
                monthandyear = monthKey;
                  //console.log(monthandyear);
                

                  //use as static header text for the weekly days in month section 

                showDaysAsHeaderText += `${dayName} `;
                console.log(showDaysAsHeaderText);
               
            }
             
            currentMonthheader.textContent = monthandyear;

             monthsDaysDisplay.textContent = Object.values(monthsObject)
                .map(days => days.join(', '))
                .join(' | ');

            showDaysAsHeader.textContent = showDaysAsHeaderText; // Remove trailing space
            
            /*  if i want the key i.e month and year together wit the values.

             monthsDaysDisplay.textContent = Object.entries(monthsObject)
                .map(([month, days]) => `${month}:  ${days.join(', ')}`)
                .join('');

            */
         
        
            



           /*

            let selectedCurrValue;
            
            function logSelectedCurrency() {
                selectedCurrValue = toCurrency.options[toCurrency.selectedIndex].value; // Get the value of the selected option
                console.log(`Selected currency: ${selectedCurrValue}`);
            }
              toCurrency.addEventListener('change', logSelectedCurrency); // Listen for changes to the dropdown and log the selected currency{
               
            */


              //  selectedCurrValue = toCurrency.options[toCurrency.selectedIndex].value; // Get the value of the selected option
               // console.log(`Selected currency: ${selectedCurrValue}`);
 
                /*
                // Get the full text of the selected option. 'this' is toCurrency, no need, done up already
                selectedText = this.options[this.selectedIndex].text; 
                    // console.log(`Selected option text: ${selectedText}`);
                textRepCurr = selectedText.split(' ')[1]; // Extract the symbol from the selected option text

                console.log(`Extracted symbolText: ${textRepCurr}`);
                */
                // });

             /* example using promise method

                fetch(`https://v6.exchangerate-api.com/v6/88c2c34f1805cfde6c567bef/latest/${fromCurrency}`)
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    
                    return response.json();
                })
                .then(function(response) {
                    
                    if (rate === undefined) {
                        throw new Error(`No rate for ${toCurrency} in response`);
                    }
                    middleResultDisplay.textContent = response.conversion_rates.MYR;
                })
                .catch(e => {
                    console.log(e);
                    document.querySelector('.resultMiddle p').textContent = 'Rate not available';
                }); 

                */


            /*
            document.querySelector('#conversionForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            const amount = document.querySelector('#amount').value;
            const from = document.querySelector('.from').value;
            const to = document.querySelector('.to').value;
            const resultElems = document.querySelectorAll('#converted-amount');

            // Get today's date and yesterday's date in YYYY-MM-DD format
            const today = new Date();
              // console.log(today);
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);
            console.log(yesterday);
            const formatDate = d => d.toISOString().split('T')[0];
            
            toDay.textContent = new Date().toISOString();
 
              // Example using a public currency API      --- i will later use this block ....
               //     async function getRates() {
                //        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
               //         const data = await response.json();
               //         console.log(`USD to EUR: ${data.rates.EUR}`);
               //     }
               //     getRates(); 
               //  .... to re-arrange the bleow code. 

            // Fetch today's rate
            const todayUrl = `https://api.exchangerate.host/latest?base=${from}&symbols=${to}`;
            // Fetch yesterday's rate
            const yesterdayUrl = `https://api.exchangerate.host/${formatDate(yesterday)}?base=${from}&symbols=${to}`;

            try {
                const [todayRes, yesterdayRes] = await Promise.all([
                    fetch(todayUrl),
                    fetch(yesterdayUrl)
                ]);
                const todayData = await todayRes.json();
                const yesterdayData = await yesterdayRes.json();

                const todayRate = todayData.rates[to];
                const yesterdayRate = yesterdayData.rates[to];

                let arrow = '';
                if (todayRate > yesterdayRate) arrow = '↑';
                else if (todayRate < yesterdayRate) arrow = '↓';
                else arrow = '<->';

                const converted = (amount * todayRate).toFixed(2);
                resultElems.forEach(elem => {
                    elem.textContent = `${converted} ${to} ${arrow}`;
                });
            } catch (err) {
                resultElems.forEach(elem => {
                    elem.textContent = 'Error fetching rates.';
                });
            }
                
        });  
        */


       