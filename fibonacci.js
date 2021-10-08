let n1=0,n2=1,n3,i;
for(i=2;i<10;++i)
{
    n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
}