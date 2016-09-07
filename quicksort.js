$(document).ready(function () {


	
var useBubbleSort = undefined 
var useQuickSort = undefined
    
    // this if for the lazy user that refuses to type numbers. This is for ease of access in checking that the function works.
    var randomArray = [];

    function randomize() {


        for (var u = 0, p = 40; u < p; u++) {
            while (randomArray.length < 12) {
                randomArray.push(Math.round(Math.random() * p))
                document.getElementById('randomNumbers').innerHTML = "The random numbers are " + randomArray
            }
        }
    }
    randomize()

    function printToPage(msg) {
        if ($('p').length) {
        	console.log("hello")
            $('p').remove()
            var message = "<p>" + msg + "<\p>";
            $("#mainSection").append(message);
        }
        else {
            var message = "<p>" + msg + "<\p>";
            $("#mainSection").append(message);
            console.log("bye")
        }
    }


    // this function takes in an array and sorts it by numeric value
    //these set the variables
    

    
    window.numbersToSort = []
    // This lets the user decide to use preloaded numbers or to insert their own
$('#qSort').click(function(e){
    e.preventDefault();
    useQuicSort = true;
    useBubbleSort = false
});
$('#bSort').click(function(e)
{
    e.preventDefault();
   var useBubbleSort = true;
   useQuicSort =false;
});
   
   if(useBubbleSort)
   {
    $("#usePrewrittenNumbers").click(function (e) {

        e.preventDefault();

        //user wants to use preloaded numbers
        numbersToSort = randomArray
        bubbleSort(numbersToSort)


    });

    //user wants to use their own numbers  
    $("#useOwn").click(function (e) {
        e.preventDefault();
        if (document.getElementById("arrayGenerator").value.length === 0) {
            printToPage("Please insert numbers seperated with commas.")
        }
        else {
            var stringy = document.getElementById("arrayGenerator").value
            numbersToSort = stringy.split(",")

            ///tttttegkeqjbqetjbtelkjb

            for (a = 0; a < numbersToSort.length; a++) {
                if (isNaN(parseFloat(numbersToSort[a])) === true) {
                    //this checks the user input and filters out all non number values      
                    numbersToSort.splice(a, 1);
                    a--;
                    console.log(numbersToSort[a])
                }
                //this converts the remaining values into the array of numbers to sort
                numbersToSort[a - 1] = parseFloat(numbersToSort[a - 1])

            }

            bubbleSort(numbersToSort)
        }


    });




    //this statement compares the ammountOfNumbers variable and the numbersToSort variable. It requests user input until the variables are equal


    function bubbleSort(array) {
        var swapped = true

        while (swapped == true) {
            var ammountSwapped = 0
            //This is the ammount of times it has to pass through
            for (var j = 0, l = j + 1; j, l < (array.length) ; j++, l++) {
                // J and  l less than the length of the array  - the ammount of passes minus 1
                if (array[j] > array[l]) {

                    //This swaps the numbers
                    var temporary = array[j];
                    array[j] = array[l]; // array of j is replaced with array of l
                    array[l] = temporary; //array of l is replaced with array of j
                    swapped = true
                    console.log(array[j])
                    console.log(array[l])
                    ammountSwapped++
                }

            }
            if (ammountSwapped == 0) {
                swapped = false
            }
        }
        printToPage("The sorted array is " + numbersToSort);

    }




}
else if(useQuicSort)
{
 $("#usePrewrittenNumbers").click(function (e) {

        e.preventDefault();

        //user wants to use preloaded numbers
        numbersToSort = randomArray
        quickSort(numbersToSort)


    });

    //user wants to use their own numbers  
    $("#useOwn").click(function (e) {
        e.preventDefault();
        if (document.getElementById("arrayGenerator").value.length === 0) {
            printToPage("Please insert numbers seperated with commas.")
        }
        else {
            var stringy = document.getElementById("arrayGenerator").value
            numbersToSort = stringy.split(",")

            

            }

            quickSort(numbersToSort)
        }


    });




    
function swap(array)
{
	console.log(array + " before the swap")
	var temp = array[h]
	
	
	swapped = false

	if(array[k] < array[h])
	{
	array[h] = array[k]
	array[k] = temp
	swapped = true;
	h++
	k++
	while(swapped === true)
{
	swap(array)
}
}
else{
	swapped = false;
}
}


console.log(array)

}
}
function quickSort(array,lessThan,moreThan) { 
	
	var lengthy = array.length
	var pivot = array[0]
	        for(var g = 0; g <lengthy; g++)
        {
        	
        	
        	if (array[g] > pivot)
        	{
        		moreThan.push(array[g])
        		console.log(moreThan)
        	}
        	else{
        		lessThan.push(array[g])
        		console.log(lessThan)
        		if (g == lengthy -1)
        	{
        		for(h = 0,k = 1; h,k < moreThan.length;)
        		{
        		swap(moreThan)     	
        		
        	}
        	for(h=0, k =1; h,k <lessThan.length;){
        		swap(lessThan)
        	}

        	}
        }
      
}
}
quickSort(numbersToSort)
        printToPage("The sorted array is " + numbersToSort);

    }
}
});
