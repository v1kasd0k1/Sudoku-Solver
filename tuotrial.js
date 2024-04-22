const str=[]
function rowCheck()
{
    console.log("Checking rows")
    const row=[0,9,18,27,36,45,54,63,72];
    for(let i=0;i<9;i++)//sdjfkskdds
    {
        const map=[];
        let k=0;
        for(let j=0;j<9;j++)
        {
            let pos=row[i]+j;
            if(str[pos]!="")
            {
                if((map.find((ele)=>(ele==str[pos])))==undefined)
                {
                   map[k++]=str[pos];
                  // console.log(str[pos])
                }
                else
                  return false;
            }
        }
    }
    return true;
}
function colCheck()
{
    console.log("Checking cols")
    for(let i=0;i<9;i++)
    {
        const map=[];
        let k=0;
        for(let j=0;j<81;j=j+9)
        {
            let pos=i+j;
            if(str[pos]!="")
            {
                if((map.find((ele)=>(ele==str[pos])))==undefined)
                {
                   map[k++]=str[pos];
                }
                else
                  return false;
            }
        }
    }
    return true;
}
const boxCheck=()=>
{
   const row=[0,3,6,27,30,33,54,57,60]
   for(let i=0;i<9;i++)
   {
    const map=[];
    let n=0;
       for(let j=0;j<27;j+=9)
       {
         for(let k=0;k<3;k++)
         {
            let pos=row[i]+j+k;
            if(str[pos]!="")
            {
                if((map.find((ele)=>(ele==str[pos])))==undefined)
                {
                   map[n++]=str[pos];
                }
                else
                  return false;
            }
         }
       }
   }
   return true;
}
const enterData=(event)=>
{
    var td1=event.target;
    if(td1.innerText.length>1||td1.innerText=='0')
    {
        alert("The values must in the range [1-9]")
        td1.innerText="";
    }
}
const cleared=()=>
{
 
   let arr= document.getElementsByTagName('td')
    for(var i=0;i<arr.length;i++)
    {
        arr[i].innerText="";
    }
    console.log("All Cleared")
}
const solveSudo=()=>
{
    console.log("The sudoku is solved")
   let arr=document.getElementsByTagName('td')
   for(var i=0;i<arr.length;i++)
     str[i]=arr[i].innerText;
   let c1=rowCheck()
   let c2=colCheck()
   let c3=boxCheck()
   if(c1==true&&c2==true&&c3==true)
   {
       fillSudo(str,0) 
       for(let i=0;i<arr.length;i++)
           arr[i].innerText=str[i]; 
   }
   else
   {
       alert("The entered data is not correct");
   }
   
}
function fillSudo(str,i)
{
    const a=['1','2','3','4','5','6','7','8','9']
    let c1=rowCheck()
    let c2=colCheck()
    let c3=boxCheck()
    if(c1==false||c2==false||c3==false)
       return false;
    if(i==81)
      return true;
    if(str[i]=="")
    {
        for(let k=0;k<9;k++)
        {
            str[i]=a[k];
            i++;
            if(fillSudo(str,i))
               return true;
            i--;
            str[i]="";
        }
    }
    else
    {
        i++;
        if(fillSudo(str,i))
          return true;
        i--;
    }
}

