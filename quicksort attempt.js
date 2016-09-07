
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
var arra = [33,12,67,4,25,33,51,26,5,63,7,1,153,271,23]
var left = []
var right = []
