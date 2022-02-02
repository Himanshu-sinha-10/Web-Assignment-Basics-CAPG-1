
        //fetch buttons
        let mButton = document.getElementById('btn-multiply');
        let dButton = document.getElementById('btn-divide');

        //add event listener
        mButton.addEventListener('click', handleMultiplication);
        dButton.addEventListener('click', handleDivision);

        function handleMultiplication() {
            //fetch the num1 and num2 values
            let num1 = document.getElementById('num1').value;
            let num2 = document.getElementById('num2').value;

            //calculate result
            let result = num1 * num2;

            //display the result
            document.getElementById('result').innerHTML = "The Result Is:<br>" + result;
        }

        function handleDivision() {
            //fetch the num1 and num2 values
            let num1 = document.getElementById('num1').value;
            let num2 = document.getElementById('num2').value;

            //calculate result
            let result = num1 / num2;

            //display the result
            document.getElementById('result').innerHTML = "The Result Is:<br>" + result;
        }