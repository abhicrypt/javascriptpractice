let a=[5,6,7,9,7,6,11,91,22,36,11,7];
let b=a;
for(let i=0;i<=Array.length-1;i++)
    {
        for (j=0;j<=Array.length-1;j++)
        if(a[i]==b[j])
        {
            b.splice(j);
            console.log(b);
        }

    }
{
console.log(b);
}