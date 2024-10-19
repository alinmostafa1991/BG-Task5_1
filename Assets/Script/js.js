let result = document.querySelector('.result');
let prev ;

function addnumber(x)
{
    if ( result.value == prev )
    {
        prev = 0 ;
        result.value = '' ;
        result.value += x;
    }
    else
    {
        result.value += x;
    }
}
function addOperator(y)
{
    operator = y ;
    result.value += operator ;
}
function calculate()
{
    res = eval(result.value);
    result.value = res ;
    prev = res ;
}
function clearresult()
{
    result.value = '' ;
}
