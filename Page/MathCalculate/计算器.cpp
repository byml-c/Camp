#include<iostream>
#include<cstdio>
#include<string>
#include<cmath>
#define N 1010
using namespace std;

string c;
int Pow(int x,int y){
	return pow(x,y);
}
int CalNumber(int x1,int x2,char opr){
	int ans;
	if(opr=='+')ans=x1+x2;
	else if(opr=='-')ans=x2-x1;
	else if(opr=='*')ans=x1*x2;
	else if(opr=='/')ans=x2/x1;
	else if(opr=='^')ans=Pow(x2,x1);
	return ans;
}
int Calculate(string s){
	int num[N],ntop,op[N],otop;
	int lens=s.size(),sum;
	sum=ntop=otop=0;
	for(int i=0;i<=lens;++i){
		if(i==lens){
			if(s[i-1]!=')'&&s[i-1]!='}'){
				num[++ntop]=sum;
			}
			while(ntop>1){
				int x1=num[ntop];--ntop;
				int x2=num[ntop];--ntop;
				num[++ntop]=CalNumber(x1,x2,op[otop--]);	
			}
		}else if(s[i]>='0'&&s[i]<='9'){
			sum=sum*10+s[i]-'0';
		}else{
			if(s[i]!='('&&s[i]!=')'&&s[i]!='{'&&s[i]!='}'){
				if((i>0&&s[i-1]=='('&&s[i-1]=='{')||(i<lens-1&&s[i+1]=='('&&s[i+1]=='{')){
					num[++ntop]=sum;
				}
				if(i>0&&s[i-1]!=')'&&s[i-1]!='}'){
					num[++ntop]=sum;
				}
			}else if((s[i]=='}'||s[i]==')')&&(i>0&&s[i-1]!='{'&&s[i-1]!='}'&&s[i-1]!='('&&s[i-1]!=')')){
				num[++ntop]=sum;
			}else if(s[i]=='('&&i>0&&s[i-1]>='0'&&s[i-1]<='9'){
				num[++ntop]=sum;
				while(ntop>1&&op[otop]!='('&&op[otop]!='{'&&(op[otop]!='+'&&op[otop]!='-')){
					int x1=num[ntop];--ntop;
					int x2=num[ntop];--ntop;
					num[++ntop]=CalNumber(x1,x2,op[otop--]);
				}
				op[++otop]='*';
			}
			sum=0;
			if(s[i]=='('||s[i]==')'){
				if(s[i]=='('){
					op[++otop]=s[i];
				}else{
					while(otop&&op[otop]!='('){
						int x1=num[ntop];--ntop;
						int x2=num[ntop];--ntop;
						num[++ntop]=CalNumber(x1,x2,op[otop--]);
					}--otop;
				}
			}if(s[i]=='{'||s[i]=='}'){
				if(s[i]=='{'){
					op[++otop]=s[i];
				}else{
					while(otop&&op[otop]!='{'){
						int x1=num[ntop];--ntop;
						int x2=num[ntop];--ntop;
						num[++ntop]=CalNumber(x1,x2,op[otop--]);
					}--otop;
				}
			}else if(s[i]=='+'||s[i]=='-'){
				while(ntop>1&&op[otop]!='('&&op[otop]!='{'){
					int x1=num[ntop];--ntop;
					int x2=num[ntop];--ntop;
					num[++ntop]=CalNumber(x1,x2,op[otop--]);
				}
				op[++otop]=s[i];
			}else if(s[i]=='*'||s[i]=='/'){
				while(ntop>1&&op[otop]!='('&&op[otop]!='{'&&(op[otop]!='+'&&op[otop]!='-')){
					int x1=num[ntop];--ntop;
					int x2=num[ntop];--ntop;
					num[++ntop]=CalNumber(x1,x2,op[otop--]);
				}
				op[++otop]=s[i];
			}else if(s[i]=='^'){
				op[++otop]=s[i];
			}
		}
	}
	return num[ntop];
}
int main(){
	freopen("in.txt","r",stdin);
	cin>>c;
	cout<<"input: "<<c<<endl;
	printf("%d\n",Calculate(c));
}
